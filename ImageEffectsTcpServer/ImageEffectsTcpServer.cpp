#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"
#include <iostream>
#include <sys/socket.h>
#include <sys/types.h>
#include <unistd.h>
#include <netdb.h>
#include <arpa/inet.h>
#include <string.h>
#include <string>
#include <thread>

void serveClient(sockaddr_in client, socklen_t clientSize, int clientSocket);

using namespace cv;

/**
 * Tomado de: https://gist.github.com/codehoose/020c6213f481aee76ea9b096acaddfaf
 */
int main(int argc, char **argv) {
	// Create Socket
	int listening = socket(AF_INET, SOCK_STREAM, 0);
	if (listening == -1) {
		std::cerr << "Can't create the socket";
		return -1;
	}
	// Bind the socket to IP address
	sockaddr_in hint;
	hint.sin_family = AF_INET;
	hint.sin_port = htons(54000);
	inet_pton(AF_INET, "0.0.0.0", &hint.sin_addr);

	if (bind(listening, (sockaddr*)&hint, sizeof(hint)) == -1) {
		std::cerr << "Can't bind to IP/PORT";
		return -2;
	}

	// Tell Winsock the socket is for listening
	if (listen(listening, SOMAXCONN) == -1) {
		std::cerr << "Can't listen";
		return -3;
	}

	while (true) {
		// Wait for a connection
		sockaddr_in client;
		socklen_t clientSize = sizeof(client);
		int clientSocket = accept(listening, (sockaddr*)&client, &clientSize);
		serveClient(client, clientSize, clientSocket);
	}


	// Close listening socket
	close(listening);

	return 0;
}


void serveClient(sockaddr_in client, socklen_t clientSize, int clientSocket) {
	char host[NI_MAXHOST];      // Client's remote name
	char service[NI_MAXSERV];   // Service (i.e. port) the client is connect on

	memset(host, 0, NI_MAXHOST); // same as memset(host, 0, NI_MAXHOST);
	memset(service, 0, NI_MAXSERV);

	if (getnameinfo((sockaddr*)&client,
			sizeof(client),
			host,
			NI_MAXHOST,
			service,
			NI_MAXSERV,
			0) == 0) {
		std::cout << host << " connected on port " << service << std::endl;
	} else {
		inet_ntop(AF_INET, &client.sin_addr, host, NI_MAXHOST);
		std::cout << host << " connected on port " << ntohs(client.sin_port) << std::endl;
	}



	// While loop: accept and echo message back to client
	char buf[4096];

	while (true) {
		memset(buf, 0, 4096);

		// Wait for client to send data
		int bytesReceived = recv(clientSocket, buf, 4096, 0);
		if (bytesReceived == -1) {
			std::cerr << "Error in recv(). Quitting" << std::endl;
			break;
		}

		if (bytesReceived == 0) {
			std::cout << "Client disconnected " << std::endl;
			break;
		}

		std::string input = std::string(buf, 0, bytesReceived);

		if (input.find(";;;;") == std::string::npos) {
			std::string s = "ERROR\n";
			bytesReceived = s.length();
			std::strcpy(buf, s.c_str());
			send(clientSocket, buf, bytesReceived + 1, 0);
		} else {
			std::string path = input.substr(0, input.find(";;;;"));
			input = input.substr(path.length()+4, input.length());
			std::string name = input.substr(0, input.find(";;;;"));
			input = input.substr(name.length()+4, input.length());
			std::string extension = input.substr(0, input.find(";;;;"));
			input = input.substr(extension.length()+4, input.length());
			std::string filter = input.substr(0, 1);
			Mat image = imread( path+name+extension );
			if( image.empty() ) {
				std::cout << "Could not open or find the image!\n" << std::endl;
			}
			Mat new_image = Mat::zeros( image.size(), image.type() );
			double alpha = 1.0; /*< Simple contrast control */
			int beta = 0;       /*< Simple brightness control */
			std::cout << " Basic Linear Transforms " << std::endl;
			std::cout << "-------------------------" << std::endl;
			if (!filter.compare("1")) {
				alpha = 2;
				beta = 50;
			} else if (!filter.compare("2")) {
				alpha = 1;
				beta = 100;
			} else if (!filter.compare("3")) {
				alpha = 2;
				beta = 0;
			}
			for( int y = 0; y < image.rows; y++ ) {
				for( int x = 0; x < image.cols; x++ ) {
					for( int c = 0; c < image.channels(); c++ ) {
						new_image.at<Vec3b>(y,x)[c] =
								saturate_cast<uchar>( alpha*image.at<Vec3b>(y,x)[c] + beta );
					}
				}
			}
			std::string outpath = path+name+"-"+filter+extension;
			std::cout << outpath << std::endl;
			imwrite(outpath, new_image);
			// Echo message back to client
			bytesReceived = outpath.length();
			std::strcpy(buf, outpath.c_str());
			send(clientSocket, buf, bytesReceived, 0);
		}
	}

	// Close the socket
	close(clientSocket);
}


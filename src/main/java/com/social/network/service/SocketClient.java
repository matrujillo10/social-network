package com.social.network.service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

import com.social.network.exception.ServerErrorException;

public class SocketClient {
	private Socket socket;
	private BufferedReader dis;
	private DataOutputStream dos;

	public String process(String command) {
		try {
			dos.writeUTF(command);
			String line = dis.readLine();
			dis.close();
			dos.close(); 
			socket.close();
			if(!line.equals("ERROR")) {
				return line;
			} else {
				throw new ServerErrorException();
			}
		} catch (IOException e) {
			throw new ServerErrorException();
		}
	}

	public SocketClient(String add, int port) {
		try {
			socket = new Socket(add, port);
			dis = new BufferedReader(new InputStreamReader(System.in));
			dos = new DataOutputStream(socket.getOutputStream());
		} catch(IOException e) {
			throw new ServerErrorException();
		}
	}

}


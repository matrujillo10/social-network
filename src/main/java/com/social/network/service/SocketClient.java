package com.social.network.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import com.social.network.exception.ServerErrorException;

public class SocketClient {
	private Socket socket;
	private BufferedReader dis;
	private PrintWriter dos;

	public String process(String command) {
		try {
			dos.println(command);
			System.out.println("Antes de enviar");
			String line = dis.readLine().trim();
			System.out.println("Después de enviar");
			dis.close();
			System.out.println("Cierre 1");
			dos.close();
			System.out.println("Cierre 2");
			socket.close();
			System.out.println("Cierre 3");
			System.out.println(line);
			if(line != null && !line.equals("ERROR")) {
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
			dis = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			dos = new PrintWriter(socket.getOutputStream(), true);
		} catch(IOException e) {
			throw new ServerErrorException();
		}
	}
}



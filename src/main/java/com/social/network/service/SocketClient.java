package com.social.network.service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.ArrayList;

import com.social.network.exception.ServerErrorException;

public class SocketClient {

	private Socket socket;
	private BufferedReader dis;
	private DataOutputStream dos;
	
	public ArrayList<String> process(ArrayList<String> s){
		ArrayList<String> responses = new ArrayList<String>();
		for(int i = 0; i < s.size(); i++) {
			String message = s.get(i);
			try {
				dos.writeUTF(message);
				String line = dis.readLine();
				if(!line.equals("ERROR")) {
				responses.add(line);
				}else {
					throw new ServerErrorException();
				}
			} catch (IOException e) {
				System.out.println(e);
			}
		}
		return responses;
	}
	

	public SocketClient(String add, int port, ArrayList<String> s) {
		
		try {
			socket = new Socket(add, port);
			dis = new BufferedReader(new InputStreamReader(System.in));
			dos = new DataOutputStream(socket.getOutputStream());
		}catch(UnknownHostException u){
			System.out.println(u);
		}catch(IOException i) {
			System.out.println(i);
		}
		
		process(s);
		
		try {
			dos.writeUTF("Over");
			dis.close(); 
	        dos.close(); 
	        socket.close(); 
		} catch (IOException e) {
			System.out.println(e);
		}
	}
	
	public static void main(String args[]) 
    { 
		ArrayList<String> test = new ArrayList<String>();
		test.add("a");
		test.add("b");
		test.add("c");
		SocketClient client = new SocketClient("127.0.0.1", 5001, test);
    } 
	
}


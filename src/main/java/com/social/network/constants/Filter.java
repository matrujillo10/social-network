package com.social.network.constants;

public enum Filter {
	
	FILTER_1("Filtro 1", "1"),
	FILTER_2("Filtro 2", "2"),
	FILTER_3("Filtro 3", "3");
	
	private String name;
	private String id;
	
	Filter(String name, String id) {
		this.name = name;
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public String getId() {
		return id;
	}
}

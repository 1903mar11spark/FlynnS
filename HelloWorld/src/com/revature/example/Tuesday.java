package com.revature.example;

public class Tuesday {
	
	public static void main(String[] args) {
		System.out.println("Hello World");
		funWithWrapperClasses();
	}

	static void funWithWrapperClasses() {
		
		//integer-valued primitives
		byte b = 5;
		short s = 6;
		int i = 7;
		long l = 8l;
		
		Integer j = i; //autoboxing
		b = new Byte((byte)9); //narrowing converstion - be careful! 
		  
		//String to number conversions
		String str = "55.4";
		Double d = Double.parseDouble(str);
		
		//check type of d
		System.out.println(d.getClass());
		boolean isDouble = (d instanceof java.lang.Double);
		System.out.println(isDouble);
		
		
		// str = i; //no more loose typing
		
		
		
		
	}
}

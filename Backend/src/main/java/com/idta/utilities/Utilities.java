package com.idta.utilities;

import java.util.Random;

public class Utilities {

	private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	private static final String NUMBERS = "0123456789";

	public static String generateRandomId(int size) {
		Random random = new Random();
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < size; i++)
			sb.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length() - 1)));
		return sb.toString();
	}

	public static String generateRandomNumber(int size) {
		Random random = new Random();
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < size; i++)
			sb.append(NUMBERS.charAt(random.nextInt(NUMBERS.length() - 1)));
		return sb.toString();
	}

	public static String generateTransactionId(int size) {
		return "txn_" + Utilities.generateRandomNumber(size);
	}

	public static boolean isEmpty(String s) {
		return ((s == null) || ("".equals(s)) || ("null".equals(s)));
	}

	public static <T> T requiredNotNull(T obj, String message) {
		if (obj == null || obj == "" || obj == " " || obj == "null")
			throw new RuntimeException(message);
		return obj;
	}

	public static void main(String[] args) {
		System.out.println("OUTPUT::" + generateRandomId(30));
	}

}

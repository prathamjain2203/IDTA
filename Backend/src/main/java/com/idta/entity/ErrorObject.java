package com.idta.entity;

public class ErrorObject {

	private String path;
	private String error;
	private String message;
	private String status;

	public ErrorObject(String path, String error, String message, String status) {
		super();
		this.path = path;
		this.error = error;
		this.message = message;
		this.status = status;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}

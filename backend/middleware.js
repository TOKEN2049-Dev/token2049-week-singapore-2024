export function setCORSHeaders(response) {
	response.headers.set("Access-Control-Allow-Origin", "*");
	response.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
	response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
	response.headers.set("Access-Control-Allow-Credentials", "true");
}

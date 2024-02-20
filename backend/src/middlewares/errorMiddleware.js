export default function errorMiddleware(err, _req, res, _next) {
	const statusCode = err.status || 500;
	const response = {
		success: false,
		message: err.message,
		error: err.error,
	};

	res.status(statusCode).json(response);
}

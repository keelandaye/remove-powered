module.exports.removePowered = (req, res, next) => {
	res.removeHeader('x-powered-by');
	next();
};

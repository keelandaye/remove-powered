 /**
  * Removes X-Powered-By header as Express middleware
  * 
  * @param {Request} req 
  * @param {Response} res 
  * @param {NextFunction} next 
  */
const removePowered = (req, res, next) => {
	res.removeHeader('x-powered-by');
	next();
};

module.exports.removePowered = removePowered;

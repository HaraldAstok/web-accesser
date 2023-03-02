const Joi = require("joi");

const HTML_REGEX = /(http):\/\//i;



exports.url = Joi.object().keys({
	url: Joi.string().min(7).regex(HTML_REGEX).required(),
});


exports.urlArray = Joi.object().keys({
	urls: Joi.array().items(Joi.string().min(7).regex(HTML_REGEX).required())
})
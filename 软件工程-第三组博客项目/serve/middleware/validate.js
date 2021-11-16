const {validationResult, buildCheckFunction} = require('express-validator')
const {isValidObjectId} = require("mongoose");

// parallel processing 并行处理
// 暴露一个函数，函数接收验证规则，返回一个函数
exports = module.exports = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({errors: errors.array()});
    };
};

// 检查ID是否有效 不懂
exports.isValidObjectId = (Location, fields) => {
    return buildCheckFunction(Location)(fields).custom(
        async value => {
            if (!isValidObjectId(value)) {
                return Promise.reject("ID 不是有效 ObjectID")
            }
        }
    )
}
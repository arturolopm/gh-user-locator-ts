"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = exports.deleteUser = exports.createUser = exports.getOneUser = exports.getAllUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const utils_1 = require("../utils/utils");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield user_1.default.findAll();
    res.json(responseItem);
});
exports.getAllUsers = getAllUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const responseItem = yield user_1.default.findByPk(id);
    if (responseItem) {
        res.json(responseItem);
    }
    else {
        res.status(404).json({
            message: 'User not found'
        });
    }
});
exports.getOneUser = getOneUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const responseItem = yield (0, utils_1.createUserOnDB)(body);
        res.status(200).send(responseItem);
    }
    catch (error) {
        // Check if the error is due to a pre-existing user
        if (error.message.includes('already exists')) {
            res.status(409).send({ error: error.message });
        }
        else {
            res
                .status(500)
                .send({ error: 'An error occurred while creating the user.' });
        }
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser pending route',
        id
    });
};
exports.deleteUser = deleteUser;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        else {
            yield user.update(body);
            res.status(200).json({
                message: 'User updated',
                user
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Error updating user'
        });
    }
});
exports.editUser = editUser;
//# sourceMappingURL=users.js.map
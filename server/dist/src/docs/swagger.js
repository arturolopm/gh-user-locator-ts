"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API user location documentation',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:8080/'
        }
    ],
    components: {
        schemas: {
            User: {
                type: 'object',
                required: ['userName'],
                properties: {
                    userName: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
const swaggerOptions = {
    swaggerDefinition,
    apis: ['**/*.ts']
};
exports.default = (0, swagger_jsdoc_1.default)(swaggerOptions);
//# sourceMappingURL=swagger.js.map
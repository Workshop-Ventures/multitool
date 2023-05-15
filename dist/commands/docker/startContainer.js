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
const constants_1 = __importDefault(require("../../constants"));
module.exports = {
    name: 'start-container',
    alias: ['start'],
    description: 'Starts a container for a given service',
    run: (toolbox) => __awaiter(void 0, void 0, void 0, function* () {
        const { startNetwork, startContainer, parameters, prompt, filesystem } = toolbox;
        let serviceName = parameters.first;
        if (!serviceName) {
            const services = filesystem.list(constants_1.default.servicesDirectory);
            const result = yield prompt.ask({
                type: 'list',
                name: 'serviceName',
                message: 'Which service would you like to start?',
                choices: services,
            });
            if (result && result.serviceName)
                serviceName = result.serviceName;
        }
        // Set up an array of functions that will return Promises
        const commands = [
            startNetwork.bind(null, {
                name: constants_1.default.defaultNetworkName,
                driver: constants_1.default.defaultNetworkDriver,
            }),
            startContainer.bind(null, { serviceName }),
        ];
        // Run each promise in order
        for (let command of commands) {
            yield command();
        }
    }),
};
//# sourceMappingURL=startContainer.js.map
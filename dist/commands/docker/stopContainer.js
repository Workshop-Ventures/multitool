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
module.exports = {
    name: 'stop-container',
    alias: ['stop'],
    description: 'Stops a container for a given service',
    run: (toolbox) => __awaiter(void 0, void 0, void 0, function* () {
        const { stopContainer, parameters, prompt } = toolbox;
        let serviceName = parameters.first;
        if (!serviceName) {
            const result = yield prompt.ask({
                type: 'input',
                name: 'serviceName',
                message: 'Which service would you like to stop?',
            });
            if (result && result.serviceName)
                serviceName = result.serviceName;
        }
        yield stopContainer({ serviceName });
    }),
};
//# sourceMappingURL=stopContainer.js.map
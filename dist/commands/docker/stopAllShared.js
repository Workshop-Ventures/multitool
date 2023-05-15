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
const constants_1 = __importDefault(require("../../constants"));
module.exports = {
    name: 'stop-shared-services',
    alias: ['stop-shared'],
    description: 'Stops services that are shared across all the apps',
    run: (toolbox) => __awaiter(void 0, void 0, void 0, function* () {
        const { stopContainer, print } = toolbox;
        print.info('Preparing to stop the following services: ');
        for (const service of constants_1.default.sharedServices) {
            print.info(service);
        }
        for (const serviceName of constants_1.default.sharedServices) {
            yield stopContainer({ serviceName });
        }
    }),
};
//# sourceMappingURL=stopAllShared.js.map
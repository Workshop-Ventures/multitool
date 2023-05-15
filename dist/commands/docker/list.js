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
    name: 'list-services',
    alias: ['ls'],
    description: 'List available docker services to run',
    run: (toolbox) => __awaiter(void 0, void 0, void 0, function* () {
        const { filesystem, print } = toolbox;
        const services = filesystem.list(constants_1.default.servicesDirectory) || [];
        print.info('The following services are available:');
        for (let service of services) {
            print.info(service);
        }
    }),
};
//# sourceMappingURL=list.js.map
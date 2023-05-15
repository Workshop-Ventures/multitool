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
const constants_1 = __importDefault(require("../constants"));
module.exports = (toolbox) => {
    toolbox.startContainer = ({ serviceName }) => __awaiter(void 0, void 0, void 0, function* () {
        const { print, filesystem, system } = toolbox;
        const spinner = print.spin(`Creating container for service ${serviceName}...`);
        const dockerComposeFile = `${constants_1.default.servicesDirectory}/${serviceName}/docker-compose.yml`;
        if (filesystem.exists(dockerComposeFile)) {
            try {
                yield system.run(`docker-compose --file=${dockerComposeFile} up -d --build`);
                spinner.succeed(`Created container for service ${serviceName}`);
            }
            catch (err) {
                spinner.fail(`Unable to start service: ${serviceName}! ${err}`);
            }
        }
        else {
            spinner.fail(`Invalid service; cannot find a docker compose for service: ${serviceName}!`);
        }
    });
};
//# sourceMappingURL=startContainerExtension.js.map
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
module.exports = (toolbox) => {
    const { system, print } = toolbox;
    toolbox.startNetwork = ({ name, driver }) => __awaiter(void 0, void 0, void 0, function* () {
        const spinner = print.spin("Creating docker network...");
        try {
            yield system.run(`docker network create --driver ${driver} ${name}`);
            spinner.succeed(`Created network ${name}!`);
        }
        catch (err) {
            if (String(err).includes(`${name} already exists`)) {
                spinner.warn(`Network ${name} already exists`);
            }
            else {
                spinner.fail(`Failed to create network ${name}. ${String(err)}`);
            }
        }
    });
};
//# sourceMappingURL=startNetworkExtension.js.map
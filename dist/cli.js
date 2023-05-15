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
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const gluegun_1 = require("gluegun");
function run(argv) {
    return __awaiter(this, void 0, void 0, function* () {
        const cli = (0, gluegun_1.build)()
            .brand('multitool')
            .src(__dirname)
            .help()
            .version()
            .defaultCommand()
            .create();
        const toolbox = yield cli.run(argv);
        // sending it back for testing
        return toolbox;
    });
}
exports.run = run;
//# sourceMappingURL=cli.js.map
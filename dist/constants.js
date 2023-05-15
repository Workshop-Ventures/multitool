"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    defaultNetworkName: 'local_default',
    defaultNetworkDriver: 'bridge',
    servicesDirectory: `${__dirname}/../services`,
    sharedServices: [
        'mysql',
        'mongodb',
        'redis',
        'rabbitmq',
        'localstack',
        'metrics',
    ],
};
//# sourceMappingURL=constants.js.map
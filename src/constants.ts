export default {
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

import C from '../../constants';
import { GluegunToolbox } from 'gluegun';

module.exports = {
  name: 'stop-all-shared',
  alias: ['stop-all'],
  description: 'Stops services that are shared across all the apps',
  run: async (toolbox: GluegunToolbox): Promise<void> => {
    const { stopContainer, print } = toolbox;

    print.info('Preparing to stop the following services: ');

    for (const service of C.sharedServices) {
      print.info(service)
    }

    for (const serviceName of C.sharedServices) {
      await stopContainer({ serviceName });
    }
  },
};

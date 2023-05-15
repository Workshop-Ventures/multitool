import C from '../../constants';
import { GluegunToolbox } from 'gluegun';

module.exports = {
  name: 'start-all-shared',
  alias: ['start-all'],
  description: 'Stops services that are shared across all the apps',
  run: async (toolbox: GluegunToolbox): Promise<void> => {
    const { startContainer, print } = toolbox;

    print.info('Preparing to start the following services: ');

    for (const service of C.sharedServices) {
      print.info(service)
    }

    for (const serviceName of C.sharedServices) {
      await startContainer({ serviceName });
    }
  },
};

import C from '../../constants';
import { GluegunToolbox } from 'gluegun';

export = {
  name: 'list-services',
  alias: ['ls'],
  description: 'List available docker services to run',
  run: async (toolbox: GluegunToolbox): Promise<void> => {
    const { filesystem, print } = toolbox;

    const services = filesystem.list(C.servicesDirectory) || [];

    print.info('The following services are available:');
    for (let service of services) {
      print.info(service)
    }
  },
};

import C from '../../constants';
import { GluegunToolbox } from "gluegun";

export = {
  name: 'start-container',
  alias: ['start'],
  description: 'Starts a container for a given service',
  run: async (toolbox: GluegunToolbox): Promise<void> => {
    const { startNetwork, startContainer, parameters, prompt, filesystem } = toolbox;

    let serviceName = parameters.first;
    if (!serviceName) {
      const services = filesystem.list(C.servicesDirectory);

      const result = await prompt.ask({
        type: 'list',
        name: 'serviceName',
        message: 'Which service would you like to start?',
        choices: services,
      });
      if (result && result.serviceName) serviceName = result.serviceName;
    }

    // Set up an array of functions that will return Promises
    const commands = [
      startNetwork.bind(null, {
        name: C.defaultNetworkName,
        driver: C.defaultNetworkDriver,
      }),
      startContainer.bind(null, {serviceName}),
    ];

    // Run each promise in order
    for (let command of commands) {
      await command();
    }
  },
};

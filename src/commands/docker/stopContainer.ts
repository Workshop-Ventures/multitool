import { GluegunToolbox } from "gluegun";

export = {
  name: 'stop-container',
  alias: ['stop'],
  description: 'Stops a container for a given service',
  run: async (toolbox: GluegunToolbox): Promise<void> => {
    const { stopContainer, parameters, prompt } = toolbox;

    let serviceName = parameters.first;
    if (!serviceName) {
      const result = await prompt.ask({
        type: 'input',
        name: 'serviceName',
        message: 'Which service would you like to stop?',
      });
      if (result && result.serviceName) serviceName = result.serviceName;
    }

    await stopContainer({ serviceName });
  },
};

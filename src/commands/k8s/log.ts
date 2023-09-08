import { GluegunToolbox } from 'gluegun';
import { getDeployments } from '../../lib/getKubernetesServices';

export = {
  name: 'log',
  alias: ['logs'],
  description: 'Get the latest 1000 lines of logs from a specific service',
  run: async (toolbox: GluegunToolbox): Promise<void> => {
    const { system, parameters, print, prompt } = toolbox;

    const services = await getDeployments(toolbox);
    let service = parameters.first;
    const options = parameters.options;

    if (!service || !services.includes(service)) {
      print.info(services.join('\n'));
      const serviceAskResult = await prompt.ask({ type: 'select', name: 'service', message: 'Please select a service to get logs for', choices: services });
      service = serviceAskResult.service;
    }

    const result = await system.run(`kubectl logs deployment/${service} ${options.showHealth ? '' : '| grep -v /health' } | tail -n 1000`);
    print.info(result);
  },
};

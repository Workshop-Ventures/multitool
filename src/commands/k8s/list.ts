import { GluegunToolbox } from 'gluegun';
import { getDeployments } from '../../lib/getKubernetesServices';

export = {
  name: 'list',
  alias: ['ls', 'list-deployments'],
  description: 'List all deployments',
  run: async (toolbox: GluegunToolbox): Promise<void> => {
    const { print } = toolbox;

    const result = await getDeployments(toolbox);
    print.warning('The following deployments are active in the cluster:');
    print.info(result.join('\n'));
  },
};

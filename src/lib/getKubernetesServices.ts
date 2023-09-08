import { GluegunToolbox } from 'gluegun';

export const getDeployments = async (toolbox: GluegunToolbox): Promise<Array<string>> => {
  const { system } = toolbox;
  const result = await system.run('kubectl get deployments | cut -d " " -f 1 | tail -n +2');
  const deployments = result.split('\n').filter((s) => s !== '');
  return deployments;
}
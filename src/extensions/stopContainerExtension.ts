import C from '../constants';
import { GluegunToolbox } from 'gluegun';

export = (toolbox: GluegunToolbox): void => {
  toolbox.stopContainer = async ({ serviceName }: { serviceName: string }): Promise<void> => {
    const { print, filesystem, system } = toolbox;

    const spinner = print.spin(`Stopping container for service ${serviceName}...`);
    const dockerComposeFile = `${C.servicesDirectory}/${serviceName}/docker-compose.yml`;

    if (filesystem.exists(dockerComposeFile)) {
      try {
        await system.run(`docker-compose --file=${dockerComposeFile} down`);

        spinner.succeed(`Stopped container for service ${serviceName}`);
      } catch (err) {
        spinner.fail(`Unable to stop service: ${serviceName}! ${err}`);
      }
    } else {
      spinner.fail(`Invalid service; cannot find a docker compose for service: ${serviceName}!`);
    }
  };
};

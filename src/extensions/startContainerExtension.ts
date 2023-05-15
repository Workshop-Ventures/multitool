import C from '../constants';
import { GluegunToolbox } from 'gluegun';

export = (toolbox: GluegunToolbox): void => {
  toolbox.startContainer = async ({ serviceName }: { serviceName: string }): Promise<void> => {
    const { print, filesystem, system } = toolbox;

    const spinner = print.spin(`Creating container for service ${serviceName}...`);
    const dockerComposeFile = `${C.servicesDirectory}/${serviceName}/docker-compose.yml`;

    if (filesystem.exists(dockerComposeFile)) {
      try {
        await system.run(`docker-compose --file=${dockerComposeFile} up -d --build`);

        spinner.succeed(`Created container for service ${serviceName}`);
      } catch (err) {
        spinner.fail(`Unable to start service: ${serviceName}! ${err}`);
      }
    } else {
      spinner.fail(`Invalid service; cannot find a docker compose for service: ${serviceName}!`);
    }

  };
};

import { GluegunToolbox } from 'gluegun';

export = (toolbox: GluegunToolbox): void => {
  const { system, print } = toolbox;

  toolbox.startNetwork = async ({ name, driver }: { name: string, driver: string }): Promise<void> => {
    const spinner = print.spin("Creating docker network...");

    try {
      await system.run(`docker network create --driver ${driver} ${name}`);

      spinner.succeed(`Created network ${name}!`);
    } catch (err) {
      if (String(err).includes(`${name} already exists`)) {
        spinner.warn(`Network ${name} already exists`);
      } else {
        spinner.fail(`Failed to create network ${name}. ${String(err)}`);
      }
    }
  };
};

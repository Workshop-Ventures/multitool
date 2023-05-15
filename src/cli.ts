import { build, GluegunToolbox } from 'gluegun';
import { Options } from 'gluegun/build/types/domain/options';

async function run(argv: string | Options): Promise<GluegunToolbox> {
  const cli = build()
    .brand('multitool')
    .src(__dirname)
    .help()
    .version()
    .defaultCommand()
    .create();

  const toolbox = await cli.run(argv);

  // sending it back for testing
  return toolbox;
}

export { run };

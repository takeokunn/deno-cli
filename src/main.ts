import { Command } from './deps.ts';
import { catCommand } from './commands/cat.ts';
import { grepCommand } from './commands/grep.ts';

await new Command()
  .name('mycli')
  .version('0.1.0')
  .description('My CLI tool')
  .command('cat', catCommand)
  .command('grep', grepCommand)
  .parse(Deno.args);

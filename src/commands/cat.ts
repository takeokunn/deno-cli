import { Command } from '../deps.ts';

const displayFiles = async (files: string[]): Promise<void> => {
  for (const file of files) {
    try {
      const content = await Deno.readTextFile(file);
      console.log(`--- ${file} ---`);
      console.log(content);
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Error reading ${file}: ${err.message}`);
      } else {
        console.error(`Unknown error:`, err);
      }
    }
  }
};

export const catCommand = new Command()
  .name('cat')
  .description('Display content of files')
  .arguments('<files...>')
  .action(async (_, ...files: string[]) => await displayFiles(files));

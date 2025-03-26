import { Command } from '../deps.ts';

const grepFiles = async (pattern: string, files: string[]): Promise<void> => {
  const regex = new RegExp(pattern, 'g');

  for (const file of files) {
    try {
      const content = await Deno.readTextFile(file);
      const lines = content.split('\n');
      let matchFound = false;

      for (let i = 0; i < lines.length; i++) {
        if (regex.test(lines[i])) {
          if (!matchFound) {
            console.log(`\n--- ${file} ---`);
            matchFound = true;
          }
          console.log(`${i + 1}: ${lines[i]}`);
          regex.lastIndex = 0; // Reset regex for next test
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Error reading ${file}: ${err.message}`);
      } else {
        console.error(`Unknown error:`, err);
      }
    }
  }
};

export const grepCommand = new Command()
  .name('grep')
  .description('Search for pattern in files')
  .arguments('<pattern> <files...>')
  .action(async (_, pattern: string, ...files: string[]) =>
    await grepFiles(pattern, files)
  );

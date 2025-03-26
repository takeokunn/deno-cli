# deno-cli

A command line interface for Deno.

## cat subcommand

```console
$ deno run --allow-read src/main.ts cat deno.json src/deps.ts
--- deno.json ---
{
  "imports": {
    "@cliffy/command": "jsr:@cliffy/command@^1.0.0-rc.7"
  },
  "tasks": {
    "start": "deno run --allow-read main.ts",
    "dev": "deno run --watch --allow-read main.ts",
    "test": "deno test --allow-read"
  },
  "fmt": {
    "include": ["**/*.ts"],
    "indentWidth": 2,
    "singleQuote": true
  }
}

--- src/deps.ts ---
export { Command } from '@cliffy/command';
```


## grep subcommand

```console
$ deno run --allow-read src/main.ts grep "command" deno.json src/main.ts

--- deno.json ---
3:     "@cliffy/command": "jsr:@cliffy/command@^1.0.0-rc.7"

--- src/main.ts ---
2: import { catCommand } from './commands/cat.ts';
3: import { grepCommand } from './commands/grep.ts';
9:   .command('cat', catCommand)
10:   .command('grep', grepCommand)
```

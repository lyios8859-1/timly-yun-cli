#!/usr/bin/env node

const { chalk, log } = require("@vue/cli-shared-utils");
const { Command } = require("commander");

const create = require("../src/index.js");
const program = new Command();

program
  .name("@timly/yun-cli")
  .description("一个神奇的项目自动化构建构建工具^_^")
  .usage("<command> [options]")
  .version("0.0.1");

program
  .command("create")
  .description("创建项目")
  .argument("<app-name>", "项目名称") // [xxx] xxx可选，<xxx> xxx必须
  .action((name, options) => {
    log(chalk.bold.blue(`Next CLI v0.0.1`));
    create(name, options);
  });

program.on("--help", () => {
  log(
    `\n  Run ${chalk.yellow(
      `@timly/yun-cli <command> --help`
    )} for detailed usage of given command.\n`
  );
});

program.parse(process.argv);

// npm run dev -- create appName

# Contributing

I love your input! I want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Develop using VS Code

### What's in the folder

- `package.json` - this is the extension manifest. It defines the extension metadata, commands, task definitions, problem matchers, scripts, and dependencies.
- `src/extension.ts` - this is the entry point of the extension
- `src/amentTaskProvider.ts` - this provides the ament tasks
- `tests/problem-matcher.test.ts` - this is the testing script

### Get up and running straight away

- Press `F5` to open a new window with your extension loaded.
- Open `Extensions Viewlet` and check your extensions are installed.

### Make changes

- You can relaunch the extension from the debug toolbar after making changes to the files listed above.
- You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

If you want to add another task, follow the [how to add directions](How-to-Add.md)

### Install your extension

- Install dependencies with `npm ci`.
- Set the version you want in the package with `npm run version:set -- --version=v0.1.5`. The committed development version may be `0.0.0`; release and local packages set the real version before packaging.
- Create your extension package with `npm run pack`.
- To start using your extension with Visual Studio Code, install the generated package:

  `code --install-extension ament-task-provider-0.1.5.vsix`

- To share your extension with the world, read on <https://code.visualstudio.com/docs> about publishing an extension.

## Any contributions you make will be under the Apache Software License

In short, when you submit code changes, your submissions are understood to be under the same [Apache License](https://github.com/althack/vscode-ament-task-provider/blob/main/LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issues](https://github.com/althack/vscode-ament-task-provider/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/althack/vscode-ament-task-provider/issues/new/choose); it's that easy!

Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

## Use a Consistent Coding Style

I'm using [prettier](https://prettier.io/) to enforce styling. If you open this repository in VS Code using the dev container, everything should already be set up for you.

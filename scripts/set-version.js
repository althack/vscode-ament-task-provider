#!/usr/bin/env node

const { execFileSync } = require("child_process");

const versionArg = process.argv
    .slice(2)
    .find((arg) => arg.startsWith("--version="));
const rawVersion =
    process.env.VERSION ||
    process.env.npm_config_version ||
    (versionArg ? versionArg.slice("--version=".length) : process.argv[2]);

if (!rawVersion) {
    console.error(
        "VERSION is not set. Provide VERSION=v1.2.3 or pass -- --version=1.2.3."
    );
    process.exit(1);
}

const version = rawVersion.trim().replace(/^v/, "");

if (
    !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/.test(
        version
    )
) {
    console.error(`VERSION must be a valid semver version. Received: ${rawVersion}`);
    process.exit(1);
}

execFileSync(
    "npm",
    ["version", version, "--no-git-tag-version", "--allow-same-version"],
    { stdio: "inherit" }
);

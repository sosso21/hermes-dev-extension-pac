import * as extensions from "./extensions.json";

const packages = {
  name: "hermes-dev-extension-pack",
  displayName: "hermes-dev-extension-pack",
  description: "The extension of HERMES DEV",
  version: "1.0.2",
  publisher: "hermes-dev",
  engines: {
    vscode: "^1.74.0",
  },
  icon: "logo.png",
  categories: ["Extension Packs"],
  extensionPack: extensions.map((extension) => extension.identifier.id),
};

console.log(JSON.stringify(packages));
//     cls  && del *.vsix &&  ts-node gen.ts > pckg.json  && mv pckg.json package.json && del pckg.json &&  vsce package

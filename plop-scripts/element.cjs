/* eslint-disable no-undef */
module.exports = {
  description: "Generate a (Element).",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your element name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/elements/{{pascalCase name}}/@types/index.ts",
      templateFile: "plop-templates/element/@types/index.ts.hbs",
    },
    {
      type: "add",
      path: "src/components/elements/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "plop-templates/element/Element.tsx.hbs",
    },
    {
      type: "add",
      path: "src/components/elements/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
      templateFile: "plop-templates/element/Element.spec.tsx.hbs",
    },
    {
      type: "add",
      path: "src/components/elements/{{pascalCase name}}/{{pascalCase name}}Styled.tsx",
      templateFile: "plop-templates/element/ElementStyled.tsx.hbs",
    },
    {
      type: "add",
      path: "src/components/elements/{{pascalCase name}}/index.ts",
      templateFile: "plop-templates/element/indexOfElement.ts.hbs",
    },
    {
      type: "add",
      path: "src/components/elements/index.ts",
      templateFile: "plop-templates/element/injectable-index.ts.hbs",
      skipIfExists: true,
    },

    {
      type: "append",
      path: "src/components/elements/index.ts",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from "./{{pascalCase name}}";`,
    },
    {
      type: "append",
      path: "src/components/elements/index.ts",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },
  ],
};

// eslint-disable-next-line no-undef
module.exports = {
  description: "Generate a (Organism).",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your organism name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/organism/{{pascalCase name}}/@types/index.ts",
      templateFile: "plop-templates/organism/@types/index.ts.hbs",
    },
    {
      type: "add",
      path: "src/components/organism/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "plop-templates/organism/Organism.tsx.hbs",
    },
    {
      type: "add",
      path: "src/components/organism/{{pascalCase name}}/{{pascalCase name}}Styled.tsx",
      templateFile: "plop-templates/organism/OrganismStyled.tsx.hbs",
    },
    {
      type: "add",
      path: "src/components/organism/{{pascalCase name}}/index.ts",
      templateFile: "plop-templates/organism/indexOfOrganism.ts.hbs",
    },

    {
      type: "add",
      path: "src/components/organism/index.ts",
      templateFile: "plop-templates/organism/injectable-index.ts.hbs",
      skipIfExists: true,
    },
    {
      type: "append",
      path: "src/components/organism/index.ts",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from "./{{pascalCase name}}";`,
    },
    {
      type: "append",
      path: "src/components/organism/index.ts",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },
  ],
};

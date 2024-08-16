// eslint-disable-next-line no-undef
module.exports = {
  description: "Generate a (Page).",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your page name?",
    },
  ],

  actions: [
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/@types/index.ts",
      templateFile: "plop-templates/page/@types/index.ts.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "plop-templates/page/Page.tsx.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
      templateFile: "plop-templates/page/Page.spec.tsx.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/{{pascalCase name}}Styled.tsx",
      templateFile: "plop-templates/page/PageStyled.tsx.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/index.ts",
      templateFile: "plop-templates/page/indexOfPage.ts.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/services.ts",
      templateFile: "plop-templates/page/services.ts.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/utils.ts",
      templateFile: "plop-templates/page/utils.ts.hbs",
    },

    {
      type: "append",
      path: "src/pages/index.ts",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
    },
    {
      type: "append",
      path: "src/pages/index.ts",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },

    {
      type: "add",
      path: "src/routes/index.tsx",
      templateFile: "plop-templates/routes.ts.hbs",
      skipIfExists: true,
    },
    {
      type: "append",
      path: "src/routes/index.tsx",
      pattern: `/* PLOP_ROUTE_IMPORT */`,
      template: `\t{{pascalCase name}},`,
    },
    {
      type: "append",
      path: "src/routes/index.tsx",
      pattern: `{/* PLOP_INJECT_ROUTE */}`,
      template: `\t\t\t\t<Route path="/{{dashCase name}}" element={ <{{pascalCase name}} /> } />`,
    },
  ],
};

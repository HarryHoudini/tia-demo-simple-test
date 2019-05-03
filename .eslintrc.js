module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
        // 'plugin:react/recommended', // uses react-specific linting rules
        'plugin:prettier/recommended', // enables eslint-plugin-prettier and eslint-config-prettier
        // 'prettier/react', // disables react-specific linting rules that conflict with prettier
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: ['@typescript-eslint'], // 'react'
    rules: {},
};

// module.exports =  {
//   parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
//   extends:  [
//     'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
//     'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
//     'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//   ],
//   parserOptions:  {
//     ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
//     sourceType:  'module',  // Allows for the use of imports
//   },
//   plugins: ['@typescript-eslint'],
//   rules: {},
// };

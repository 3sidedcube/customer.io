module.exports = {
    rules: {
        '@typescript-eslint/ban-ts-ignore': ['off'],
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-async-promise-executor': ['off'],
        'no-empty-pattern': ['off'],
        'no-undef': ['error'],
        'no-var': ['error'],
        'no-useless-constructor': ['off'],
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        'spaced-comment': ['off'],
        'no-prototype-builtins': ['off'],
        'sort-keys': ['off'],
        'space-before-function-paren': ['off'],
        'no-shadow': ['off'],
        'no-param-reassign': ['off'],
        indent: ['off'],
    },
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint'],
};
// module.exports = {
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: "tsconfig.json",
//     tsconfigRootDir: __dirname,
//     sourceType: "module",
//   },
//   plugins: ["@typescript-eslint/eslint-plugin"],
//   extends: ["airbnb-typescript-prettier"],
//   root: true,
//   env: {
//     node: true,
//     jest: true,
//   },
//   rules: {
//     "@typescript-eslint/interface-name-prefix": "off",
//     "@typescript-eslint/explicit-function-return-type": "off",
//     "@typescript-eslint/explicit-module-boundary-types": "off",
//     "@typescript-eslint/no-explicit-any": "off",
//     "import/prefer-default-export": "off",
//     "prefer-destructuring": ["error", { object: true, array: false }],
//     "no-useless-constructor": "off",
//     "class-methods-use-this": "off",
//     "prettier/prettier": [
//       "error",

//       {
//         endOfLine: "auto",
//       },
//     ],
//     "max-classes-per-file": ["error", 3],
//     "import/no-cycle": "off",
//     "no-shadow": "off",
//     "no-param-reassign": "off",
//     "no-nested-ternary": "off",
//     "@typescript-eslint/no-non-null-assertion": "off",
//     "@typescript-eslint/no-empty-interface": "off",
//     "react/static-property-placement": "off",
//     "no-template-curly-in-string": "off",
//   },
// };
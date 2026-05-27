import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        plugins: {
            react: pluginReact,
        },

        ...js.configs.recommended,

        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
            // React
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',

            // Formatting
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'space-before-blocks': ['error', 'always'],
            'keyword-spacing': ['error', { before: true, after: true }],
            'space-infix-ops': 'error',
            'arrow-spacing': 'error',
            'no-trailing-spaces': 'error',
            'eol-last': ['error', 'always'],

            // Code quality
            'no-unused-vars': 'warn',
            'no-duplicate-imports': 'error',
            'no-redeclare': 'error',
            eqeqeq: ['error', 'always'],

            // Line length
            'max-len': ['warn', { code: 100 }],
        },
    },
]);

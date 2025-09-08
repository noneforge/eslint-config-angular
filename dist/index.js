/**
 * Angular ESLint Configuration
 * Compatible with:
 * - Angular: ^20.0.0
 * - angular-eslint: ^20.2.0
 * - typescript-eslint: ^8.27.0
 * - ESLint: ^9.22.0
 * - TypeScript: ^5.9.0
 * - Node.js: >=20.19.0
 */
import css from '@eslint/css';
import baseConfig from '@noneforge/eslint-config';
import angular from 'angular-eslint';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
;
const config = defineConfig(...baseConfig, {
    name: 'noneforge/angular-typescript',
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    plugins: {
        '@angular-eslint': angular.tsPlugin,
    },
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.es2023,
        },
    },
    rules: {
        'no-console': ['warn', {
                allow: ['warn', 'error', 'info'],
            }],
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/no-empty-lifecycle-method': 'error',
        '@angular-eslint/no-async-lifecycle-method': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-output-native': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/no-queries-metadata-property': 'error',
        '@angular-eslint/prefer-inject': 'error',
        '@angular-eslint/prefer-standalone': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
        '@angular-eslint/component-selector': ['error', {
                type: 'element',
                prefix: 'app',
                style: 'kebab-case',
            }],
        '@angular-eslint/directive-selector': ['error', {
                type: 'attribute',
                prefix: 'app',
                style: 'camelCase',
            }],
        '@angular-eslint/component-class-suffix': ['error', {
                suffixes: ['Component'],
            }],
        '@angular-eslint/directive-class-suffix': ['error', {
                suffixes: ['Directive'],
            }],
        '@angular-eslint/prefer-signals': 'error',
        '@angular-eslint/no-uncalled-signals': 'warn',
        '@angular-eslint/prefer-on-push-component-change-detection': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-lifecycle-call': 'error',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/prefer-output-readonly': 'error',
        '@angular-eslint/no-forward-ref': 'error',
        '@angular-eslint/contextual-decorator': 'error',
        '@angular-eslint/use-injectable-provided-in': 'warn',
        '@angular-eslint/component-max-inline-declarations': ['error', {
                template: 10,
                styles: 5,
                animations: 15,
            }],
        '@angular-eslint/no-pipe-impure': 'error',
        '@angular-eslint/relative-url-prefix': 'error',
        '@angular-eslint/use-component-selector': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'warn',
        '@angular-eslint/no-developer-preview': 'warn',
        '@angular-eslint/no-experimental': 'off',
    },
}, {
    name: 'noneforge/angular-template',
    files: ['**/*.html'],
    plugins: {
        '@angular-eslint/template': angular.templatePlugin,
    },
    languageOptions: {
        parser: angular.templateParser,
    },
    rules: {
        '@angular-eslint/template/banana-in-box': 'error',
        '@angular-eslint/template/eqeqeq': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
        '@angular-eslint/template/alt-text': 'error',
        '@angular-eslint/template/click-events-have-key-events': 'error',
        '@angular-eslint/template/mouse-events-have-key-events': 'error',
        '@angular-eslint/template/elements-content': 'error',
        '@angular-eslint/template/interactive-supports-focus': 'error',
        '@angular-eslint/template/label-has-associated-control': 'error',
        '@angular-eslint/template/no-autofocus': 'warn',
        '@angular-eslint/template/no-distracting-elements': 'error',
        '@angular-eslint/template/role-has-required-aria': 'error',
        '@angular-eslint/template/table-scope': 'error',
        '@angular-eslint/template/valid-aria': 'error',
        '@angular-eslint/template/prefer-control-flow': 'error',
        '@angular-eslint/template/prefer-ngsrc': 'error',
        '@angular-eslint/template/prefer-self-closing-tags': 'error',
        '@angular-eslint/template/no-duplicate-attributes': 'error',
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-call-expression': 'off',
        '@angular-eslint/template/use-track-by-function': 'error',
        '@angular-eslint/template/no-interpolation-in-attributes': 'error',
        '@angular-eslint/template/no-positive-tabindex': 'error',
        '@angular-eslint/template/conditional-complexity': ['error', {
                maxComplexity: 5,
            }],
        '@angular-eslint/template/cyclomatic-complexity': ['warn', {
                maxComplexity: 10,
            }],
        '@angular-eslint/template/button-has-type': 'error',
        '@angular-eslint/template/no-inline-styles': ['warn', {
                allowNgStyle: true,
                allowBindToStyle: true,
            }],
        '@angular-eslint/template/i18n': ['off', {
                checkId: false,
                checkText: true,
                checkAttributes: true,
                requireDescription: false,
                ignoreAttributes: ['aria-label', 'aria-describedby'],
            }],
    },
}, {
    name: 'noneforge/angular-styles',
    files: ['**/*.{css,scss}'],
    plugins: { css },
    language: 'css/css',
    rules: {
        'css/no-duplicate-imports': 'error',
        'css/no-duplicate-keyframe-selectors': 'error',
        'css/no-invalid-at-rule-placement': 'error',
        'css/no-invalid-at-rules': 'error',
        'css/no-invalid-named-grid-areas': 'error',
        'css/no-invalid-properties': 'error',
        'css/font-family-fallbacks': 'warn',
        'css/no-empty-blocks': 'warn',
        'css/no-important': 'off',
        'css/use-baseline': 'off',
        'css/relative-font-units': 'off',
        'css/prefer-logical-properties': 'off',
        'css/use-layers': 'off',
    },
}, {
    name: 'noneforge/angular-tests',
    files: ['**/*.spec.ts', '**/*.test.ts', '**/*.e2e-spec.ts'],
    rules: {
        '@angular-eslint/no-lifecycle-call': 'off',
        '@angular-eslint/prefer-on-push-component-change-detection': 'off',
        '@angular-eslint/use-injectable-provided-in': 'off',
    },
}, {
    name: 'noneforge/angular-components',
    files: ['**/+*.ts'],
    rules: {
        '@angular-eslint/component-selector': 'off',
        '@angular-eslint/directive-selector': 'off',
    },
}, {
    name: 'noneforge/angular-modules',
    files: ['**/*.module.ts'],
    rules: {
        '@angular-eslint/prefer-standalone': 'warn',
    },
}, {
    name: 'noneforge/angular-stories',
    files: ['**/*.stories.ts', '**/*.stories.tsx'],
    rules: {
        'no-console': 'off',
        '@stylistic/indent': 'off',
        '@stylistic/max-len': 'off',
        '@angular-eslint/component-selector': 'off',
        '@angular-eslint/use-component-selector': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
    },
}, {
    name: 'noneforge/angular-schematics',
    files: ['**/schematics/**/*.ts'],
    rules: {
        'no-console': 'off',
        '@stylistic/indent': 'off',
        '@stylistic/max-len': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
    },
});
export default config;
//# sourceMappingURL=index.js.map
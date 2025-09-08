# @noneforge/eslint-config-angular

Comprehensive Angular ESLint configuration with TypeScript support, component/template rules, accessibility, and CSS linting. Built on [@noneforge/eslint-config](https://www.npmjs.com/package/@noneforge/eslint-config) ESLint 9+ flat config with Angular 20+ best practices and modern reactive patterns.

## Features

- ✨ **ESLint 9 Flat Config** - Modern configuration format with better performance
- 🎯 **Angular 20+ Optimized** - Specific rules for components, directives, pipes, and services
- 🔒 **Accessibility First** - Built-in a11y rules for templates with ARIA support
- ⚡ **Signals & Control Flow** - Support for Angular's latest reactive features
- 📦 **Full TypeScript Support** - Extends @noneforge/eslint-config base with Angular specifics
- 🎨 **CSS/SCSS Linting** - Integrated CSS validation for component styles
- 🚀 **Standalone Components** - Promotes modern Angular architecture patterns
- 🔧 **Smart Detection** - Different rules for tests, stories, schematics, and modules

## Installation

```bash
npm install --save-dev @noneforge/eslint-config-angular eslint typescript
```

or with Yarn:

```bash
yarn add --dev @noneforge/eslint-config-angular eslint typescript
```

## Requirements

- Node.js >=20.19.0
- ESLint >=9.22.0
- TypeScript >=5.9.0
- Angular >=20.0.0
- RxJS >=7.4.0

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import config from '@noneforge/eslint-config-angular';

export default [
  ...config,
  // Your custom rules here
];
```

### With Custom Rules

```javascript
import config from '@noneforge/eslint-config-angular';

export default [
  ...config,
  {
    rules: {
      // Override or add custom rules
      '@angular-eslint/component-selector': ['error', {
        type: 'element',
        prefix: 'my-app',
        style: 'kebab-case',
      }],
    }
  }
];
```

### For Nx Monorepos

```javascript
import config from '@noneforge/eslint-config-angular';

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: ['./apps/*/tsconfig.json', './libs/*/tsconfig.json'],
      }
    }
  }
];
```

## Rule Categories

### 🎯 Angular Component Rules
**Modern Angular patterns and best practices:**
- **Standalone Components**: `prefer-standalone` - Enforces standalone architecture
- **Signals**: `prefer-signals`, `no-uncalled-signals` - Reactive state management
- **Change Detection**: `prefer-on-push-component-change-detection` - Performance optimization
- **Lifecycle**: `contextual-lifecycle`, `no-empty-lifecycle-method`, `no-async-lifecycle-method`
- **Component Structure**: `component-max-inline-declarations` - Limits inline templates/styles
- **Dependency Injection**: `prefer-inject` - Modern DI patterns over constructor injection
- **Naming Conventions**: `component-class-suffix`, `directive-class-suffix`
- **Selectors**: Enforces `app-` prefix with kebab-case for components, camelCase for directives

```typescript
// ❌ Legacy patterns
@Component({
  selector: 'myComponent',
  template: `...very long template...`,
  standalone: false,  // Explicitly false triggers the rule
  changeDetection: ChangeDetectionStrategy.Default
})
export class MyComp {
  constructor(private service: MyService) {}
  value = 0;
}

// ✅ Modern Angular patterns
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  // standalone: true is default in Angular 20, can be omitted
})
export class MyComponent {
  private service = inject(MyService);
  value = signal(0);
}
```

### 📝 Template Rules
**Comprehensive template validation and best practices:**
- **Control Flow**: `prefer-control-flow` - New @if/@for/@switch syntax
- **Two-Way Binding**: `banana-in-box` - Correct [(ngModel)] syntax
- **Type Safety**: `no-any` - Prevents any types in templates
- **Performance**: `use-track-by-function` - Required for @for loops
- **Image Optimization**: `prefer-ngsrc` - NgOptimizedImage for better performance
- **Self-Closing Tags**: `prefer-self-closing-tags` - Cleaner template syntax
- **Complexity**: `conditional-complexity`, `cyclomatic-complexity` - Maintainable templates

```html
<!-- ❌ Old patterns -->
<div *ngIf="condition">Content</div>
<img src="{{imageUrl}}" />
<div *ngFor="let item of items">{{item}}</div>

<!-- ✅ Modern patterns -->
@if (condition) {
  <div>Content</div>
}
<img [ngSrc]="imageUrl" width="200" height="100" />
@for (item of items; track item.id) {
  <div>{{item}}</div>
}
```

### ♿ Accessibility Rules
**Built-in a11y compliance for inclusive applications:**
- **Images**: `alt-text` - Alternative text required
- **Keyboard Navigation**: `click-events-have-key-events`, `mouse-events-have-key-events`
- **Interactive Elements**: `interactive-supports-focus` - Focusable interactive elements
- **Forms**: `label-has-associated-control` - Proper form labeling
- **ARIA**: `role-has-required-aria`, `valid-aria` - Correct ARIA usage
- **Focus Management**: `no-autofocus`, `no-positive-tabindex`
- **Tables**: `table-scope` - Proper scope attributes
- **Distracting Elements**: `no-distracting-elements` - No marquee/blink

```html
<!-- ❌ Accessibility issues -->
<img [src]="imageUrl">
<div (click)="action()">Click me</div>
<input type="text">

<!-- ✅ Accessible patterns -->
<img [src]="imageUrl" [alt]="imageAlt">
<button (click)="action()">Click me</button>
<label for="name">Name</label>
<input id="name" type="text">
```

### 🎨 CSS/SCSS Rules
**Style validation for component styles:**
- **Import Management**: `no-duplicate-imports` - Prevents duplicate @import
- **Selectors**: `no-duplicate-keyframe-selectors` - Unique keyframe names
- **At-Rules**: `no-invalid-at-rules`, `no-invalid-at-rule-placement`
- **Grid**: `no-invalid-named-grid-areas` - Valid CSS Grid areas
- **Properties**: `no-invalid-properties` - Catches typos in CSS properties
- **Quality**: `no-empty-blocks`, `font-family-fallbacks` - Best practices

```scss
// ❌ CSS issues
@import 'theme';
@import 'theme';  // Duplicate

.empty {}  // Empty block

.text {
  font-family: 'CustomFont';  // No fallback
  colr: red;  // Typo
}

// ✅ Clean styles
@import 'theme';

.text {
  font-family: 'CustomFont', sans-serif;
  color: red;
}
```

### 🧩 Input/Output Rules
**Modern Angular communication patterns:**
- **Input Signals**: Preferred over decorators for reactive inputs
- **Output Events**: `no-output-native`, `no-output-on-prefix` - Avoids conflicts
- **Naming**: `no-input-rename`, `no-output-rename` - Consistent API
- **Metadata**: `no-inputs-metadata-property`, `no-outputs-metadata-property`
- **Readonly Outputs**: `prefer-output-readonly` - Immutable event emitters

```typescript
// ❌ Old patterns
@Component({
  inputs: ['value'],
  outputs: ['onChange']
})
export class OldComponent {
  @Input('aliased') value: string;
  @Output() onClick = new EventEmitter();
}

// ✅ Modern patterns
@Component({...})
export class ModernComponent {
  value = input<string>();
  readonly changed = output<string>();
}
```

### 📁 Smart File Detection

#### Test Files (`*.spec.ts`, `*.test.ts`, `*.e2e-spec.ts`)
**Relaxed rules for testing:**
- Lifecycle calls allowed in tests
- OnPush change detection not required
- Injectable providedIn requirements relaxed

#### Storybook Stories (`*.stories.ts`)
**Flexible rules for component documentation:**
- Console output allowed
- Indentation and line length unrestricted
- Component selector requirements relaxed
- Type safety warnings instead of errors

#### Angular Schematics (`schematics/**/*.ts`)
**Practical rules for code generation:**
- Console output allowed for CLI feedback
- Any types allowed for dynamic operations
- Unsafe operations permitted for metaprogramming

#### Angular Modules (`*.module.ts`)
**Migration support:**
- Standalone preference as warning, not error
- Supports gradual migration to standalone

#### Router Components (`**/+*.ts`)
**Special routing patterns:**
- Component/directive selector rules disabled
- Supports Angular's file-based routing conventions

## Base Configuration

This package extends [@noneforge/eslint-config](https://github.com/noneforge/eslint-config) which provides:
- Comprehensive TypeScript type checking
- Built-in formatting (Prettier replacement)
- Import organization and sorting
- Modern JavaScript best practices
- JSDoc documentation rules

See the [base configuration README](https://github.com/noneforge/eslint-config) for details on inherited rules.

## Common Patterns

### Signals and Effects
```typescript
// ❌ Traditional reactive patterns
export class OldComponent {
  value = 0;
  valueSubject = new BehaviorSubject(0);
  
  ngOnInit() {
    this.valueSubject.subscribe(v => this.value = v);
  }
}

// ✅ Modern signals
export class ModernComponent {
  value = signal(0);
  computed = computed(() => this.value() * 2);
  
  constructor() {
    effect(() => {
      console.log('Value changed:', this.value());
    });
  }
}
```

### Dependency Injection
```typescript
// ❌ Constructor injection
export class OldService {
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(CONFIG) private config: Config
  ) {}
}

// ✅ inject() function
export class ModernService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private config = inject(CONFIG);
}
```

### Control Flow Syntax
```typescript
// Template file
@if (user()) {
  <app-user-profile [user]="user()" />
} @else if (loading()) {
  <app-spinner />
} @else {
  <p>No user found</p>
}

@for (item of items(); track item.id) {
  <app-item [data]="item" />
} @empty {
  <p>No items available</p>
}

@switch (status()) {
  @case ('active') { <app-active /> }
  @case ('pending') { <app-pending /> }
  @default { <app-inactive /> }
}
```

## VSCode Integration

Add to `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "html",
    "css",
    "scss"
  ]
}
```

## Package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:debug": "eslint . --debug",
    "type-check": "tsc --noEmit"
  }
}
```

## Migration from ESLint 8

1. Remove `.eslintrc.*` files
2. Create `eslint.config.js` with flat config
3. Update VSCode settings for flat config
4. Install this package and its peer dependencies
5. Update scripts to use ESLint 9 CLI

## Performance Tips

- Use `projectService: true` for better TypeScript performance
- Enable ESLint cache: `eslint . --cache`
- Exclude `dist` and `.angular` in your tsconfig.json
- Consider `--max-warnings 0` in CI/CD pipelines

## Philosophy

This configuration prioritizes:

1. **Modern Angular** - Signals, standalone components, and latest APIs
2. **Accessibility** - Built-in a11y rules for inclusive applications
3. **Performance** - OnPush change detection and optimization patterns
4. **Type Safety** - Leverage TypeScript for runtime error prevention
5. **Developer Experience** - Clear errors with practical escape hatches

## License

MIT

## Contributing

Issues and PRs welcome at [GitHub](https://github.com/noneforge/eslint-config-angular)
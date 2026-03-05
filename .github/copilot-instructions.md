# GitHub Copilot Instructions

## Project Overview
This is a **React Material Query Builder** — a visual query builder UI built with React, TypeScript, and Material UI (MUI v5). It allows users to construct filter/query conditions using logical operators (AND/OR) and various field operators.

## Tech Stack
- **React 18** with functional components and hooks only (no class components)
- **TypeScript** (strict mode enabled)
- **Material UI v5** (`@mui/material`, `@mui/icons-material`)
- **RxJS** for state management (Subject / BehaviorSubject pattern)
- **Storybook 6** for component development and documentation

---

## Code Style & Conventions

### TypeScript
- Always use **strict TypeScript** — no `any` unless absolutely unavoidable; prefer `unknown` and narrow types
- Define explicit interfaces or types for all props, state, and function signatures
- Use `interface` for object shapes and component props; use `type` for unions/intersections
- Avoid type assertions (`as SomeType`) unless necessary; prefer type guards
- Export interfaces/types alongside their components

### React
- Use **functional components only** with React hooks
- Prefer named exports for components; keep `export default` for the main component per file
- Always type component props with a dedicated interface (e.g., `IMyComponentProps` or `MyComponentProps`)
- Use `React.FC` sparingly — prefer explicit prop typing: `function MyComponent(props: MyProps)`
- Avoid inline arrow functions in JSX renders when they cause unnecessary re-renders; use `useCallback`
- Use `React.Fragment` (`<React.Fragment>` or `<>`) instead of wrapping divs when no DOM element is needed
- Keep components small and focused on a single responsibility

### Hooks
- Custom hooks must be prefixed with `use` and live in files named `*.hook.tsx` or `*.hook.ts`
- Always clean up subscriptions in `useEffect` return functions
- Declare all `useEffect` dependencies correctly — do not suppress ESLint exhaustive-deps warnings without a comment

### State Management (RxJS Store pattern)
- Stores live in `src/services/` and follow the existing pattern: `BehaviorSubject` for stateful stores, `Subject` for event streams
- Store objects expose: `create`, `update`, `delete`, `subscribe` methods
- Always unsubscribe in component cleanup: `return () => sub.unsubscribe()`
- Do **not** mutate store state directly — always create a new object: `JSON.parse(JSON.stringify(state))`

### MUI Components
- Use MUI components from `@mui/material` — do not introduce new UI libraries
- Use `sx` prop for one-off styles; avoid inline `style` props except for dynamic values
- Follow MUI theming conventions — avoid hardcoded colors; prefer theme tokens
- Use MUI `Grid` for layouts; prefer `xs`, `sm`, `md` breakpoints

### File & Folder Structure
```
src/
  common/         # Enums, interfaces, utility models, shared constants
  components/     # Feature components, each in its own subfolder
    my-feature/
      MyFeature.tsx
      useMyFeature.hook.tsx   # (optional) dedicated hook
  interfaces/     # Shared TypeScript interfaces
  services/       # RxJS stores and data services
  stories/        # Storybook stories (*.stories.tsx)
```
- One component per file
- Co-locate hooks with the component they serve
- Storybook stories go in `src/stories/` and must cover at least the primary usage

### Naming Conventions
| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `ConditionRow.tsx` |
| Hooks | camelCase prefixed `use` | `useOperationRows.hook.tsx` |
| Interfaces | `I` prefix + PascalCase | `IConditionRow`, `IOperationRow` |
| Component Props interfaces | PascalCase + `Props` | `ComboBoxProps`, `OperatorButtonsProps` |
| Enums | PascalCase | `LogicalCondition`, `OperationType` |
| Services/Stores | camelCase | `operation-lines-store.ts` |
| Files | kebab-case | `enum-logical-condition.ts` |

---

## Key Domain Models
- `KeyValueEntity` — generic `{ key: any, value: any }` used for dropdown options
- `LogicalCondition` — enum: `And | Or | None`
- `OperationType` — enum: `AddCondition | AddGroup | None`
- `IConditionRow` — base interface for a condition: `{ logicalCondition, operationType }`
- `IOperationRow` — extends `IConditionRow` with `{ id, arrFields }`
- `OperationItemWithSql` — top-level store model: `{ operation: OperationItem, sql: string }`

---

## Do's and Don'ts

### Do
- Write self-documenting code with clear variable/function names
- Add JSDoc comments for public interfaces and complex functions
- Ensure every new component has a corresponding Storybook story
- Handle loading and error states in components that consume async/observable data
- Prefer composition over prop-drilling — lift state only when necessary
- Keep business logic out of components — delegate to hooks or services

### Don't
- Don't use `debugger` statements in committed code
- Don't use `console.log` in production components (use only in dev/story context)
- Don't introduce Redux, Zustand, or other state libraries — use the existing RxJS pattern
- Don't use `var` — always `const` or `let`
- Don't mutate arrays/objects directly — use immutable patterns
- Don't use CSS modules or styled-components — use MUI `sx` or `makeStyles`
- Don't skip TypeScript types for component props

---

## Testing
- Tests live alongside source files or in `__tests__` subfolders
- Use `@testing-library/react` for component tests
- Test user interactions, not implementation details
- Mock RxJS stores in tests using jest mocks

---

## Storybook
- Every new component must have a `.stories.tsx` file in `src/stories/`
- Export a `default` meta object with `title` and `component`
- Export at least a `Primary` story with representative args
- Use `ComponentStory` and `ComponentMeta` from `@storybook/react`

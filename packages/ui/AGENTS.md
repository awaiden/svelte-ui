You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

---

## Bits UI Reference

This project uses [Bits UI](https://bits-ui.com) as the headless component library. When building or modifying components, always reference the official Bits UI documentation.

### Accessing Docs

LLM-friendly documentation is available by appending `/llms.txt` to any Bits UI docs page:

- **Full docs**: https://bits-ui.com/docs/llms.txt
- **Components index**: https://bits-ui.com/docs/components/llms.txt
- **Single component**: `https://bits-ui.com/docs/components/<name>/llms.txt`

### Key Pages

| Topic            | URL                                                     |
| ---------------- | ------------------------------------------------------- |
| Introduction     | https://bits-ui.com/docs/introduction/llms.txt          |
| Getting Started  | https://bits-ui.com/docs/getting-started/llms.txt       |
| Child Snippet    | https://bits-ui.com/docs/child-snippet/llms.txt         |
| Styling          | https://bits-ui.com/docs/styling/llms.txt               |
| State Management | https://bits-ui.com/docs/state-management/llms.txt      |
| Transitions      | https://bits-ui.com/docs/transitions/llms.txt           |
| Ref              | https://bits-ui.com/docs/ref/llms.txt                   |
| Merge Props      | https://bits-ui.com/docs/utilities/merge-props/llms.txt |
| Portal           | https://bits-ui.com/docs/utilities/portal/llms.txt      |

### Component Docs

Each Bits UI component has its own doc page at `https://bits-ui.com/docs/components/<name>/llms.txt`. Available components:

Accordion, Alert Dialog, Aspect Ratio, Avatar, Button, Calendar, Checkbox, Collapsible, Combobox, Command, Context Menu, Date Field, Date Picker, Date Range Field, Date Range Picker, Dialog, Dropdown Menu, Label, Link Preview, Menubar, Meter, Navigation Menu, Pagination, Pin Input, Popover, Progress, Radio Group, Range Calendar, Rating Group, Scroll Area, Select, Separator, Slider, Switch, Tabs, Time Field, Time Range Field, Toggle, Toggle Group, Toolbar, Tooltip

### Instructions

- **Before building a new component**, fetch its Bits UI doc page to understand the API, available sub-components, props, and events.
- Use the `fetch_webpage` tool with the appropriate `/llms.txt` URL for the component you are working on.
- Bits UI components are headless — they provide behavior and accessibility, not styling. All styling in this project is done via Tailwind CSS + `tailwind-variants`.

### Component Architecture Rules

- **Compound (multi-part) components** (e.g. Accordion, Card, AlertDialog, Avatar, Collapsible — any component exported as an object with `Root` + sub-components) **MUST** include a `<name>-context.ts` file that:
  1. Uses `createContext` from `svelte` to create a typed context.
  2. Exports `[get<Name>Context, set<Name>Context]`.
  3. The context holds at minimum `{ slots: ReturnType<typeof <name>Variants> }`.
  4. The **Root** component calls `set<Name>Context()` with a reactive `get slots()` getter.
  5. All **sub-components** call `get<Name>Context()` to retrieve slots instead of calling `<name>Variants()` directly.
- **Flat (single-element) components** (e.g. Button, Checkbox, Label — exported as `const X = Root`) do NOT need context.

### Theme Tokens (Valid Tailwind Classes)

Only use tokens defined in `src/lib/styles/themes/default.css`. **Never** use tokens from other design systems (e.g. shadcn's `popover`, `accent`, `card`).

| Token         | Foreground variant       | Hover variant       |
| ------------- | ------------------------ | ------------------- |
| `background`  | `foreground`             | —                   |
| `surface`     | `surface-foreground`     | —                   |
| `overlay`     | `overlay-foreground`     | —                   |
| `input`       | `input-foreground`       | `input-hover`       |
| `primary`     | `primary-foreground`     | `primary-hover`     |
| `secondary`   | `secondary-foreground`   | `secondary-hover`   |
| `muted`       | `muted-foreground`       | `muted-hover`       |
| `destructive` | `destructive-foreground` | `destructive-hover` |
| `success`     | `success-foreground`     | `success-hover`     |

**Other tokens**: `border`, `ring`, `white`, `black`

**Border radii**: `radius`, `radius-button`, `radius-input`

Usage: `bg-primary`, `text-primary-foreground`, `hover:bg-primary-hover`, `border-border`, `ring-ring`, `rounded-radius`, etc.

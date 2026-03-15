# Claude Code — Global Rules

## Language

- All code (file names, variables, functions, component names, comments, docs) must be written in English.
- All user-facing strings must be written in Uzbek.

## JavaScript only

- Use JavaScript only — no TypeScript.

## Comments & JSDoc

- Add JSDoc for every exported or reusable function/hook/helper/util:
  - what it does
  - params
  - return value
- Inline handlers and callbacks should NOT be commented by default; add a short comment only when the logic is non-obvious.

## Static data

- Do not hardcode reusable static data (options, filters, status maps/colors, labels, etc.) inside pages/components.
- Always move reusable static data into a dedicated adjacent `data/*.data.js` file and import it.

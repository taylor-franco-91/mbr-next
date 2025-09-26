/** @type {import('eslint').Linter.FlatConfig[]} */
import next from "eslint-config-next";

export default [
  next,
  {
    // We write marketing copy with quotes/apostrophes in JSX text,
    // so disable this opinionated rule.
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

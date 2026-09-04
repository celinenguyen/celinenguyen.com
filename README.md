### For developing

- Run `npm install` first — without it, `npx` downloads the *latest* Eleventy
  instead of the pinned v2, which builds an empty page
- Run `npx eleventy --serve`
- Run `npm run watch:sass`
- View at http://localhost:8080/

### Todo items

- [ ] Color contrast on _I'm excited by_ doesn't pass WCAG color contrast guidelines (due to the multiply effect)
- [ ] Need a better approach for when the text on the homepage gets too long

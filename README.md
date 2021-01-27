# Labs thema switch

- Simple home page that reads theme.ts and allows for setting css body (=root) vars
- Home page uses css root variables to set colors
- Changing the css root variables changes the theme
- The system dark theme is used as a preference
- The theme setting is saved to `localStorage.theme`
- The `/src/static/set-vars.ts` script compiles to `/static/set-vars.js` by `npm run build-static`
- The `/static/set-vars.js` script is set to load as the first thing in the body in `/gatsby-ssr.js` 
- The `set-vars.js` sets the theme before parsing the html body prevent flashing the wrong theme 


## Demo

[https://labs-thema-switch.netlify.app](https://labs-thema-switch.netlify.app)

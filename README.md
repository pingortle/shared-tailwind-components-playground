# How shared tailwind components can work

This repo has sub-projects to simulate how this can work with a package of
tailwind styled components implementing a design system.

- `./components` contains the shared tailwind config plus an example web component lib
- `./site-a` use the shared components

### Development

Run `foreman start -f Procfile.dev` (or use a Procfile compatible tool like
`overmind`) to build and start the server. It will print a local URL to visit
your site.

Because `components` is emulating an npm package, the `site-a` watcher will not
recognize changes to it and rebuild. For now you have to restart the server
manually whenever you make changes.

Enjoy! 🍹

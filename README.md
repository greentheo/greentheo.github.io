# greentheo.github.io

The landing page that ties the projects together, served at the root of
<https://greentheo.github.io/>.

One `index.html`, one stylesheet, no build step and no images — the project
thumbnails are inline SVG. Same instinct as most of the work it links to,
which generates its own sounds and terrain rather than shipping assets.

## Adding a project

Copy an `<article class="card">` block in `index.html` and change five things:
the SVG thumbnail, the title, the status pill (`live` / `wip` / `src`), the
`.what` line and the `.why` line.

The `.why` line is the one that matters. It is not a feature list — it is the
single thing about the project that is actually interesting, the detail you
would mention if someone asked why you built it rather than using something
that already exists.

## Checking the links still work

```
for p in ambient amp flagbook soccer-game driftwind driftwind-links; do
  printf "%-16s %s\n" "$p" "$(curl -s -o /dev/null -w '%{http_code}' https://greentheo.github.io/$p/)"
done
```

A portfolio with a dead link on it is worse than one project shorter.

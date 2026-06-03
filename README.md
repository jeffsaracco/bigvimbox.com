# bigvimbox.com

A browser-based text editor with Vim keybindings, hosted at [bigvimbox.com](https://bigvimbox.com). Forked from [smalltextbox.com](https://smalltextbox.com) by Johnny Mukai.

## How It Works

This is a static site served via GitHub Pages. It provides a full-screen, distraction-free writing environment powered by the [Ace editor](https://ace.c9.io/) with Vim keybinding support and Markdown syntax highlighting.

Your text is automatically persisted in the browser using [ImmortalDB](https://github.com/nicholasgasior/immortal-db) (a resilient client-side key-value store), so your content survives page reloads and browser restarts without any server-side storage.

### Key Features

- **Vim keybindings** – Navigate and edit using familiar Vim motions
- **Markdown mode** – Syntax highlighting for Markdown content
- **Persistent local storage** – Content is saved client-side via `:w` (Vim write command)
- **Auto-restore** – Previously saved content is loaded on page open
- **Distraction-free** – Minimal UI with no gutter, no print margin, full-screen editing

### Vim Commands

| Command | Action |
|---------|--------|
| `:w`    | Save content to browser storage |
| `:y`    | Yank (log) all content to the console |

## Project Structure

```
├── index.html            # Main HTML page with inline styles and editor setup
├── js/
│   ├── ace.js            # Ace editor library
│   ├── keybinding-vim.js # Vim keybinding plugin for Ace
│   ├── mode-markdown.js  # Markdown syntax mode for Ace
│   ├── immortal-db.min.js # ImmortalDB for persistent browser storage
│   └── app.js            # Application logic (editor config, custom Vim commands, persistence)
├── icons/                # Favicons and app icons for various platforms
├── CNAME                 # Custom domain configuration for GitHub Pages
└── README.md             # This file
```

## Development

This is a purely static site with no build step. To run locally, serve the project directory with any static file server:

```sh
# Example using Python
python -m http.server 8000

# Example using Node.js
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Deployment

The site is deployed automatically via GitHub Pages. The `CNAME` file maps the custom domain `bigvimbox.com` to this repository.

## License

© 2012 Jeff Saracco

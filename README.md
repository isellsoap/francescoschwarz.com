# francescoschwarz.com

The personal website of Francesco Schwarz.

## Development

### Prerequisites

- Latest LTS version of [Node.js](https://nodejs.org/en/).
- Latest stable version of [Yarn](https://yarnpkg.com/lang/en/).
- Latest stable version of [proselint](https://github.com/amperser/proselint/).

### Installation

1. `git@github.com:isellsoap/francescoschwarz.com.git`
2. `cd francescoschwsarz.com`
3. `yarn`

### Building

- `yarn build`

Generated files are written to the `dist` directory.

### Developing

- `yarn start`

Files get compiled automatically and the browser refreshes automatically.

## Deployment

This site is deployed automatically by [Travis CI](https://travis-ci.com/) whenever files are pushed to the `master` branch.

## Project structure

```
francescoschwarz.com/
|
├── config/
│   ├── collections/           # Eleventy collections
│   ├── filters/               # Eleventy filters
│   ├── transforms/            # Eleventy transforms
│   ├── eleventy.ts            # Eleventy configuration
│   ├── liquid.ts              # Liquid configuration
│   ├── markdown.ts            # Markdown configuration
│   ├── postcss.ts             # PostCSS configuration
│   ├── tailwindcss.ts         # Tailwind CSS configuration
│   └── webpack.ts             # webpack configuration
|
├── src/
│   ├── _content/              # Content (Markdown)
│   ├── _data/                 # Global website data (JSON)
│   ├── _includes/             # Components and layout templates (Liquid)
│   ├── assets/                # Assets (CSS, TypeScript, fonts, EJS templates, …)
│   ├── images/                # Content images
│   ├── feed.json.liquid       # RSS (JSON Feed) template
│   ├── feed.xml.liquid        # RSS (Atom) template
│   ├── robots.txt.liquid      # robots.txt template
│   └── sitemap.xml.liquid     # Sitemap template
│
├── .editorconfig              # Text editor configuration
├── .gitignore                 # Files not tracked by Git
├── .nvmrc                     # nvm configuration
├── .prettierignore            # Files not processed by Prettier
├── .prettierrc                # Prettier configuration
├── .travis.yml                # Travis CI configuration
├── package.json               # Node.js package manifest
├── README.md                  # This file
├── tsconfig.json              # TypeScript configuration
├── tslint.json                # TypeScript linting
└── yarn.lock                  # Yarn package lock
```

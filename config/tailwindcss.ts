/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

View the default config at https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        twitter: '#55acee',
        github: '#000',
        rss: '#f60'
      },
      fill: theme => theme('colors'),
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
      },
      maxWidth: {
        none: 'none'
      },
      screens: {
        // TODO: using `2xl` here as the key makes PurgeCSS not work correctly.
        xxl: '1440px',
        smMax: { max: defaultTheme.screens.sm }
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.visually-hidden': {
          border: '0',
          clip: 'rect(0 0 0 0)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          padding: '0',
          position: 'absolute',
          width: '1px',
          whiteSpace: 'nowrap'
        },
        '.ratio-21-9::before': {
          backgroundColor: defaultTheme.colors.gray['100'],
          content: '""',
          display: 'block',
          paddingTop: '42.85714%'
        }
      };

      addUtilities(newUtilities, ['responsive']);
    }
  ]
};

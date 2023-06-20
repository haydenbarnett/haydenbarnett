const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.zinc.400'),
          '--tw-prose-headings': theme('colors.zinc.200'),
          '--tw-prose-links': theme('colors.zinc.200'),
          '--tw-prose-links-hover': theme('colors.zinc.50'),
          '--tw-prose-underline': theme('colors.zinc.400 / 0.3'),
          '--tw-prose-underline-hover': theme('colors.zinc.400'),
          '--tw-prose-bold': theme('colors.zinc.200'),
          '--tw-prose-counters': theme('colors.zinc.200'),
          '--tw-prose-bullets': theme('colors.zinc.200'),
          '--tw-prose-hr': theme('colors.zinc.700 / 0.4'),
          '--tw-prose-quote-borders': theme('colors.zinc.500'),
          '--tw-prose-captions': theme('colors.zinc.500'),
          '--tw-prose-code': theme('colors.zinc.300'),
          '--tw-prose-code-bg': theme('colors.zinc.200 / 0.05'),
          '--tw-prose-pre-code': theme('colors.zinc.100'),
          '--tw-prose-pre-bg': 'rgb(0 0 0 / 0.4)',
          '--tw-prose-pre-border': theme('colors.zinc.200 / 0.1'),
          '--tw-prose-th-borders': theme('colors.zinc.700'),
          '--tw-prose-td-borders': theme('colors.zinc.800'),

          // Base
          color: 'var(--tw-prose-body)',
          lineHeight: theme('lineHeight.7'),
          '> *': {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.10'),
          },
          p: {
            marginTop: theme('spacing.7'),
            marginBottom: theme('spacing.7'),
          },

          // Headings
          'h2, h3': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.regular'),
          },
          h2: {
            fontSize: theme('fontSize.base')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),
          },
          h3: {
            fontSize: theme('fontSize.sm')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),
          },
          ':is(h2, h3) + *': {
            marginTop: 0,
          },
          a: {
            color: 'var(--tw-prose-links)',
            fontWeight: theme('fontWeight.normal'),
            textDecoration: 'underline',
            textDecorationColor: 'var(--tw-prose-underline)',
            transitionProperty: 'color, text-decoration-color',
            transitionDuration: theme('transitionDuration.150'),
            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
          },
          'a:hover': {
            color: 'var(--tw-prose-links-hover)',
            textDecorationColor: 'var(--tw-prose-underline-hover)',
          },
          // Lists
          ul: {
            listStyleType: 'circle',
          },
          ol: {
            listStyleType: 'decimal',
          },
          'ul, ol': {
            paddingLeft: theme('spacing.4'),
          },
          li: {
            marginTop: theme('spacing.2'),
            marginBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.2'),
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium'),
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-counters)',
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullets)',
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.2'),
            marginBottom: theme('spacing.2'),
          },
        },
      },
    }),
    extend: {
      boxShadow: (theme) => ({
        focus: `0 0 0 4px ${theme('colors.zinc.500/50')}`,
      }),
      animation: {
        rotate: 'rotate 4s linear infinite;',
        slideup: 'slideup 4s linear infinite',
      },
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(1turn)' },
        },
        slideup: {
          '0%': { transform: 'translate3d(0, 0%, 0)' },
          '100%': { transform: 'translate3d(0, -100%, 0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

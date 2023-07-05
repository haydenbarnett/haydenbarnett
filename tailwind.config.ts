import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.serif],
    },
    typography: (theme: (str: string) => string) => ({
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

          // Links
          // eslint-disable-next-line id-length
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
  },
  plugins: [typography],
};

export default config;

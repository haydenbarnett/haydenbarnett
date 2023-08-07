import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        gray: { DEFAULT: colors.zinc[600], ...colors.zinc },
      },
    },
    typography: (theme: (str: string) => string) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.gray.400'),
          '--tw-prose-headings': theme('colors.gray.200'),
          '--tw-prose-links': theme('colors.gray.200'),
          '--tw-prose-links-hover': theme('colors.gray.50'),
          '--tw-prose-underline': theme('colors.gray.400 / 0.3'),
          '--tw-prose-underline-hover': theme('colors.gray.400'),
          '--tw-prose-bold': theme('colors.gray.200'),
          '--tw-prose-counters': theme('colors.gray.200'),
          '--tw-prose-bullets': theme('colors.gray.200'),
          '--tw-prose-hr': theme('colors.gray.700 / 0.4'),
          '--tw-prose-quote-borders': theme('colors.gray.500'),
          '--tw-prose-captions': theme('colors.gray.500'),
          '--tw-prose-code': theme('colors.gray.300'),
          '--tw-prose-code-bg': theme('colors.gray.200 / 0.05'),
          '--tw-prose-pre-code': theme('colors.gray.100'),
          '--tw-prose-pre-bg': 'rgb(0 0 0 / 0.4)',
          '--tw-prose-pre-border': theme('colors.gray.200 / 0.1'),
          '--tw-prose-th-borders': theme('colors.gray.700'),
          '--tw-prose-td-borders': theme('colors.gray.800'),

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

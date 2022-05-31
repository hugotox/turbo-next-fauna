/* eslint-disable sort-keys */
import { extendTheme, withDefaultColorScheme, Theme as ChakraTheme } from '@chakra-ui/react'

import * as breakpoints from './breakpoints'

export type ColorNames = keyof ChakraTheme['colors']

export interface Theme extends ChakraTheme {}

export const COLOR_SCHEME: ColorNames = 'blue'

export const theme = extendTheme(
  {
    breakpoints: {
      sm: breakpoints.BREAKPOINT_SM,
      md: breakpoints.BREAKPOINT_MD,
      lg: breakpoints.BREAKPOINT_LG,
      xl: breakpoints.BREAKPOINT_XL,
      '2xl': breakpoints.BREAKPOINT_2XL,
    },
    colors: {
      // override colors here
    },
    fonts: {
      body: 'Ubuntu, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      heading: 'Ubuntu, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;',
      mono: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
    },
    shadows: {
      outline: '0 0 0 3px var(--chakra-colors-gray-300)',
    },
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  withDefaultColorScheme({ colorScheme: COLOR_SCHEME })
)

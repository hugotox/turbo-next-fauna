import '@emotion/react'
import { Theme as CustomTheme } from '@hugotox/theme'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

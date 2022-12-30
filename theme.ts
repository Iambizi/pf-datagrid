// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { Underdog } from '@next/font/google'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config,
  textStyles : {
    boldText: {
      fontWeight: 'bold'
    },
    boldUnderlined:{
      textDecoration: 'underline',
      fontWeight: 'bold'
    }
  }
 })

export default theme
import { Button, Heading, Link, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'

import { useAppSelector } from '../redux-store'

export default function Web() {
  const appVersion = useAppSelector((state) => state.app.version)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <Heading as="h1" css={{}} size="4xl">
        Turbo Next Starter
      </Heading>
      <ul>
        <li>
          <NextLink href="/products" passHref>
            <Link>Products (client side)</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/products-ssr" passHref>
            <Link>Products (server side)</Link>
          </NextLink>
        </li>
      </ul>
      <br />
      <NextLink href="/login" passHref>
        <Link>Login page</Link>
      </NextLink>
      <pre>App version: {appVersion}</pre>
      <br />
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </div>
  )
}

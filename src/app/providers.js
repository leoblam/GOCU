"use client";

import { CacheProvider, ChakraProvider } from "./chakra";

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}

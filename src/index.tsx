#!/usr/bin/env node

import React from 'react'
import { render } from 'ink'
import { QueryProvider } from './components/QueryProvider.js'
import { App } from './components/App.js'

// Enable alternate screen buffer for full-screen mode
process.stdout.write('\x1b[?1049h')

const instance = render(
  <QueryProvider>
    <App />
  </QueryProvider>,
  {
    exitOnCtrlC: false,
    patchConsole: false,
  }
)

// Restore original screen buffer when exiting
void instance.waitUntilExit().then(() => process.stdout.write('\x1b[?1049l'))

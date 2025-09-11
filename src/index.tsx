#!/usr/bin/env node

import React from 'react'
import { render, RenderOptions } from 'ink'
import { App } from './components/App.js'

export const RenderFullScreen = (element: React.ReactNode, options?: RenderOptions) => {
  process.stdout.write('\x1b[?1049h')
  const instance = render(<App>{element}</App>, options)
  void instance.waitUntilExit().then(() => process.stdout.write('\x1b[?1049l'))
  return instance
}

// Enable full-screen mode
render(<RenderFullScreen />, {
  exitOnCtrlC: false,
  patchConsole: false,
})

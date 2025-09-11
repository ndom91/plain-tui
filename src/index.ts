#!/usr/bin/env node

import React from 'react'
import { render } from 'ink'
import { App } from './components/App.js'

// Enable full-screen mode
render(React.createElement(App), {
  exitOnCtrlC: false,
  patchConsole: false,
})

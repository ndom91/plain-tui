# Plain TUI

A public TUI for interacting with your favorite customer support system.

## Setup

This TUI application is written using React's `ink` library and communicates
with Plain via their extensive [GraphQL API](https://app.plain.com/developer/api-explorer).

1. If it doesn't exist, create a `~/.config/plain-tui.json` file.
2. In there, create a key 'apiKey' and add a Plain Machine User API key as the
   value. You can create a new key under "Settings" > "Machine Users" in Plain.

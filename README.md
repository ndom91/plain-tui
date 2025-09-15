# 💻 Plain TUI

A full-screen terminal application (TUI) for interacting with Plain, your favorite customer support system.

## ✨ Features

- **🎫 Threads**: View and manage support threads with filtering
- **👥 Customers**: Browse customer information
- **🏢 Tenants**: Manage tenant organizations
- **📜 Thread Timeline**: Detailed view with full conversation history
- **⌨️ Keyboard Navigation**: Vim-like keyboard shortcuts

## 🏗️ Setup

This TUI application is written using React's `ink` library and communicates
with Plain via their extensive [GraphQL API](https://app.plain.com/developer/api-explorer).

### Prerequisites

- A Plain workspace with API access

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a configuration file at `~/.config/plain-tui.json`:
   ```json
   {
     "apiKey": "your-plain-api-key-here",
     "endpoint": "https://core-api.uk.plain.com/graphql/v1"
   }
   ```

   You can create an API key under "Settings" > "Machine Users" in Plain,
   include all permissions for full functionality.

4. Run the application:
   ```bash
   pnpm run dev
   ```

## 📝 License

MIT

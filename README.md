# 💻 Plain TUI

A full-screen terminal application (TUI) for interacting with Plain, your favorite customer support system.

## ✨ Features

- **🏠 Home Screen**: Navigate between different sections
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
     "workspaceId": "your-workspace-id-here",
     "endpoint": "https://core-api.uk.plain.com/graphql/v1"
   }
   ```

   You can create an API key under "Settings" > "Machine Users" in Plain. The workspace ID can be found in your Plain workspace URL or settings.

4. Run the application:
   ```bash
   pnpm run dev
   ```

## 🎮 Usage

### Navigation
- **Arrow Keys**: Navigate through lists and menus
- **Enter**: Select/view item details
- **Q**: Go back or quit
- **Letter Keys**: Quick navigation on home screen (T for Threads, C for Customers, N for Tenants)

### Threads View
- **F**: Toggle filters (coming soon)
- **R**: Refresh thread list
- **Enter**: View thread details

### Thread Detail View
- View complete conversation timeline
- See customer information and thread metadata
- Navigate back with **Q**

## 🔧 Configuration

The configuration file supports these options:

```json
{
  "apiKey": "your-plain-machine-user-api-key",
  "workspaceId": "your-workspace-id",
  "endpoint": "https://core-api.uk.plain.com/graphql/v1"
}
```

**Required fields:**
- `apiKey`: Your Plain Machine User API key
- `workspaceId`: Your Plain workspace identifier

**Optional fields:**
- `endpoint`: GraphQL endpoint (defaults to Plain's UK endpoint)

## 🧩 Architecture

- **React + Ink**: For building the terminal user interface
- **GraphQL Client**: For communicating with Plain's API
- **Component-based**: Modular views for different sections
- **State Management**: Local React state for each view

## 📝 License

MIT

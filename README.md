# MCP Server Collection

A collection of Model Context Protocol (MCP) servers built with the official MCP SDK. This project includes two production-ready MCP servers that can be integrated with AI assistants like Cursor IDE.

## 🚀 What I've Built

This repository contains two MCP servers that extend AI capabilities:

### 1. **Currency Converter Server** (`currencyConverted.js`)
- Provides real-time currency conversion functionality
- Uses the open Exchange Rates API for accurate conversion rates
- Supports all major global currencies
- Tool: `convertCurrency` - converts amounts between different currencies

### 2. **Weather Server** (`weatherServer.js`)
- Fetches current weather information for any location
- Uses wttr.in API for quick weather data
- Returns concise weather summaries including temperature and conditions
- Tool: `getWeather` - retrieves weather information for a specified city

## 📋 Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **Cursor IDE** (or any MCP-compatible client)

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd mcp-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## ⚙️ Configuration for Cursor IDE

To use these MCP servers with Cursor, you need to configure them in your Cursor settings.

1. Open Cursor IDE
2. Go to **Settings** → **MCP Settings** (or press `Cmd/Ctrl + Shift + P` and search for "MCP")
3. Add the following configuration to your MCP settings file:

```json
{
  "mcpServers": {
    "currency-converter": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-server/currencyConverted.js"]
    },
    "weather": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-server/weatherServer.js"]
    }
  }
}
```

**Important:** Replace `/absolute/path/to/mcp-server/` with the actual absolute path to this project folder on your system.

### Finding Your Absolute Path

- **Linux/Mac:**
  ```bash
  pwd
  ```
  Run this command in the project directory.

- **Windows:**
  ```cmd
  cd
  ```
  Run this command in the project directory.

## 🎯 Usage

Once configured in Cursor, the MCP servers will automatically start when needed. You can interact with them through Cursor's AI assistant.

### Example Prompts for Cursor:

**Currency Conversion:**
- "Convert 100 USD to EUR"
- "How much is 50 GBP in INR?"
- "Convert 1000 JPY to USD"

**Weather Information:**
- "What's the weather in London?"
- "Get weather for New York"
- "Show me the weather in Tokyo"

## 🛠️ Manual Testing

You can also run the servers manually for testing:

```bash
# Start Currency Converter Server
npm run start:currency

# Start Weather Server (in a new terminal)
npm run start:weather
```

Note: MCP servers use stdio transport, so they expect input from an MCP client. Running them manually will keep them waiting for input.

## 📦 Project Structure

```
mcp-server/
├── currencyConverted.js    # Currency converter MCP server
├── weatherServer.js         # Weather information MCP server
├── package.json            # Project dependencies and scripts
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## 🔑 Key Features

- **Type-safe:** Uses Zod for runtime type validation
- **Error handling:** Comprehensive error handling for API failures
- **Production-ready:** Follows MCP SDK best practices
- **Modular:** Each server is independent and can be used separately
- **Easy integration:** Simple stdio-based communication protocol

## 🌐 APIs Used

- **Currency Conversion:** [Open Exchange Rates API](https://open.er-api.com/) - Free tier, no API key required
- **Weather:** [wttr.in](https://wttr.in/) - Free weather service, no API key required

## 📖 Learn More

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [MCP SDK GitHub Repository](https://github.com/modelcontextprotocol/sdk)
- [Cursor IDE Documentation](https://cursor.sh/docs)

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for:
- New MCP server implementations
- Bug fixes
- Documentation improvements
- Additional features

## 📝 License

MIT

## 👤 Author

Utsav Goel

---

**Happy Coding! 🎉**

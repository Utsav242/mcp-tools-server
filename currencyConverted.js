import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// create a MCP Server

const server = new McpServer({
  name: "Currency Converter MCP Server",
  version: "1.0.0",
});

//
server.tool(
  "convertCurrency",
  "Convert amount from one currency to another currency.",
  {
    amount: z.number().describe("Amount to convert for e.g. 100"),
    from: z.string().describe("Base currency code, e.g USD"),
    to: z.string().describe("Target currency code, e.g. INR"),
  },
  async ({ amount, from, to }) => {
    try {
      // Need to implementing actual code

      const res = await fetch(`https://open.er-api.com/v6/latest/${from.toUpperCase()}`);
      const data = await res.json();
      const rate = data.rates?.[to.toUpperCase()];
      if (!rate) {
        throw new Error(`Exchange rate for ${to.toUpperCase()} not found`);
      }
      const converted = (amount * rate).toFixed(2);
      const result = `${amount} ${from.toUpperCase()} = ${converted} ${to.toUpperCase()}`;
      return {
        content: [
          {
            type: "text",
            text: result,
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error: ${err.message}`,
          },
        ],
      };
    }
  }
);

// we can add mulitple tools like - server.tool()

// Start the server with stdio transport

async function startServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Convert currency started");
}

startServer().catch((error) => {
  console.error("Failed to start MCP Server", error);
  //  close the server
  process.exit(1);
});

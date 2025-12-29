import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "Weather MCP Server",
  version: "1.0.0",
});

server.tool(
  "getWeather",
  "Get short weather information for a given location.",
  {
    location: z.string().describe("City or location, e.g. London or New York"),
  },
  async ({ location }) => {
    try {
      // Use wttr.in which returns simple text forecasts.
      const encoded = encodeURIComponent(location);
      const res = await fetch(`https://wttr.in/${encoded}?format=%l:+%c+%t+%w`);
      if (!res.ok) {
        throw new Error(`Weather API responded with ${res.status}`);
      }
      const text = await res.text();
      return {
        content: [
          {
            type: "text",
            text: text.trim(),
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching weather: ${err.message}`,
          },
        ],
      };
    }
  }
);

async function startServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Weather server started");
}

startServer().catch((error) => {
  console.error("Failed to start MCP Weather Server", error);
  process.exit(1);
});

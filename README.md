# ticket-repro

Ticket Resolver for Agents That Act, TrueFoundry x Polaris, 26 Sep 2026.

The agent runs on TrueForge. It reads GitHub issue 1, reproduces the bug in a Daytona sandbox, and stops before it comments.

## The bug

`src/add.js` returns `a + b + 1`. `add(2, 2)` returns 5. The test expects 4.

## What the agent did

1. Read issue 1 through the GitHub MCP server.
2. Cloned the repo inside Daytona. This PC is Windows, so TrueForge has no local sandbox.
3. Installed Node in the sandbox. The sandbox did not have it.
4. Ran the test and got: `FAIL add(2, 2) returned 5, expected 4`.
5. Changed only that return line inside the sandbox and got `ok`.
6. Prepared a comment on issue 1. TrueForge paused on `add_issue_comment`.
7. The person denied the tool call. No comment was posted. The file on GitHub was not changed.

## How to run the harness

- TrueForge 0.2.1: `npx @truefoundry/trueforge@latest`, then http://localhost:8790
- Model: gpt-5-4-mini
- Connector: GitHub
- Sandbox provider: Daytona
- Agent name: ticket-resolver
- Sandbox is on. The shield is on for GitHub comment, pull request, push, and update tools.

AI tools used: Cursor.

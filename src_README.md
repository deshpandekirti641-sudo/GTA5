# Mini Open-World Heist Game

- **src/server.js**: Main server file (entry point for Node.js).
- **src/routes/**: API routes for missions and characters.
- **assets/**: Place all VFX, SFX, graphics, and animation files here.

## Deployment Notes

- Ensure that the `package.json` is in the root of your project (not in src/).
- The `"main"` field in `package.json` points to `src/server.js`. Do not move the `package.json` into `/src/`.
- When deploying, point your platform to run `npm start` and the server will start from the correct entry point.

## Getting Started

```bash
npm install
npm start
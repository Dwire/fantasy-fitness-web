# AI Memory - Fantasy Fitness Web

## Deployment (Netlify)

- Use npm only, not yarn (yarn.lock removed and ignored)
- Node 20.18.1 configured in netlify.toml and .nvmrc
- NODE_OPTIONS --openssl-legacy-provider not compatible with Node 20+
- Build command: `npm install && npm run build`

## React Router Configuration

- Using React Router v7.9.4 (v6+ syntax)
- `<Route>` must be child of `<Routes>`, never rendered directly
- Main router setup in `src/index.js` with `<BrowserRouter>`
- Route definitions in `src/routes/routes.js` using `<Routes>` (aliased as Switch)
- App component renders Routes directly, no Route wrapper needed in index.js

## Project Structure

- React 18.3.1 with Redux for state management
- Class components used in routes (RoutesComponent)
- HOCs: `withRouter` (provides router props), `withAuth` (authentication)
- Adapters pattern for API calls (baseConfig.js for axios setup)

## Key Files

- `src/index.js` - Root setup: Router > Provider > App
- `src/App.js` - Main app wrapper, renders Routes component
- `src/routes/routes.js` - Route definitions
- `src/hocs/withRouter.js` - Router HOC for class components
- `src/adapters/baseConfig.js` - Axios base configuration

## Common Patterns

- Redux connect() for state/dispatch
- withRouter() for routing in class components
- Adapter pattern for API calls
- CSS modules per feature (leagueDash.css, team.css, etc)

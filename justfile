# Fantasy Fitness Web - Development Commands

# Install dependencies
install: npm install

# Start development server on port 3000
dev: npm start

# Run tests
test: npm test

# Build for production
build: npm run build

# Deploy to production (requires build first)
deploy: npm run deploy

# Check for running dev server
check-server: lsof -ti:3000 || echo "No server running on port 3000"

# Kill dev server if running
kill-server: -lsof -ti:3000 | xargs kill -9

# Restart dev server
restart: kill-server dev

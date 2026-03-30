# Deployment Guide

## Production Deployment

This application is configured for production deployment with intelligent mode detection. The server automatically detects deployment environments and switches to production mode.

### Deployment Configuration

The application has been modified to handle deployment scenarios where the `.replit` file cannot be edited:

1. **Automatic Environment Detection**: The server detects deployment environments using:
   - `REPLIT_DEPLOYMENT=true`
   - `NODE_ENV=production` 
   - `REPL_SLUG` presence

2. **Auto-Build**: When deployed, the application automatically builds the production assets if they don't exist.

3. **Production Mode**: Serves static files from the `dist/public` directory instead of using the Vite development server.

### Manual Deployment Steps (if needed)

If you need to manually prepare for deployment:

```bash
# 1. Build the application
npm run build

# 2. Start in production mode
NODE_ENV=production npm start
```

### Production Scripts

- `npm run build` - Builds both frontend and backend for production
- `npm start` - Starts the server in production mode
- `./start.sh` - Alternative production startup script

### Environment Variables

The application uses the following environment variables:
- `NODE_ENV` - Set to "production" for deployment
- `PORT` - Server port (defaults to 5000)
- `REPLIT_DEPLOYMENT` - Auto-detected deployment flag

### Troubleshooting

If deployment fails:
1. Ensure the build process completes successfully
2. Check that `dist/public` directory exists after build
3. Verify environment variables are set correctly

The server now intelligently handles both development and production modes without requiring `.replit` file modifications.
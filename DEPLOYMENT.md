# Vercel Deployment Setup

This project is configured to automatically deploy to Vercel when changes are pushed to the `master` branch.

## Setup Instructions

### 1. Install Vercel CLI (locally)
```bash
npm i -g vercel
```

### 2. Link your project to Vercel
```bash
vercel login
vercel link
```

This will create a `.vercel` directory with your project configuration.

### 3. Get Vercel Tokens

Get your Vercel token:
```bash
vercel token create
```

Get your Org ID and Project ID from `.vercel/project.json`:
```bash
cat .vercel/project.json
```

### 4. Add GitHub Secrets

Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `VERCEL_TOKEN` - Your Vercel authentication token
- `VERCEL_ORG_ID` - Your Vercel organization ID (from `.vercel/project.json`)
- `VERCEL_PROJECT_ID` - Your Vercel project ID (from `.vercel/project.json`)

### 5. Deploy

The deployment will automatically trigger on every push to `master` after tests pass.

## Manual Deployment

To deploy manually:
```bash
vercel --prod
```

## Environment Variables

Add any required environment variables in your Vercel project settings:
- Go to your project on Vercel
- Navigate to Settings → Environment Variables
- Add any necessary variables

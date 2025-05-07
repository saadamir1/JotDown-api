# JotDown API

Backend API service for the JotDown note-taking application.

## Overview

This Express.js server provides API endpoints for managing notes, supporting the JotDown client application.

## Features

- RESTful API for note management
- In-memory data storage
- CORS enabled
- Simple health check endpoint

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Server health check |
| `/api/notes` | GET | Retrieve all notes |
| `/api/notes` | POST | Create a new note |

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/saadamir1/JotDown-api.git

# Install dependencies
cd JotDown-api
npm install
```

### Running Locally

```bash
# Development mode with automatic restart
npm run dev

# Production mode
npm start
```

Server runs on port 5000 by default.

## Deployment

This API can be easily deployed on services like Render:

1. Connect your GitHub repository
2. Configure the service:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - (Optional) Set up environment variables if needed

## Connect with Frontend

This API is designed to work with the [JotDown client application](https://github.com/saadamir1/JotDown-client).

## Author

Saad Amir - [Medium](https://medium.com/@saadamir1) - [GitHub](https://github.com/saadamir1) - [Email](mailto:saadamir070@gmail.com)

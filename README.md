# SyncPaper - Real-time Collaborative Document Editor

SyncPaper is a real-time collaborative document editor that allows multiple users to edit the same document simultaneously. Built with React, Node.js, Socket.IO, and MongoDB, it provides a seamless collaborative editing experience.

## Features

- Real-time document editing
- Multiple users can edit simultaneously
- Auto-saving functionality
- Rich text editing capabilities
- Document persistence using MongoDB
- Cross-browser compatibility

## Tech Stack

- **Frontend:**
  - React.js
  - Quill.js (Rich Text Editor)
  - Socket.IO Client
  
- **Backend:**
  - Node.js
  - Socket.IO Server
  - MongoDB (Document Storage)
  - Mongoose (MongoDB ODM)

## Project Structure

```
syncpaper/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── TextEditor.js  # Main editor component
│   │   ├── App.js         # Root component
│   │   ├── index.js       # Entry point
│   │   └── style.css      # Styles
│   └── package.json
│
└── server/                 # Backend Node.js server
    ├── server.js          # Socket.IO and Express server
    ├── Document.js        # MongoDB document model
    └── package.json
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Configure MongoDB:
   - Make sure MongoDB is installed and running
   - Default connection URL: `mongodb://localhost:27017/syncpaper`

4. Start the application:
   ```bash
   # Start the server (from server directory)
   npm start

   # Start the client (from client directory)
   npm start
   ```

5. Access the application at `http://localhost:3000`

## How It Works

1. **Real-time Collaboration:**
   - Uses Socket.IO for bi-directional communication
   - Changes are broadcast to all connected clients
   - Document state is synchronized across all users

2. **Document Saving:**
   - Auto-saves every 2 seconds
   - Changes are persisted to MongoDB
   - Documents are identified by unique IDs

3. **Rich Text Editing:**
   - Powered by Quill.js
   - Supports formatting options
   - Toolbar for text manipulation

## API Endpoints

- Socket.IO Events:
  - `get-document`: Retrieves document data
  - `load-document`: Sends document data to client
  - `send-changes`: Broadcasts changes to other users
  - `receive-changes`: Receives changes from other users
  - `save-document`: Persists document to database

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
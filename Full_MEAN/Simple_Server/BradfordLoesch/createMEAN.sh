#!/bin/bash

# Create parent directory
mkdir client
mkdir server
touch server.js
# Create client files
cd client
mkdir assets
cd assets
mkdir controllers
mkdir factories
touch app.js
cd ..
mkdir partials
touch index.html
cd ..
# Create server files
cd server
mkdir config
mkdir controllers
mkdir models
cd config
touch mongoose.js
touch routes.js

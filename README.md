# Real-Time Chat Application (Django Channels)

## Overview
This is a real-time chat application built using **Django**, **Django Channels**, and **WebSockets**. It enables live messaging between users in chat rooms using asynchronous communication.

## Live Deployment
The application is deployed on Render and can be accessed below:

👉 [Live Chat Application](https://real-time-chat-1-yu8i.onrender.com/)

## Tech Stack
- Python 3
- Django 5
- Django Channels
- Daphne (ASGI server)
- WebSockets
- SQLite (development database)
- JavaScript (frontend WebSocket client)

## Features
- Real-time messaging using WebSockets
- Chat rooms (General, Random, etc.)
- Message history loading on join
- Simple responsive UI

## Current Status / Known Issue
During deployment preparation for Render, changes were made to the WebSocket configuration and consumer logic.

As a result:
- Messages are currently **not being sent and received correctly in real time**
- The two-way chat functionality is temporarily broken in the deployed version

## Important Note
This issue is related to deployment configuration adjustments which affected WebSocket communication between the frontend and backend.

## Future Fix
The application will be updated to:
- Restore full WebSocket functionality
- Fix real-time message broadcasting between clients
- Improve production deployment configuration
- Ensure stable WebSocket connections on Render

## Author
Thami Dlamini
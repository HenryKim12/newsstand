
# Newsstand

Newsstand is a modern web application designed to deliver the latest news articles to users in a seamless and user-friendly manner. This application aggregates news from various reliable sources through a News API and presents it in a clean, organized format, allowing users to stay updated on current events, trending topics, and in-depth articles across various categories such as technology, sports, politics, entertainment, and more.

## Table of Contents
  - [Demo](#demo)
  - [Key Features](#key-features)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [License](#license)

## Demo
![](https://github.com/HenryKim12/newsstand/blob/main/backend/data/newsstand-gif.gif)

## Key Features

- **Search Functionality**: A robust search feature that allows users to find news articles based on keywords.
- **User Authentication**: Secure user authentication for personalized news experiences and access to premium content through JWT authentication and cookie storage.
- **Favorites**: Users can favourite articles and save them for later reading.
- **Daily News Updates**: Fetches and displays the latest news articles from multiple sources on a daily basis.
- **Email Service**: Welcome new users on account creation.

## Usage
### Install Dependencies + Run
```
# ./frontend/client-app
npm install 
npm run dev 

# ./backend
npm install 
npm run dev
```

### Running Tests
Run backend Jest tests
```
# ./backend
npm test
```

## Configuration
```
# .env in ./backend
JWT_SECRET_KEY=your-secret
NEWS_API_KEY=your-api-key
MONGO_CONNECTION_STRING=your-db-url
SMTP=your-smtp-info  #HOST, PORT, USER, PASS 
```

## License
This project is licensed under the [MIT License](https://github.com/HenryKim12/newsstand/blob/main/LICENSE)

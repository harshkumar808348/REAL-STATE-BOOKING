# Homyz - Modern Real Estate Platform

<div align="center">

![Homyz Banner](https://github.com/Ananya01Agrawal/Real-estate-Booking-Website/assets/99130567/9dce86bd-771c-493a-821f-bce92039c688)

**A comprehensive MERN stack real estate application for property search, listing, and booking**

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)

[Features](#features) • [Demo](#demo) • [Installation](#installation) • [Usage](#usage) • [Contributing](#contributing) • [Contact](#contact)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌟 Overview

Homyz is a full-stack real estate web application designed to revolutionize the property search and booking experience. Built with the MERN stack, it provides an intuitive platform for users to discover, list, and manage properties with ease. Whether you're searching for your dream home or listing properties for sale or rent, Homyz offers a seamless, feature-rich experience.

### Key Highlights

- 🏡 Comprehensive property listings with detailed information
- 🔍 Advanced search and filtering capabilities
- 🗺️ Interactive maps with location intelligence
- 👤 Secure user authentication with Google OAuth
- 📅 Integrated booking and visit scheduling
- ❤️ Favorites and wishlist functionality

---

## ✨ Features

### Property Management
- **Extensive Listings**: Browse through a diverse catalog of properties with detailed descriptions, high-quality images, pricing, and location information
- **Property Details**: Comprehensive property information including features, dimensions, amenities, and unique selling points
- **Virtual Tours**: Immersive property viewing experience with image galleries

### Search & Discovery
- **Advanced Filtering**: Customize searches by property type (rent/sale), price range, location, amenities, and more
- **Smart Sorting**: Sort results by price, date listed, popularity, and relevance
- **Location Intelligence**: Interactive maps showing properties, nearby amenities, schools, restaurants, hospitals, and transportation options

### User Experience
- **User Profiles**: Create and manage personalized profiles with profile pictures and property listings
- **Authentication**: Secure registration and login with email/password and Google OAuth integration
- **Visit Booking**: Schedule property visits by selecting preferred dates and times
- **Favorites**: Save and organize favorite properties for quick access
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

### Additional Features
- **Neighborhood Insights**: Detailed information about surrounding areas and points of interest
- **Real-time Updates**: Live property availability and pricing information
- **Secure Transactions**: Protected user data and secure communication channels

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building interactive interfaces
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS3/SASS** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JWT** - JSON Web Tokens for secure authentication
- **Google OAuth 2.0** - Third-party authentication
- **bcrypt** - Password hashing and security

### Additional Tools
- **Mapbox/Google Maps API** - Interactive mapping functionality
- **Cloudinary** - Image storage and optimization
- **dotenv** - Environment variable management

---

## 🚀 Installation

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v14.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/homyz-real-estate.git
   cd homyz-real-estate
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database
   MONGO_URI=your_mongodb_connection_string
   
   # JWT Secret
   JWT_SECRET=your_jwt_secret_key
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Frontend URL
   CLIENT_URL=http://localhost:3000
   
   # Additional Services (Optional)
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

## ⚙️ Configuration

### MongoDB Setup

**Option 1: Local MongoDB**
```bash
# Start MongoDB service
sudo systemctl start mongodb

# Verify MongoDB is running
sudo systemctl status mongodb
```

**Option 2: MongoDB Atlas**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env` file

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs
6. Copy Client ID and Client Secret to `.env`

---

## 📖 Usage

### For Users

1. **Browse Properties**: Navigate to the home page to view featured listings
2. **Search**: Use the search bar and filters to find specific properties
3. **View Details**: Click on any property to see comprehensive information
4. **Register/Login**: Create an account to access additional features
5. **Book Visits**: Schedule property viewings at your convenience
6. **Save Favorites**: Mark properties you're interested in for later review

### For Property Owners

1. **Create Account**: Register and complete your profile
2. **List Property**: Add new property listings with details and images
3. **Manage Listings**: Edit or remove your properties as needed
4. **Track Interest**: Monitor views and booking requests

---

## 📁 Project Structure

```
homyz-real-estate/
│
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   ├── context/        # React context
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Express backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── utils/             # Utility functions
│   └── server.js
│
├── .env                   # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 🔌 API Documentation

### Authentication Endpoints

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/google
GET  /api/auth/logout
```

### Property Endpoints

```http
GET    /api/properties          # Get all properties
GET    /api/properties/:id      # Get property by ID
POST   /api/properties          # Create new property (auth required)
PUT    /api/properties/:id      # Update property (auth required)
DELETE /api/properties/:id      # Delete property (auth required)
```

### User Endpoints

```http
GET    /api/users/profile       # Get user profile (auth required)
PUT    /api/users/profile       # Update user profile (auth required)
GET    /api/users/favorites     # Get user favorites (auth required)
POST   /api/users/favorites/:id # Add to favorites (auth required)
```

### Booking Endpoints

```http
POST   /api/bookings            # Create booking (auth required)
GET    /api/bookings            # Get user bookings (auth required)
DELETE /api/bookings/:id        # Cancel booking (auth required)
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/homyz-real-estate.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow existing code style and conventions
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m "Add: amazing new feature"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Wait for review and address feedback

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly
- Ensure no breaking changes

### Code of Conduct

Please be respectful and constructive in all interactions. We're committed to providing a welcoming and inclusive environment for all contributors.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Project Maintainer**: Harsh Kumar

- **Email**: harshkumar808348@gmail.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

### Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- Email the maintainer
- Join our community discussions

---

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by modern real estate platforms
- Built with love using the MERN stack

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star!**

Made with ❤️ by the Homyz Team

</div>

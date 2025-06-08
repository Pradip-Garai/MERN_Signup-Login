# Signup/Login System

A full-stack web application featuring a modern authentication system with a beautiful dark-themed UI. Built using the MERN stack (MongoDB, Express.js, React, Node.js).

![Project Preview]

## 🚀 Features

- Modern, responsive dark blue UI theme
- User authentication (Signup/Login)
- Form validation with real-time feedback
- Toast notifications for user actions
- Protected routes
- Password encryption
- JWT-based authentication
- MongoDB database integration

## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- React Router Dom for routing
- React Toastify for notifications
- Modern CSS with animations
- Responsive design

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Bcrypt for password hashing
- Express Validator for validation

## 📁 Project Structure

```
├── Frontend/
│   ├── src/
│   │   ├── Component/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Styles/
│   │   ├── Utils/
│   │   │   └── Toastify.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── Backend/
    ├── Controllers/
    │   └── authController.js
    ├── Middleware/
    │   └── Validation.js
    ├── Models/
    │   ├── db.js
    │   └── users.js
    ├── Routes/
    │   ├── auth.js
    └── Server.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd Signup_Login
\`\`\`

2. Install Backend Dependencies
\`\`\`bash
cd Backend
npm install
\`\`\`

3. Install Frontend Dependencies
\`\`\`bash
cd ../Frontend
npm install
\`\`\`

4. Set up Environment Variables
Create a .env file in the Backend directory:
\`\`\`env
PORT=8000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
\`\`\`

5. Start the Backend Server
\`\`\`bash
cd Backend
npm start
\`\`\`

6. Start the Frontend Development Server
\`\`\`bash
cd Frontend
npm run dev
\`\`\`

The application will be available at `http://localhost:5173`

## 🔒 API Endpoints

### Authentication Routes
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login user

## 📱 Features Breakdown

### User Authentication
- Secure signup with email verification
- JWT-based authentication
- Protected routes
- Session management

### Form Validation
- Real-time input validation
- Password strength requirements
- Email format validation
- Required field validation

### UI/UX Features
- Responsive design for all devices
- Modern dark theme
- Smooth animations
- Toast notifications
- Loading states
- Error handling

## 🔐 Security Features

- Password hashing using bcrypt
- JWT token authentication
- Protected API endpoints
- Input sanitization
- CORS enabled
- Environment variables for sensitive data

## 🛠️ Development

### Running Tests
```bash
cd Frontend
npm test

cd Backend
npm test
```

### Building for Production
```bash
cd Frontend
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

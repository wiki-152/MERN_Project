# MERN_Project
A comprehensive online platform combining property rentals and marketplace for various items with many advanced features like AR/VR tours, real time ChatBot etc. powered by MERN stack.


## Structure of the Project

/project-root
├── frontend
├── backend
├── .gitignore
├── package.json
├── README.md

## Structure of the Backend

/backend
├── config
│   ├── db.js (database connection setup)
│   ├── default.json (default configuration settings)
│   ├── production.json (production-specific settings)
├── controllers
│   ├── authController.js
│   ├── userController.js
│   └── otherEntityController.js
├── middleware
│   ├── authMiddleware.js (JWT or session authentication)
│   ├── errorHandler.js (error handling middleware)
│   └── logger.js (optional, for logging requests)
├── models
│   ├── User.js
│   └── OtherEntity.js
├── routes
│   ├── api
│   │   ├── auth.js
│   │   ├── users.js
│   │   └── otherEntity.js
├── services
│   ├── authService.js
├── utils
│   ├── helpers.js (utility functions used across the server)
│   ├── emailService.js (email handling utilities)
│   └── logger.js (logging utilities)
├── app.js (Express app configuration)
├── server.js (entry point for the server)
└── .env (environment variables, e.g., MongoDB URI, JWT Secret)


## Structure of the Frontend

/frontend
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── assets
│       └── images (for static images)
├── src
│   ├── components
│   │   ├── common (reusable components like Button, Input, etc.)
│   │   ├── layout (Header, Footer, Sidebar, etc.)
│   │   └── pages (different views/pages like HomePage, LoginPage, etc.)
│   ├── context (React Context API files, e.g., AuthContext)
│   ├── hooks (custom React hooks)
│   ├── routes (Route definitions and management)
│   ├── services (API service files for Axios or Fetch)
│   ├── styles (CSS/SASS files or Tailwind utilities)
│   ├── utils (utility functions)
│   ├── App.js
│   ├── index.js
│   ├── setupTests.js (for testing configurations, optional)
│   └── .env (for environment variables like API endpoints)
└── package.json

## How to Run the Project

npx nodemon server.js   # (for backend)
npm run dev OR npm start   # (for frontend)

## Commands

mkdir frontend backend
cd frontend
npm init -y
cd ../backend
npm init -y
cd ..

cd frontend
npm create vite@latest . OR npx create-react-app .
npm install axios react-router-dom zustand
npm install @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-select @radix-ui/react-slider lucide-react
npm install @heroicons/react
npx shadcn@latest init
npx shadcn@latest add button input select checkbox label radio-group slider (not used)
For Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install js-cookie
npm install chart.js react-chartjs-2

https://cloudinary.com/documentation/image_upload_api_reference
https://console.cloudinary.com/pm/c-601876bf0603aab3a5822fe2976316/developer-dashboard
npm i @cloudinary/url-gen @cloudinary/react

Gemini 
https://aistudio.google.com/app/u/1/apikey?_gl=1*1hcy91n*_ga*MTEzNDgyMTA2OC4xNzMyNDQ1OTA1*_ga_P1DBVKWT6V*MTczMzY1NTY0My4yLjAuMTczMzY1NTY0My42MC4wLjEzMDAzNzA3MTI.&pli=1

npm run dev  # (for Vite)
npm start    # (for Create React App)

cd ../backend
npm install express mongoose dotenv cors
npm install body-parser
npm install bcrypt
npm install crypto
npm install jsonwebtoken
npm install yup
npm install nodemailer
npm install --save-dev nodemon
npm install axios
npm install multer

mkdir config controllers middleware models routes services utils
touch app.js server.js .env

## Working of Backend 

routes->middleware->controller->services->model

## Commands To Create Files 

New-Item -Path "README.md" -ItemType "File"

New-Item -Path "Component.jsx" -ItemType "File"
New-Item -Path "Component.css" -ItemType "File"
New-Item -Path "Component.test.js" -ItemType "File"


# ROOTS

Roots E-commerce App is a web application designed to address the challenges faced by traditional attire/fabric sellers and designers, such as kente, kete, and gonja weavers. These local entrepreneurs often lack the funds to rent shops in busy areas, which hinders their ability to sell their products effectively. Roots aims to revolutionize the traditional attire industry by creating an easy and affordable online marketplace. This platform empowers local entrepreneurs to showcase and sell their products effortlessly, regardless of financial constraints and geographical limitations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Roots E-commerce App provides a platform for traditional attire and fabric sellers to reach a broader audience without needing physical stores. This online marketplace allows sellers to display their products, manage inventory, and handle sales transactions in a user-friendly environment. Buyers can browse various traditional attires, place orders, and deliver them to their doorstep.

## Features

- **User Authentication**: Secure login and registration for users and sellers.
- **Product Listings**: Sellers can list their traditional attire products with images, descriptions, and prices.
- **Shopping Cart**: Buyers can add products to their cart and proceed to checkout.
- **Payment Integration**: Secure payment processing through the Paystack payment gateway.
- **Responsive Design**: Accessible on both desktop and mobile devices.
  
## Tech Stack

### Frontend

- React
- Redux Toolkit
- Bootstrap
- React Bootstrap
- React Router DOM
- React Icons
- React Paystack
- React Phone Number Input
- React Slick
- Slick Carousel
- Axios
- AOS (Animate On Scroll)
- Web Vitals
- Testing Library (Jest, React)

#### Frontend Dependencies

```json
{
  "@reduxjs/toolkit": "^2.0.1",
  "@testing-library/jest-dom": "^5.14.1",
  "@testing-library/react": "^13.0.0",
  "@testing-library/user-event": "^13.2.1",
  "aos": "^2.3.4",
  "axios": "^1.6.2",
  "bootstrap": "^5.3.2",
  "react": "^18.2.0",
  "react-bootstrap": "^2.9.1",
  "react-dom": "^18.2.0",
  "react-icons": "^4.12.0",
  "react-paystack": "^4.0.3",
  "react-phone-number-input": "^3.3.7",
  "react-redux": "^9.0.2",
  "react-router-dom": "^6.20.1",
  "react-scripts": "5.0.1",
  "react-slick": "^0.30.2",
  "slick-carousel": "^1.8.1",
  "web-vitals": "^2.1.0"
}
```

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- JSON Web Token (JWT)
- Multer
- Validator
- Nodemon
- CORS
- Dotenv

#### Backend Dependencies

```json
{
  "bcrypt": "^5.1.1",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.0.3",
  "multer": "^1.4.5-lts.1",
  "nodemon": "^3.0.2",
  "validator": "^13.11.0"
}
```

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/roots-ecommerce-app.git
    cd roots-e-commerce-app/frontend
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Start the development server:
    ```bash
    yarn start
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd ../backend
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Create a `.env` file and configure your environment variables:
    ```plaintext
    REACT_APP_MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    REACT_APP_PAYSTACK_SECRET_KEY=your_paystack_secret_key
    ```

4. Start the development server:
    ```bash
    yarn start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. Use `http://localhost:8001` for backend API endpoints.

## Contributing

We welcome contributions to the Roots E-commerce App! To contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact:

- Name: Elijah Ofori
- Email: kobbyofori9@gmail.com
- GitHub: [kobby-ofori](https://github.com/kobby-ofori)

# Car Rental System - MERN Stack

A full-stack car rental application built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to view available cars and make bookings, and it includes an admin interface for managing cars.

- - -
## Features

- **View Cars**: Users can browse available cars for rent.
- **Book Cars**: Users can select a car, specify rental dates, and complete a booking.
- **Manage Cars**: Admins can add new cars to the inventory (authentication not included in this example).
- **User-Specific Bookings**: Users can view their specific bookings.

- - -
## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Libraries**: Mongoose for data modeling, dotenv for environment variables

## Getting Started
- - -
### Prerequisites

- **Node.js** (v14 or above recommended)
- **MongoDB** (MongoDB Atlas or local MongoDB instance)

- - -
### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/car-rental-system.git
   cd car-rental-system/backend
    ```

2. **Run Backend**
    ```bash
    cd backend
    npm install
    npm start
    ```

3. **Run Frontend**
    ```bash
    cd frontend
    npm install
    npm start
    ```

4. **Set up environment variables:**

    > Create a .env file in the backend directory and add the following variables:

    ```bash
    MONGO_URI=your_mongodb_connection_string
    PORT=8000
    ```

5. **Open on browser**
    > Go to `http://localhost:3000` for frontend

- - -
## Future Enhancements
- User Authentication: Implement JWT-based authentication for secure user management.
- Admin Panel: Provide admin-specific routes and permissions for managing cars and bookings.
- Booking Management: Add options to cancel or update bookings.
- Payment Integration: Integrate a payment gateway for online payment options.
- Frontend: Develop a React frontend for users to view cars and manage bookings.
- - -

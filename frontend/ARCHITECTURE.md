# DeskFlow - Project Structure

## Architecture Overview

```
deskflow/
├── src/                  ← FRONTEND (React + Vite + TypeScript)
│   ├── components/       ← Reusable UI components
│   ├── pages/            ← Route pages
│   ├── contexts/         ← React context (auth state)
│   ├── data/             ← Mock data (replace with API calls)
│   ├── assets/           ← Images
│   └── integrations/     ← Supabase client (swap with axios/fetch)
│
├── backend/              ← BACKEND REFERENCE (Express + MongoDB)
│   ├── server.js         ← Express app entry point
│   ├── config/
│   │   └── db.js         ← MongoDB connection
│   ├── models/           ← Mongoose schemas
│   │   ├── User.js
│   │   ├── Space.js
│   │   └── Booking.js
│   ├── routes/           ← API route definitions
│   │   ├── auth.js
│   │   ├── spaces.js
│   │   └── bookings.js
│   ├── controllers/      ← Business logic
│   │   ├── authController.js
│   │   ├── spaceController.js
│   │   └── bookingController.js
│   ├── middleware/
│   │   └── auth.js       ← JWT verification middleware
│   ├── .env.example      ← Environment variables template
│   └── package.json      ← Backend dependencies
```

## How to migrate to standalone MERN:

1. Copy `backend/` to a separate folder, run `npm install`
2. Copy `src/` into a new Vite/CRA project
3. Replace Supabase calls with `axios` calls to your Express API
4. Connect MongoDB Atlas and update `.env`

## API Endpoints (defined in backend/routes/)

| Method | Endpoint             | Description          | Auth Required |
|--------|----------------------|----------------------|---------------|
| POST   | /api/auth/register   | Sign up              | No            |
| POST   | /api/auth/login      | Sign in              | No            |
| GET    | /api/auth/me         | Get current user     | Yes           |
| GET    | /api/spaces          | List all spaces      | No            |
| GET    | /api/spaces/:id      | Get space details    | No            |
| POST   | /api/bookings        | Create booking       | Yes           |
| GET    | /api/bookings/my     | Get user's bookings  | Yes           |

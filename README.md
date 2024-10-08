This project was created using Express, MongoDB, Node and React.

## Features

- Listing of Products from Fake Store API
- Add, delete items to cart
- Signin, Signup using JWT for authentication
- User data is stored in MongoDB

## To run locally

1. Clone this repository

```
git clone https://github.com/AayushKrShukla/Simple-ECom-React.git
cd Simple-ECom-React
```

### Prerequisites: You should have a mongo server running

The repo contains both the frontend and backend, it is recommened to start backend first

Before running the server please make sure you have a .env at the root of the backend folder(.env.local is provided)

```
JWT_TOKEN_EXPIRES_IN=<time> example 1d
JWT_COOKIE_EXPIRES_IN=<numer> example 1
JWT_TOKEN_SECRET=<secret> example mysecretkey
MONGODB_URI=<token>
```

How to start backend server

```
cd backend
cp .env.local .env
npm install
npm run start
```

if you want to debug you can run

```
npm run dev
```

How to start frontend server

```
cd frontend
npm run dev
```

After you start go to the mentioned url and you will be looking at the listing page

To register a new user you can go to `/signup` route
Use `/login` to login as an existing user

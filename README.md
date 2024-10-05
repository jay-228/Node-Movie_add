### **Frontend (React.js):**

Build a user interface that allows the following functionalities:

1. **Authentication**:
    - **Login Page**: A form for users to log in.
    - **Registration Page**: A form to register new users.
    - Store JWT token in localStorage for authenticated users.
2. **Movie Operations**:
    - **Create a New Movie**: A form to add new movies (available only for authenticated users).
    - **View All Movies**: Display a list of all movies in the database with details like title, genre, director, release year, and description.
    - **Update a Movie**: A form to update details of an existing movie (available only for authenticated users).
    - **Delete a Movie**: A button to delete a movie (available only for authenticated users).
3. The frontend should be responsive and styled using **CSS** or **Bootstrap**.

---

### **Backend (Node.js, Express, MongoDB):**

Create an Express API to handle the CRUD operations and implement authentication and authorization using **JWT** and **bcrypt**.

1. **Authentication and Authorization**:
    - **POST /auth/register**: Register a new user. Passwords should be hashed using bcrypt.
    - **POST /auth/login**: Authenticate a user and generate a JWT token.
    - **Protected Routes**: Access to certain routes should be restricted to authenticated users via JWT.
2. **Movie CRUD Operations**:
    - **GET /movies**: Fetch all movies from the MongoDB database.
    - **POST /movies**: Add a new movie to the database (authentication required).
    - **PUT /movies/**: Update an existing movie by its ID (authentication required).
    - **DELETE /movies/**: Delete a movie by its ID (authentication required).
3. Use **Mongoose** to define the movie schema and interact with MongoDB.

---

### **MongoDB**:

The **Movie** model should have the following fields:

- **Title** (String)
- **Genre** (String)
- **Director** (String)
- **Release Year** (Number)
- **Description** (String)

The **User** model should have the following fields:

- **Username** (String)
- **Email** (String)
- **Password** (hashed using bcrypt)
- **Role** (optional, for role-based access control)

---

### **Routing & Communication**:

- Set up **Axios** or **Fetch API** to communicate between the React frontend and Express backend.
- Ensure that the frontend correctly handles server responses (e.g., displaying success/error messages).

---

---

### **Instructions:**

### **Backend Setup (Node.js, Express, MongoDB)**:

1. Initialize a new Node.js project and install the required dependencies (`express`, `mongoose`, `cors`, `dotenv`, `bcryptjs`, `jsonwebtoken`, etc.).
2. Create routes and controllers to handle CRUD operations and authentication.
3. Set up a MongoDB connection using Mongoose.
4. Implement authentication using **JWT** and password hashing using **bcrypt**.

### **Frontend Setup (React.js)**:

1. Initialize a React app using **Create React App**.
2. Install Axios or use Fetch API for HTTP requests.
3. Create components for:
    - **Movie List**: Displays all movies.
    - **Movie Form**: For adding and updating movies.
    - **Movie Details**: Displays detailed information about a movie.
    - **Login** and **Register**: Forms for user authentication.
4. Implement routing using **React Router**.
5. Use protected routes to secure access to certain pages based on authentication.

1. Authentication vs Authorization:
Authentication is the process of verifying a user’s identity, which in our code occurs when a user logs in through /api/v1/auth/login and receives a JWT token. Authorization, on the other hand, determines what actions a user is allowed to perform; in our code, the authorize middleware ensures that only users with specific roles, such as admin or manager, can create, update, or delete dishes.

2. Security (bcrypt):
We use bcryptjs to hash passwords before storing them in the database so that plain text passwords are never saved. This provides an extra layer of security, making it difficult for attackers to recover passwords if the database is compromised, while still allowing login verification by comparing the entered password with the hashed value.

3. JWT Structure:
The protect middleware checks for a Bearer token in the request header, verifies it using the secret key, and decodes it to retrieve the user’s ID and role. This allows the server to identify the user and enforce role-based access control for protected routes, returning an unauthorized error if the token is missing, invalid, or expired.
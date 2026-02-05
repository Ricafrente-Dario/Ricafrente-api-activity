# RESTful API Activity - Ricafrente, Dario Jr. B.

## Best Practices Implementation

### 1. Environment Variables:

- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
  Answer: Using environment variables like `BASE_URI` allows us to change the base route or port without modifying the source code. This makes the API more flexible, easier to maintain, and safer when moving between development, testing, and production environments.

---

### 2. Resource Modeling:

- Why did we use plural nouns (e.g., `/dishes`) for our routes?
  Answer: Plural nouns are used in RESTful APIs to represent collections of resources. For example, `/dishes` represents the entire collection of dish objects. Using plurals makes the API more intuitive and consistent with standard REST conventions.

---

### 3. Status Codes:

- When do we use `201 Created` vs `200 OK`?
  Answer:
  - `200 OK` is used for successful retrieval or update of a resource (GET or PUT).  
  - `201 Created` is used when a new resource is successfully created via POST.  

- Why is it important to return `404` instead of just an empty array or a generic error? 
  Answer: Returning `404 Not Found` clearly communicates that the requested resource does not exist. This is better than an empty array, which could be misinterpreted as a valid (but empty) response, and it helps clients handle errors properly.

---

### 4. Testing:

- Screenshot of a successful GET request: 

![GET /api/v1/dishes](./screenshots/get-dishes.png)


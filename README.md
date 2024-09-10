# RateYourMovie: Movie Review Application

RateYourMovie is a full-stack application built with ReactJS for the frontend and Spring Boot for the backend. It allows users to view movie information and submit reviews for movies.

## Application Screenshots

### Homepage
![Homepage](https://github.com/user-attachments/assets/c02802b7-69f9-40e2-b15b-f7a5c0f8b721)

*Description: The homepage displays a grid of movie posters, allowing users to browse through available movies.*

### Trailer Page
![Trailer Page](https://github.com/user-attachments/assets/91f995f2-bc76-4f1b-9003-a68cdf635a18)

*Description: The trailer page shows the movie's trailer along with basic information about the selected movie.*

### Reviews Page
![Reviews Page](https://github.com/user-attachments/assets/3d6f3969-4607-4587-9197-e3211c4ff706)

*Description: The reviews page displays user reviews for a specific movie and allows users to submit their own reviews.*


## Backend Overview

The backend of RateYourMovie is built using Spring Boot and provides RESTful APIs for CRUD operations on movies and reviews. It uses MongoDB as the database for storing movie and review data.

### Technology Stack

- Java
- Spring Boot
- MongoDB
- Spring Data MongoDB
- RESTful API

### Project Structure

The backend is organized into the following main packages:

- `dev.aryannvr.RateYourMovie.movies`: Contains classes related to movie operations
- `dev.aryannvr.RateYourMovie.reviews`: Contains classes related to review operations

### Key Components

#### Movie-related Classes

1. `MovieController`: Handles HTTP requests related to movies
   - `GET /api/v1/movies`: Retrieves all movies
   - `GET /api/v1/movies/{imdbId}`: Retrieves a single movie by IMDb ID

2. `MovieService`: Contains business logic for movie-related operations
   - `allMovies()`: Retrieves all movies
   - `findMovieByImdbId(String imdbId)`: Finds a movie by its IMDb ID

3. `MovieRepository`: Interfaces with MongoDB for movie data operations
   - Extends `MongoRepository` for basic CRUD operations
   - Custom method: `findMovieByImdbId(String imdbId)`

#### Review-related Classes

1. `ReviewController`: Handles HTTP requests related to reviews
   - `POST /api/v1/reviews`: Creates a new review for a movie

2. `ReviewService`: Contains business logic for review-related operations
   - `createReview(String reviewBody, String imdbId)`: Creates a new review and associates it with a movie

3. `ReviewRepository`: Interfaces with MongoDB for review data operations
   - Extends `MongoRepository` for basic CRUD operations

### API Endpoints

1. Get all movies:
   - URL: `/api/v1/movies`
   - Method: GET
   - Response: List of all movies

2. Get a single movie:
   - URL: `/api/v1/movies/{imdbId}`
   - Method: GET
   - Path Variable: `imdbId` (String)
   - Response: Movie details for the given IMDb ID

3. Create a review:
   - URL: `/api/v1/reviews`
   - Method: POST
   - Request Body: JSON object with `reviewBody` and `imdbId`
   - Response: Created review object

### Data Models

The project uses two main data models:

1. `Movie`: Represents a movie in the database
2. `Review`: Represents a user review for a movie

### Cross-Origin Resource Sharing (CORS)

The backend is configured to allow cross-origin requests from any origin (`@CrossOrigin(origins = "*")`). This enables the frontend to communicate with the backend when they are hosted on different domains.

### MongoDB Integration

The project uses Spring Data MongoDB for database operations. The `MongoTemplate` is used in the `ReviewService` for more complex operations, such as updating a movie document with a new review.

## Getting Started

To run the backend:

1. Ensure you have Java and MongoDB installed on your system.
2. Clone the repository.
3. Configure your MongoDB connection in `application.properties`.
4. Run the Spring Boot application.

## Future Improvements

- Implement user authentication and authorization
- Add pagination for movie and review listings
- Implement more advanced search and filtering options for movies
- Add rate limiting and other security measures

For more information on the frontend implementation and how to run the full stack application, please refer to the frontend documentation.

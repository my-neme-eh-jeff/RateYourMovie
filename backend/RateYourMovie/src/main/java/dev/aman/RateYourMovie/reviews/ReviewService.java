package dev.aryannvr.RateYourMovie.reviews;

import com.mongodb.client.result.UpdateResult;
import dev.aryannvr.RateYourMovie.movies.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {
        // Create and insert a new review
        Review review = reviewRepository.insert(new Review(reviewBody));

        // Update the movie document by adding the review ID to the reviewIds array
        UpdateResult result = mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds", review))
                .first();

        // Check if the update was successful
        if (result.getMatchedCount() == 0) {
            // Handle the case where no movie with the given imdbId was found
            throw new RuntimeException("Movie with IMDb ID " + imdbId + " not found.");
        }

        // Return the created review
        return review;
    }

}

package dev.aryannvr.RateYourMovie.movies;

import dev.aryannvr.RateYourMovie.reviews.Review;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data // TO HANDLE GETTERS AND SETTERS
@AllArgsConstructor //annot for creating constructors
@NoArgsConstructor
public class Movie {

    @Id
    private ObjectId id;

    private String imdbId;

    private String releaseDate;

    private String title;

    private String trailerLink;

    private String poster;

    private List<String> genres;

    private List<String> backdrops;

    @DocumentReference //this will make it so that reviews are present in seperate collection
    private List<Review> reviewIds;

}

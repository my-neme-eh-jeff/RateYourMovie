package dev.aryannvr.RateYourMovie.reviews;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "review")
public class Review {
    @Id
    private ObjectId id;

    private String body; // Change 'Body' to 'body'

    public Review(String body) {
        this.body = body; // Update constructor
    }
}
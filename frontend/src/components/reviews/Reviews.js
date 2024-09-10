// import { useEffect, useRef } from "react";
// import api from "../../api/axiosConfig";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import ReviewForm from "../reviewForm/ReviewForm";

// import React from "react";

// const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
//   const revText = useRef();
//   let params = useParams();
//   const movieId = params.movieId;

//   useEffect(() => {
//     getMovieData(movieId);
//   }, []);

//   const addReview = async (e) => {
//     e.preventDefault();
    
//     const rev = revText.current;

//     if (!rev.value.trim()) {
//         // Handle empty review case
//         console.log("Review cannot be empty");
//         return;
//     }

//     try {
//         const response = await api.post("/api/v1/reviews", {
//             reviewBody: rev.value,
//             imdbId: movieId,
//         });

//         const newReview = { body: rev.value };

//         const updatedReviews = Array.isArray(reviews) ? [...reviews, newReview] : [newReview];

//         setReviews(updatedReviews);  // Update the state with the new array

//         rev.value = "";  // Clear the input field
//     } catch (err) {
//         console.error(err);
//     }
// };


  

//   return (
//     <Container>
//       <Row className="mt-3">
//         <Col >
//           <h3>Reviews</h3>
//         </Col>
//       </Row>
//       <Row >
//         <Col>
//           <img src={movie?.poster} alt="" />
//         </Col>
//         <Col>
//           {
//             <>
//               <Row>
//                 <Col>
//                   <ReviewForm
//                     handleSubmit={addReview}
//                     revText={revText}
//                     labelText="Write a Review?"
//                   />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <hr />
//                 </Col>
//               </Row>
//             </>
//           }
//           {reviews &&
//             Array.isArray(reviews) &&
//             reviews.map((r, index) => {
//                 return (
//                     <React.Fragment key={index}>
//                         <Row>
//                             <Col>{r.body}</Col>
//                         </Row>
//                         <Row>
//                             <Col>
//                                 <hr />
//                             </Col>
//                         </Row>
//                     </React.Fragment>
//                 );
//             })}
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <hr />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Reviews;


import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from "react";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [movieId, getMovieData]);  // Ensure this effect runs when movieId changes

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      const newReview = { body: rev.value };

      const updatedReviews = Array.isArray(reviews) ? [...reviews, newReview] : [newReview];

      setReviews(updatedReviews);  // Update the state with the new array

      rev.value = "";  // Clear the input field
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={movie?.poster} alt={movie?.title} />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm
                  handleSubmit={addReview}
                  revText={revText}
                  labelText="Write a Review?"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </>
          {reviews &&
            Array.isArray(reviews) &&
            reviews
              .filter((r) => r.body && r.body.trim() !== "") 
              .map((r, index) => (
                <React.Fragment key={index}>
                <Row>
                  <Col>{r.body}</Col> {/* Display the body of each review */}
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </React.Fragment>
            ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;

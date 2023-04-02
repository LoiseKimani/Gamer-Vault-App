import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  return (
    <main>
      {reviews.map((review) => {
        return (
          <article key={review.id}>
            <h3>
              <Link to={`/reviews/${review.id}`}>{review.name}</Link>
            </h3>
            <small>
              {review.rating} stars
            </small>
            <p>{review.comment}</p>
          </article>
        );
      })}
    </main>
  );
}

export default Home;

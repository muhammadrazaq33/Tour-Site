import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readMe, setReadMe] = useState(false);
  const { id, info, price, country, image } = tour;
  return (
    <article className="single-tour">
      <img src={image} alt="img" className="tour-image" />
      <footer className="tour-info">
        <div className="tour-price-country">
          <h4>{country}</h4>
          <h5>${price}</h5>
        </div>
        <p>
          {readMe ? info : `${info.substring(200)}...`}
          <button className="Toggle" onClick={() => setReadMe(!readMe)}>
            {readMe ? "Hide" : "See more"}
          </button>
        </p>
        <button className="btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

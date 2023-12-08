import { createContext, useState } from "react";
import Tours from "./Tours";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);
  if (tours.length === 0) {
    return (
      <main>
        <div className="no-tour">
          <h2>No Tour Left</h2>
          <button className="Refresh" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h3 className="loader">🐶</h3>
      </div>
    );
  }
  const pet = result.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images}></Carousel>
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;

import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { useState, useContext, lazy } from "react";
// import Modal from "./Modal";

const Modal = lazy(() => import("./Modal"));

import AdoptedPetContext from "./AdoptedPet";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const result = useQuery(["details", id], fetchPet);

  const [, setAdoptedPet] = useContext(AdoptedPetContext);

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
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1> Would you like to adopt {pet.name}</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                  >
                    Yes!
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;

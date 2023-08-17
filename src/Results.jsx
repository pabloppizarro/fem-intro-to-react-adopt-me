import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2> No pets found</h2>
      ) : (
        pets.map((p) => (
          <Pet
            animal={p.animal}
            name={p.name}
            breed={p.breed}
            images={p.images}
            location={`${p.city}, ${p.state}`}
            key={p.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;

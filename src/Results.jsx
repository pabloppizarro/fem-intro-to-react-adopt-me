import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h2> No pets found</h2>
      ) : (
        pets.map((p) => (
          <Pet
            animal={p.animal}
            id={p.id}
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

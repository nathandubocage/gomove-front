import useTravels from "../../hooks/useTravels";

export default function Travel() {
  const travels = useTravels();

  return (
    <div className="mx-12 py-12 flex flex-col gap-8">
      {travels.map((travel) => (
        <div key={travel.id} className="">
          <p>
            {travel.destination.city} - {travel.destination.country}
          </p>
          <p>
            {travel.transport.length > 0
              ? `${travel.transport[0].company} - ${travel.transport[0].price} € `
              : ""}
          </p>
          <img
            src={travel.destination.image}
            alt={travel.destination.city}
            className="w-64 h-32 object-cover"
          />
        </div>
      ))}
    </div>
  );
}

const runningEvents = [
  {
    name: "Dhaka Marathon 2024",
    date: "February 16, 2024",
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co.com/Qm4V9jq/marathon1.jpg",
    description: "A 21K half marathon through the heart of Dhaka City — challenging and unforgettable.",
  },
  {
    name: "Chattogram Hill Run",
    date: "April 10, 2023",
    location: "Chattogram, Bangladesh",
    image: "https://i.ibb.co.com/ZxSGGfp/marathon2.jpg",
    description: "Trail run with stunning hill views — endurance and elevation combined.",
  },
  {
    name: "Bangabandhu Sheikh Mujib Marathon",
    date: "March 17, 2022",
    location: "Tungipara, Bangladesh",
    image: "https://i.ibb.co.com/NYWRGk8/marathon3.jpg",
    description: "Celebrating the Father of the Nation — a marathon of pride and unity.",
  },
];

export default function RunningEvents() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {runningEvents.map((event, index) => (
        <div
          key={index}
          className="bg-black/40 border border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-yellow-400 mb-1">{event.name}</h3>
            <p className="text-sm text-gray-400">{event.date} • {event.location}</p>
            <p className="text-gray-300 mt-2 text-sm">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

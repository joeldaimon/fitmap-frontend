export default function Services() {
  const services = [
    { title: "Entrenamiento Personal", desc: "Planes adaptados a ti" },
    { title: "Clases Grupales", desc: "Diversión y motivación" },
    { title: "Nutrición", desc: "Consejos saludables" },
  ];

  return (
    <div className="flex justify-center gap-6 p-8 bg-gray-100">
      {services.map((s, index) => (
        <div key={index} className="w-60 p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const services = [
    { title: "Fitness Coaching", desc: "Planes adaptados a ti" },
    { title: "Clases Grupales", desc: "Diversión y motivación" },
    { title: "Dieta personalizada", desc: "Consejos saludables" },
  ];

  return (
    <div className="p-15 bg-gray-100">
      <h1 className="py-5 font-bold italic mb-2 text-gray-700 font-impact"><span className="text-yellow-500">333</span> CLUBES</h1>
      <div className="flex justify-center">
        {services.map((s, index) => (
          <div key={index} className="w-[30%] bg-gray-700 text-yellow-500 ml-[50px] p-5 grid text-center rounded-[5px] min-h-[200px]">
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

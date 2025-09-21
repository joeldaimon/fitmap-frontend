export default function Services() {
  const services = [
    { title: "Entrenamiento Personal", desc: "Planes adaptados a ti" },
    { title: "Clases Grupales", desc: "Diversión y motivación" },
    { title: "Nutrición", desc: "Consejos saludables" },
  ];

  return (
    <div className="flex justify-center gap-6 p-8 bg-gray-100">
      {services.map((s, index) => (
        <div key={index} className="shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px] w-[20%] bg-[#646cff] ml-[50px] grid text-center rounded-[5px] min-h-[200px]">
          <h3 className="text-xl font-bold mb-2">{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

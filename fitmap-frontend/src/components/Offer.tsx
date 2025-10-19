import offerImg from "../assets/service1.jpg";

export default function Offer() {
  return (
    <div className="flex items-center gap-6 p-8 bg-yellow-500 text-white">
      <img src={offerImg} alt="Oferta" className="w-1/3 rounded-lg" />
      <div className="divOffer">
        <h1 className="py-5 font-bold italic mb-2 text-white font-impact">OFERTA ESPECIAL</h1>
        <p>Regístrate hoy y recibe tu primera sesión gratis</p>
      </div>
    </div>
  );
}

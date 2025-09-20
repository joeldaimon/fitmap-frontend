import offerImg from "../assets/service1.jpg";

export default function Offer() {
  return (
    <div className="flex items-center gap-6 p-8 bg-black text-white">
      <img src={offerImg} alt="Oferta" className="w-1/3 rounded-lg" />
      <div className="divOffer">
        <h2 className="text-2xl font-bold mb-2">Oferta Especial</h2>
        <p>Regístrate hoy y recibe tu primera sesión gratis</p>
      </div>
    </div>
  );
}

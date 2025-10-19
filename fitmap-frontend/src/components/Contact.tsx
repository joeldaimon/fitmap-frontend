import { useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_PUBLIC_KEY";

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => setStatus("Mensaje enviado correctamente!"))
      .catch(() => setStatus("Error al enviar el mensaje."));

    setFormData({ name: "", email: "", message: "" });
  };


  return (
<div id="contacto" className="p-8 bg-gray-700 text-white text-center">
      <h1 className="py-5 font-bold italic mb-2 text-yellow-500 font-impact">CONTACTO</h1>
      
      <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-2 rounded text-gray-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded text-gray-100"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          value={formData.message}
          onChange={handleChange}
          className="p-2 rounded text-gray-100 resize-none"
        />
        <button type="submit" className="bg-gray-300 text-gray-700 hover:bg-yellow-500 font-bold py-2 rounded">
          Enviar
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}

      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}
export default function Menu() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Ejercicios", path: "/ejercicios" },
    { name: "Rutinas", path: "/rutinas" },
    { name: "Progresos", path: "/progresos" },
    { name: "Contacto", path: "#contacto" },
  ];


  const location = useLocation();

  return (
    <nav className="flex justify-center gap-4 mt-4 mb-8">
      {menuItems.map((item) =>
        item.path.startsWith("#") ? (
          <HashLink
            key={item.name}
            smooth
            to={item.path}
            className="px-4 py-2 rounded-[5px] transition-colors bg-gray-300 text-black hover:bg-gray-400"
          >
            {item.name}
          </HashLink>
        ) : (
          <Link
            key={item.name}
            to={item.path}
            className={`px-4 py-2 rounded-[5px] transition-colors ${
              location.pathname === item.path
                ? "bg-purple-600 text-white"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {item.name}
          </Link>
        )
      )}
    </nav>
  );
}

import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


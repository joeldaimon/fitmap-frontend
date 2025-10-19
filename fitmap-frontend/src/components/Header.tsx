import logo from "../assets/logo.png";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerItems = [
    { name: "Home", path: "/" },
    { name: "Ejercicios", path: "/ejercicios" },
    { name: "Rutinas", path: "/rutinas" },
    { name: "Progresos", path: "/progresos" },
    { name: "Contacto", path: "#contacto" },
  ];

  return (
    <header className="bg-gray-700 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white">Fitmap</h1>
        <img src={logo} alt="Logo Fitmap" className="w-10 h-10" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex gap-6 text-gray-700">
          {headerItems.map((item) =>
            item.path.startsWith("#") ? (
              <HashLink
                key={item.name}
                smooth
                to={item.path}
                className="px-4 py-2 rounded-[5px] transition-colors bg-gray-300 hover:bg-yellow-500"
              >
                {item.name}
              </HashLink>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-[5px] transition-colors ${
                  location.pathname === item.path
                    ? "bg-yellow-500"
                    : "bg-gray-300 hover:bg-yellow-500"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-gray-200">
          <ul className={"py-5 text-center"}>
            {headerItems.map((item) =>
              item.path.startsWith("#") ? (
                <li className={"py-2"}><HashLink
                  key={item.name}
                  smooth
                  to={item.path}
                  className="px-4 hover:bg-gray-400"
                >
                  {item.name}
                </HashLink></li>
              ) : (
                <li className={"py-2"}><Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 hover:bg-gray-400 ${
                    location.pathname === item.path
                      ? "py-2"
                      : "py-2"
                  }`}
                >
                  {item.name}
                </Link></li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Fitmap Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">Fitmap</h1>
      </div>
      <div className="flex gap-4">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
          <i className="fab fa-tiktok text-2xl"></i>
        </a>
      </div>
    </header>
  );
}

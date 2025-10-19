import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Offer from "../components/Offer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Services />
      <Offer />
      <Contact />
    </div>
  );
}

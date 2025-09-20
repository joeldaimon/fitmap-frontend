import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

const images = [carousel1, carousel2, carousel3];

export default function Carousel() {
  return (
    <div className="flex overflow-x-auto gap-4 p-4 snap-x snap-mandatory">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className="w-[300px] h-[200px] object-cover rounded-lg snap-start"
        />
      ))}
    </div>
  );
}

import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex flex-col lg:w-1/2">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We provide You
            <span className="text-vortex-blue"> Super </span>
            <span className="text-vortex-blue"> Quality </span> Shoes
          </h2>
          <p className="mt-4 lh:max-w-lg info-text">Crafted with meticulous attention to detail, our footwear ensures the utmost in comfort and style. Designed to elevate your experience, each pair embodies unmatched quality, innovation, and a dash of refined elegance, providing you with a truly exceptional wearing experience.</p>
          <p className="mt-6 lg:max-w-lg info-text">Our commitment to precision and quality ensures your contentment.</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="View Details" iconURL={arrowRight} />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center lg:justify-end">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;

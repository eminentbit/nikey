import { arrowRight } from "../assets/icons";
import { shoe4 } from "../assets/images";
import Button from "../Components/Button";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center gap-10 w-full max-container max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          We Offer You <span className="text-coral-red">Premium Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Our shoes are crafted with the finest materials and cutting-edge
          design to ensure lasting comfort, durability, and style. Every pair is
          meticulously tested for performance, giving you footwear that goes
          beyond expectations.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label={"Shop Now"} iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe4} alt="Shoe Image" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
}

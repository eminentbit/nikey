import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

export default function SpecialOffer() {
  return (
    <section className="flex flex-col xl:flex-row justify-center items-center gap-10 p-6 bg-white rounded-lg w-full mx-auto">
      <div className="flex-1 flex justify-center xl:justify-end">
        <img
          src={offer}
          alt="Offer Image"
          width={737}
          height={687}
          className="object-contain max-w-full rounded-lg shadow-md"
        />
      </div>
      <div className="flex-1 flex flex-col text-center xl:text-left max-w-md px-6">
        <h2 className="text-4xl font-palanquin font-bold mb-4 text-gray-800">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Begin a shopping journey that elevates your experience with unbeatable
          deals. From top-tier selections to remarkable savings, we deliver
          unparalleled value that stands out.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Explore a world of possibilities crafted to meet your unique desires
          and exceed your highest expectations. With us, every step of your
          journey is exceptional.
        </p>
        <div className="mt-8 flex justify-center xl:justify-start gap-4">
          <Button
            label="Shop Now"
            iconURL={arrowRight}
            className="bg-coral-red text-white px-8 py-3 rounded-full hover:bg-red-600 transition duration-300"
          />
          <button className="flex items-center gap-2 px-8 py-3 border-2 border-gray-300 rounded-full font-montserrat text-lg text-gray-800 leading-none hover:bg-gray-100 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

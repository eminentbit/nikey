import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

export default function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full animate-fadeIn">
      <nav className="flex justify-between items-center max-container">
        <a
          href="/"
          className="hover:scale-105 transition-transform duration-300"
        >
          <img src={headerLogo} alt="Logo" width={130} height={26} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden animate-fadeIn">
          {navLinks.map((item, index) => (
            <li
              key={item.label}
              className={`animate-slideUp delay-${index * 100}`}
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block animate-slideIn">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
      </nav>
    </header>
  );
}

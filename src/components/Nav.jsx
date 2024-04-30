import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="w-full px-8 py-2 absolute z-10 md:mb-0">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex items-center gap-2">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
          <span className="font-palanquin font-bold text-4xl text-vortex-blue">Vortex</span>
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-xl text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

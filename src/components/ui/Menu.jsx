import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import MenuList from "./MenuList";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex gap-3 justify-center m-auto relative">
        <h1 className="text-white text-xl font-bold">Arfita</h1>
        <IoMdArrowDropdown
          onClick={handleClick}
          className="lg:hidden md:hidden sm:inline-block text-white text-4xl cursor-pointer transition-transform duration-300"
        />
        {isMenuOpen && (
          <div className="lg:hidden md:hidden absolute top-12 bg-indigo-50 p-10 rounded shadow-lg transition-all duration-300">
            <MenuList />
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;

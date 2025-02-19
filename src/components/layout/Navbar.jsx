import Menu from "../ui/Menu";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex  border-gray-100 navbar-bg backdrop-blur-lg w-full py-6">
        <Menu />

        <div className="hidden md:flex gap-3 justify-center m-auto">
          {/* Base - Right */}

          <a
            className="inline-block rounded bg-blue-50 px-8 py-2 text-sm font-medium text-indigo-950 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-white active:scale-110 "
            href="#projects"
          >
            Projects
          </a>

          {/* Border - Right */}

          <a
            className="inline-block rounded border border-current px-8 py-2 text-sm font-medium text-blue-50 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-blue-50"
            href="#experience"
          >
            Experience
          </a>

          {/* Base - Left */}

          <a
            className="inline-block rounded bg-blue-50 px-8 py-2 text-sm font-medium text-indigo-950 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-white"
            href="#skills"
          >
            Skills
          </a>

          {/* Border - Left */}

          <a
            className="inline-block rounded border border-current px-8 py-2 text-sm font-medium text-blue-50 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-blue-50"
            href="#collections"
          >
            Collections
          </a>

          {/* Base - Right */}

          <a
            className="inline-block rounded bg-blue-50 px-8 py-2 text-sm font-medium text-indigo-950 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-white"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

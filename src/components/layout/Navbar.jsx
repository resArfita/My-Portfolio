import Menu from "../ui/Menu";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-indigo-950 w-full py-6">
        <Menu />

        <div className="hidden md:flex gap-3 justify-center m-auto">
          {/* Base - Right */}

          <a
            className="inline-block rounded bg-blue-50 px-8 py-3 text-sm font-medium text-indigo transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-blue-50"
            href="#"
          >
            Projects
          </a>

          {/* Border - Right */}

          <a
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-blue-50 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-blue-50"
            href="#"
          >
            Experience
          </a>

          {/* Base - Left */}

          <a
            className="inline-block rounded bg-blue-50 px-8 py-3 text-sm font-medium text-indigo transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-blue-50"
            href="#"
          >
            Skills
          </a>

          {/* Border - Left */}

          <a
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-blue-50 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-blue-50"
            href="#"
          >
            Education
          </a>

          {/* Base - Right */}

          <a
            className="inline-block rounded bg-blue-50 px-8 py-3 text-sm font-medium text-indigo transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-blue-50"
            href="#"
          >
            Case Study
          </a>

          {/* Border - Right */}

          <a
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-blue-50 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-blue-50"
            href="#"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

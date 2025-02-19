const MenuList = () => {
  return (
    <>
      <div className="flow-root">
        <ul className="-my-7 divide-y divide-black">
          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-950 hover:text-neutral-50"
                >
                  Profile
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-950 hover:text-neutral-50"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-950 hover:text-neutral-50"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-950 hover:text-neutral-50"
                >
                  Skills
                </a>
              </li>
            </ul>
          </li>

          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <a
                  href="#collections"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-950 hover:text-neutral-50"
                >
                  Collections
                </a>
              </li>
            </ul>
          </li>

          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <a
                  href="#contact"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-indigo-950 hover:text-neutral-50"
                >
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuList;

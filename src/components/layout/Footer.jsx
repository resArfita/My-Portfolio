import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      {/* ubah all the sosmed svg's to react icon */}
      <footer>
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
          <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
            <p className="text-center text-sm text-gray-500 sm:text-left">
              Copyright &copy; {currentYear} All rights reserved.
            </p>

            <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              <li>
                <a
                  href="https://www.linkedin.com/in/resaarfitah/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="cursor-pointer hover:scale-140" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/resArfita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="cursor-pointer hover:scale-140" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

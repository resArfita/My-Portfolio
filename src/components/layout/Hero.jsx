import ProfilePict from "../ui/ProfilePict";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className="my-15 mx-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <ProfilePict />
          
          
          <p className="text-yellow-500 text-center text-3xl font-semibold tracking-tighter lg:text-[3rem]">Welcome</p>
          <p className="mb-3 max-w-2xl p-1 text-center text-xl tracking-tighter text-slate-300 lg:text-2xl">My name is <span className="font-bold">Resa Arfita H</span>,
          currently live in South Tangerang. I am a Fresh graduate in Computer Science. I gained
            basic programming skills during university and later deepened my expertise
            by specializing in Web Development through Courses and a Bootcamp
            last year. I enjoy working in a collaborative team and am excited
            to contribute to building immersive products</p>

            <a
            href="https://drive.google.com/file/d/1y1uWe-cS-xxMeTXHmv4QVy4mwnDy0G4Y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-5 bg-gray-200 text-slate-950 rounded-full flex items-center gap-x-2 py-2 px-3 text-sm font-semibold tracking-tight"
          >
            See Resume
            <MdArrowOutward/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;

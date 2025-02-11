import Divider from "../ui/Divider";
import myskills from "../../data/myskills";
import Heading from "../ui/Heading";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <Divider />
        <Heading header="Technical Skills" />

        <div>
          <div className="flex flex-col items-center justify-center">
            <ul>
              {myskills.map((skill, index) => (
                <li 
                key={index}
                className="m-10 border-b border-slate-400 py-2 text-xl tracking-wide lg:py-10 lg:text-1xl"
                >{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Skills;

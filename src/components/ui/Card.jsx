// import CardDetail from "./CardDetail";
import experience from "../../data/experience";
import { useState } from "react";
import Modal from "./Modal"

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  //state untuk render selected experience
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleButtonModal = (experienceDetail) => {
    setSelectedExperience(experienceDetail);
    setShowModal(true);
  }



  // //disabble scrolling when modal is open
  // useEffect(() => {
  //   if(showModal) {
  //     document.body.classList.add("overflow-hidden");
  //   }else{
  //     document.body.classlist.remove("overflow-hidden");
  //   }
  // }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        {experience.slice().reverse().map((myexperience) => (
        <article key={myexperience.id} className="flex bg-neutral bg-neutral-50 rounded-lg mx-5 lg:mx-25 transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white">
              <span>{myexperience.year}</span>
              <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
              <span>{myexperience.month}</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                  {myexperience.role}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
                {myexperience.description}
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <button
                className="w-full block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
                onClick={() => handleButtonModal(myexperience)}
              >
                View Details
              </button>
            </div>
          </div>
        </article>
        ))}
      </div>
      {showModal && selectedExperience && (
        <Modal myexperience={selectedExperience} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Card;

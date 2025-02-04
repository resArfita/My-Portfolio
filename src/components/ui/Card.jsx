/* eslint-disable react/prop-types */
import experience from "../../data/experience";

const Card = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {experience.map((myexperience) => (
        <article key={myexperience.id} className="flex bg-blue-50 mx-5 lg:mx-25 transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
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
              <a
                href="#"
                className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
              >
                View
              </a>
            </div>
          </div>
        </article>
        ))}
      </div>
    </>
  );
};

export default Card;

/* eslint-disable react/prop-types */
const Heading = ({ header }) => {
  return (
    <>
      <h2 className="mb-10 mt-20 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {header}
      </h2>
    </>
  );
};

export default Heading;

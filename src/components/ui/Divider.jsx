
const Divider = () => {
  return (
    <>
      <div style={{ position: "relative", zIndex: "-1", margin: "20vh" }}>
        <span className="my-10 relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-[#02010f] px-6"></span>
        </span>
      </div>
    </>
  );
};

export default Divider;

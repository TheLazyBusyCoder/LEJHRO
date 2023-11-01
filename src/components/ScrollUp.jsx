import { IoIosArrowUp } from "react-icons/io";
const ScrollUp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={
        "btn z-2 bg-dark  btn-primary visible position-fixed end-0 bottom-0 display-4 shadow fs-6 m-sm-3 border border-3 border-white"
      }
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollUp;

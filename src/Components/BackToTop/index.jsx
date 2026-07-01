import React, { useEffect, useState } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      {/* <button
        onClick={scrollToTop}
        className="btn"
        style={{
          borderRadius: "50%",
          backgroundColor: "#de7611",
          padding: "8px",
          border: "2px solid #b86e07",
          position: "fixed",
          bottom: "10%",
          right: "3%",
          display: visible ? "inline" : "none",
          zIndex: "1000",
        }}
      >
        🔺
      </button> */}
      <img
        className="fixed bottom-[0%] z-50 animate-fade md:right-[-1%] right-[-4%] cursor-pointer lg:w-[19%] 2xl:w-auto md:w-[18%] w-[34%]"
        onClick={scrollToTop}
        src="/images/icons/fix-icon.png"
        alt="backtotop"
      />
    </>
  );
}

export default BackToTop;

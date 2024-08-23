import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-2">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="py-2 px-3 rounded hover:bg-[#E1DAD4] text-white shadow-md bg-[#8E2209] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

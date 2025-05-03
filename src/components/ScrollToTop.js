import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div style={{ backgroundColor: "#1a1a1d", color: "#c5c6c7", fontFamily: "'Press Start 2P', cursive" }}>
      {/* ScrollToTop content here */}
    </div>
  );
}

export default ScrollToTop;

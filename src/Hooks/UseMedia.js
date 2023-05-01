import React, { useEffect, useState } from "react";

const UseMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};

export default UseMedia;

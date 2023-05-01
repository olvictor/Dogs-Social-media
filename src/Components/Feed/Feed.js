import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinity, setInfinity] = useState(true);

  useEffect(() => {
    function infinityScroll() {
      let wait = false;
      if (infinity) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infinityScroll);
    window.addEventListener("scroll", infinityScroll);
    return () => {
      window.removeEventListener("wheel", infinityScroll);
      window.removeEventListener("scroll", infinityScroll);
    };
  }, [infinity]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          key={page}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinity={setInfinity}
        />
      ))}
    </div>
  );
};

export default Feed;

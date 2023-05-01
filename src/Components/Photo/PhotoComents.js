import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { UserContext } from "../../UserContext";
import PhotoComentsForm from "./PhotoComentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComents = (props) => {
  const { login } = useContext(UserContext);
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comment}  ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author} :</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoComentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComents;

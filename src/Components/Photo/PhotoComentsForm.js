import React, { useState } from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import UseFetch from "../../Hooks/UseFetch";
import Error from "../Helper/Error";
import styles from "./PhotoCommentsForm.module.css";

const PhotoComentsForm = ({ id, setComments, single }) => {
  const { error, request } = UseFetch();
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((coments) => [...coments, json]);
    }
  };

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoComentsForm;

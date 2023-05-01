import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api";
import UseFetch from "../../Hooks/UseFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = UseFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;

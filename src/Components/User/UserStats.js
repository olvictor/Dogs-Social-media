import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { STATS_GET } from "../../api";
import UseFetch from "../../Hooks/UseFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = UseFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;

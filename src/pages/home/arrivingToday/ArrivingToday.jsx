import React, { useState } from "react";

import useFetch from "../../../Hooks/useFetch";
import { SwitchTabs, ContentWrapper, Carousel } from "../../../components";

const ArrivingToday = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/airing_today`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Airing Today</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>

      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default ArrivingToday;

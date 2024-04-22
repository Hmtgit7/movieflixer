import React from "react";
import { useParams } from "react-router-dom";

import "./Details.scss";

import useFetch from "../../Hooks/useFetch";
import { BsJustify } from "react-icons/bs";
import DetailsBanner from "./detailsBanner/DetailsBanner";


const Details = () => {
  // const { data, loading } = useFetch(`/movie/movieId`);
  // const { mediaType, Id } = useParams();

  return <div>
    <DetailsBanner/>
  </div>;
};

export default Details;

import React from "react";
import { useNavigate } from "react-router-dom";
import GoBackSvg from "./GoBackSvg";

const LinkBack = () => {
  const navigate = useNavigate();
  const handleGoBack = (event) => {
    navigate(-1);
  };
  return (
    <button className="go-back__link" href="#" onClick={handleGoBack}>
      <GoBackSvg />
    </button>
  );
};

export default LinkBack;

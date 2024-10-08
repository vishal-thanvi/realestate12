import React from "react";

import MainPage from "./MainContent/MainPage";
import CommonBanner from "../../components/CommonBanner";
const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CommonBanner image={"/images/breadcrumb-blogs.jpg"} title={"Blog"} />
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap px-[30px] pt-28">
        <MainPage />
      </div>
    </div>
  );
};

export default page;

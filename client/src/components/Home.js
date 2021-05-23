import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <main className=" homepage">eApparel<p className="slogan">Find Your Style</p></main>;
};

export default Home;

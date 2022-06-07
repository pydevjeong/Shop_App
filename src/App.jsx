import { useState, useEffect, Fragment } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import RouterPage from "./Login/RouterPage";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [isLogin,setIsLogin]=useState(true)
  

  if(props.showMainPage){
    setIsLogin(true)
  }

  return (
    <Fragment>
    {!isLogin && <RouterPage/>}

    {isLogin && <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>}
    </Fragment>
  );
};

export default App;

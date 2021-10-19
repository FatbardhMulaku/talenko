import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
/* import ScrollToTop from "../components/Shared/ScrollToTop"; */
import Layout from "../layout/DefaultLayout";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Menu from "../components/Shared/Menu/index";
import Work from "../pages/Work";
import Agency from "../pages/Agency";


const Routes = () => {
  const [open, setOpen] = useState(false)

  const handelClick = () => {
    setOpen(!open)
    console.log("handelClick", open)
  }

  return (

    <>
    

    <Router>
      {/*  <ScrollToTop /> */}
      {open && <Menu open={open} handleOpen={handelClick}/>}
      <Layout>
       

        <div className="Menu">
          <svg onClick={handelClick} className="Menu__icon" xmlns="http://www.w3.org/2000/svg" width="14" height="49.916" viewBox="0 0 14 49.916">
            <g id="Component_11_1" data-name="Component 11 – 1" transform="translate(1)">
              <path id="Path_731" data-name="Path 731" d="M-344,520.707v49.916" transform="translate(356 -520.707)" fill="none" stroke="#f24200" strokeWidth="2" />
              <path id="Path_732" data-name="Path 732" d="M-344,520.707v49.916" transform="translate(344 -520.707)" fill="none" stroke="#f24200" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <Switch>


          <Route path="/" exact render={() => <Home />} />
          <Route path="/Services" exact render={() => <Services />} />
          <Route path="/Work" exact render={() => <Work />} />
          <Route path="/Agency" exact render={() => <Agency />} />


          <Route path="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>

    </>
  );
}

export default Routes;
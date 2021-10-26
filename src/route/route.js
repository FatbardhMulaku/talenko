import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../layout/DefaultLayout";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Menu from "../components/Shared/Menu/index";
import Work from "../pages/Work";
import Agency from "../pages/Agency";
import Contact from "../pages/Contact";
import Info from "../pages/Info";

const Routes = () => {
  const [open, setOpen] = useState(false)


  const handelClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <Router>
        {open && <Menu open={open} handleOpen={handelClick} />}
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <Home toggle={handelClick}/>} />
            <Route path="/Services" exact render={() => <Services toggle={handelClick}/>} />
            <Route path="/Work" exact render={() => <Work toggle={handelClick}/>} />
            <Route path="/Agency" exact render={() => <Agency toggle={handelClick}/>} />
            <Route path="/Contact" exact render={() => <Contact toggle={handelClick}/>} />
            <Route path="/Info" exact render={() => <Info toggle={handelClick}/>} />

            <Route path="/404" render={() => <PageNotFound toggle={handelClick}/>} />
            <Redirect to="/404" />

          </Switch>
        </Layout>
      </Router>

    </>
  );
}

export default Routes;
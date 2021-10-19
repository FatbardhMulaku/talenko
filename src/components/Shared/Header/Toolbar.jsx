import React from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* import NavList from "./NavList"; */
/* import LoginNav from "./LoginNav"; */
import Logo from "../Logo/Logo";
/* import DrawerToggle from "./DrawerToggle"; */
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
/* import Icon from "./Icon"; */
/* import "./Toolbar.css"; */
import { ReactComponent as Btn } from "../../../assets/Home/btn_head.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 70px",
    alignItems: "center",
    paddingTop: "12px",
    color: 'white',
    maxWidth: "1800px",
    [theme.breakpoints.down("lg")]: {
      padding: "8px"
    }
  },
  box1: {
    boxShadow: "none ",
    backgroundColor: (props) => props.Bcolor,
    transition: "all 0.6s ease-out",
    padding: "0 0 2px",
    top: "auto",
    color: "white",
    borderBottom: "1px solid #A8A8A8"
  },
  box2: {
    backgroundColor: "#000 !important ",
    transition: "all 0.4s ease-in",
    padding: "0 0 2px",
    top: "auto",
    borderBottom: "1px solid #A8A8A8"
  },
  [theme.breakpoints.down("xs")]: {
    box1: {
      padding: "3px 10px !important",
    },
    box2: {
      padding: "0 !important",
    },
    appBar: {
      padding: "3px 0",
    },
  },
}));

const Toolbar = (props) => {
  const classes = useStyles(props);
  const { windowp } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: windowp ? window() : undefined,
  });

  return (
    <AppBar className={trigger ? classes.box2 : classes.box1}>
      <Container className={classes.appBar}>
        {/* <div className="DrawerToggle">
          <DrawerToggle clicked={props.drawerToggle} />
        </div> */}

        <Logo style="logo_header" />



        <div className="flex">
          

          <div className="searchIcon mr-4 my-auto">
              En
          </div>

          <Btn className="Header__btn"/>


        </div>

      </Container>
    </AppBar>
  );
};


export default Toolbar;

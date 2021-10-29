import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as Scroll from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "transparent",
    borderRadius: "25px",
    padding: "8px 40px",
    border: "1px solid white",
    color: "white",
  
    margin: (props) => props.margin,
    "& > .MuiButton-label": {
      textTransform: "capitalize",

      fontFamily: "Med",
      fontSize: "20px",
    },
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.116) !important",
      color: "white",
      "& .Btn-Class__active":{
        display:"none",

      },
      "& .Btn-Class__hover":{
        display:"inline"
      },
      /* border: (props) => props.HoverBorder, */
      borderColor:"transparent",
      "& > span > svg": {
        animation: `$icone-effect 0.8s ease-in-out infinite`,
      },
    },
    "& .Btn-Class__hover":{
      display:"none"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "5px 20px",
      fontSize: "12px !important",
      marginLeft: "auto !important",
      marginRight: "auto !important ",
    },
  },
  "@keyframes icone-effect": {
    "100%": {
      transform: "translate(0, 0)",
    },
    "50%": {
      transform: "translate(5px, 0)",
    },
  },
}));

function Buttons(props) {
  const classes = useStyles(props);
  let ScrollLink = Scroll.Link;

  const linkPath = props.link != null ? props.link : "";

  const link = linkPath.includes("/");
  const linkScroll = {
    spy: true,
    smooth: true,
    offset: props.offset,
    duration: 500,
    isDynamic: true,
  };
  return (
    <Button
      variant="contained"
      component={link ? LinkRouter : ScrollLink}
      className={`${classes.btn} Btn-Class`}
      to={linkPath}
      {...(!link && linkScroll)}
    >
      <i className={props.icon}></i>
        
        <span className="Btn-Class__active">{props.name}</span>
        <span className="Btn-Class__hover">{props.hover}</span>
    </Button>
  );
}

Buttons.defaultProps = {
  margin:"10px 30px",
};

export default Buttons;

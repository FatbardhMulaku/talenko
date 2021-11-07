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


const Lang = ["English","German","French", "Albanian"];

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 70px",
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
    transition: "all 0.4s ease-out",
    padding: "0 0 2px",
    top: "auto",
    color: "white",
    borderBottom: "1px solid #A8A8A8",
    
  },
  box2: {
    backgroundColor: "#000 !important ",
    transition: "all 0.4s ease-in",
    padding: "0 0 2px",
    top: "auto",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3);",
  },
  [theme.breakpoints.down("xs")]: {
    box1: {
      padding: "5px 10px !important",
    },
    box2: {
      padding: "5px 10px !important"
    },
    appBar: {
      padding: "5px 0",
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

          <div className={trigger ? "hidden":"flex searchIcon mr-4 md:mr-8 my-auto cursor-pointer DownMenu"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23.426" height="23.424" viewBox="0 0 25.426 25.424">
              <g id="Group_6" data-name="Group 6" transform="translate(-928.505 -407.348)">
                <g id="Group_5" data-name="Group 5" transform="translate(928.505 407.348)">
                  <path id="Path_17" data-name="Path 17" d="M941.2,407.348a12.726,12.726,0,0,0-1.364.073,12.02,12.02,0,0,0-1.231.2l-.235.052a12.714,12.714,0,0,0-6.271,3.512q-.238.245-.467.5a12.728,12.728,0,0,0,18.67,17.286q.239-.245.467-.5a12.727,12.727,0,0,0-9.569-21.119Zm-8.536,4.47c.067-.07.136-.136.2-.2s.157-.156.238-.231.144-.13.216-.194.163-.145.247-.215.15-.122.225-.182.17-.136.257-.2.155-.115.235-.17.176-.128.266-.186.161-.107.243-.159.182-.115.274-.17.166-.1.25-.146.188-.106.283-.157l.255-.133c.1-.049.194-.1.292-.142s.173-.081.26-.119l.3-.128c.088-.036.175-.071.264-.1s.207-.076.311-.112c.089-.031.177-.062.267-.091.106-.034.212-.065.319-.1.09-.026.178-.053.268-.077l.1-.025a10.522,10.522,0,0,0-2.711,4.4,14.255,14.255,0,0,1-2.907-1.118C932.643,411.845,932.655,411.83,932.667,411.818Zm-.61.683a14.742,14.742,0,0,0,3.22,1.281,22.017,22.017,0,0,0-.857,5.869h-5.087A11.853,11.853,0,0,1,932.057,412.5Zm0,15.15a11.859,11.859,0,0,1-2.724-7.151h5.087a22,22,0,0,0,.857,5.87A14.744,14.744,0,0,0,932.057,427.651Zm6.085,3.9c-.086-.021-.174-.05-.262-.076-.107-.031-.215-.063-.321-.1-.09-.029-.178-.06-.266-.091-.1-.036-.209-.073-.312-.113s-.176-.069-.263-.1l-.3-.128c-.086-.038-.172-.077-.258-.118s-.2-.094-.3-.143-.17-.085-.255-.131-.191-.1-.286-.158-.165-.1-.247-.145-.185-.114-.277-.173-.161-.1-.241-.157-.18-.125-.269-.189-.155-.111-.232-.17-.174-.134-.26-.2-.15-.119-.223-.18-.167-.144-.249-.217-.145-.128-.215-.193-.159-.154-.238-.231-.138-.134-.205-.2l-.036-.04a14.254,14.254,0,0,1,2.907-1.119,10.527,10.527,0,0,0,2.711,4.4C938.211,431.569,938.176,431.562,938.142,431.552Zm2.637.369c-1.816-.258-3.407-2.153-4.408-4.951a21.541,21.541,0,0,1,4.408-.519v5.469Zm0-6.318a22.338,22.338,0,0,0-4.675.557,21.214,21.214,0,0,1-.835-5.661h5.51v5.1Zm0-5.952h-5.51a21.214,21.214,0,0,1,.835-5.661,22.334,22.334,0,0,0,4.675.557Zm0-5.952a21.541,21.541,0,0,1-4.408-.519c1-2.8,2.593-4.693,4.408-4.951V413.7Zm9.57-1.2a11.854,11.854,0,0,1,2.724,7.151h-5.087a22.017,22.017,0,0,0-.857-5.869A14.765,14.765,0,0,0,950.349,412.5Zm-6.088-3.9c.089.022.178.05.266.076.107.031.215.063.321.1.09.029.178.06.266.091.1.036.209.073.312.113.088.034.175.069.262.1l.3.127c.086.038.173.077.258.118s.2.094.3.143c.085.042.169.085.254.131s.191.1.286.158.165.1.247.144.185.114.277.173.161.1.24.157.179.124.268.188.156.112.233.17.173.134.259.2.15.119.223.181.167.144.249.217.145.127.215.193.159.154.239.232.138.134.2.2l.037.039a14.231,14.231,0,0,1-2.907,1.119,10.53,10.53,0,0,0-2.715-4.4Zm-2.633-.369c1.815.258,3.407,2.153,4.408,4.951a21.571,21.571,0,0,1-4.408.519V408.23Zm0,6.318a22.325,22.325,0,0,0,4.674-.557,21.224,21.224,0,0,1,.836,5.661h-5.51Zm0,5.952h5.51a21.224,21.224,0,0,1-.836,5.661h0a22.329,22.329,0,0,0-4.674-.557Zm0,11.422v-5.469a21.541,21.541,0,0,1,4.408.519C945.034,429.769,943.443,431.663,941.627,431.921Zm8.111-3.588c-.067.069-.136.136-.2.2s-.158.156-.239.231-.143.128-.215.193-.164.146-.248.216-.15.122-.225.182-.17.136-.257.2-.156.115-.235.17-.176.128-.266.186-.161.107-.243.159-.182.115-.275.17l-.249.146q-.141.08-.283.157-.127.068-.254.132c-.1.049-.195.1-.293.142s-.173.08-.26.119l-.3.127c-.088.036-.175.071-.264.1-.1.04-.208.076-.312.112-.088.031-.176.062-.266.091-.106.034-.212.066-.32.1-.089.026-.178.052-.267.077l-.1.025a10.531,10.531,0,0,0,2.712-4.4,14.259,14.259,0,0,1,2.907,1.119C949.763,428.306,949.751,428.321,949.739,428.334Zm.61-.683a14.728,14.728,0,0,0-3.219-1.281,22.017,22.017,0,0,0,.857-5.87h5.087A11.854,11.854,0,0,1,950.349,427.651Z" transform="translate(-928.505 -407.348)" fill="#fff" />
                </g>
              </g>
            </svg>

            <div className="flex">
              <p style={{fontFamily:"Reg"}} className="inline ml-2 text-white">En</p>
              <svg style={{margin:"auto 1px auto 5px"}} xmlns="http://www.w3.org/2000/svg" width="11.086" height="6.339" viewBox="0 0 11.086 6.339">
                <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M11.733,15.674l4.192-4.2a.789.789,0,0,1,1.119,0,.8.8,0,0,1,0,1.122l-4.75,4.753a.791.791,0,0,1-1.093.023L6.419,12.6a.792.792,0,1,1,1.119-1.122Z" transform="translate(-6.188 -11.246)" fill="#fff" />
              </svg>


                <div className="DownMenu-lang">
                  {Lang.map((item, index) => (
                    <div key={index} className="DownMenu-lang__box"> 
                        <div className={`DownMenu-lang${index+1} BG`}/> <p>{item}</p>
                    </div>
                  ))}
                </div>
            </div>

          </div>
                  
          <Btn className={trigger ? "hidden":`Header__btn Header__btn${props.pageColor}`} />

        </div>

      </Container>
    </AppBar>
  );
};


export default Toolbar;

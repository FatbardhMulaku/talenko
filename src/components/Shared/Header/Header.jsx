import React, { Fragment } from "react";
import Toolbar from "./Toolbar";
/* import MobileMenu from "./MobileMenu/MobileMenu"; */
import { useToggle } from "../../../hook/useToggle";

const Header = (props) => {

 /*  const [isToggled, setToggled] = useToggle(false); */

  return (
    <Fragment>
        <Toolbar /* drawerToggle={setToggled} */ Bcolor={props.Bcolor}/>
        {/* <MobileMenu drawerToggle={setToggled} isToggled={isToggled} /> */}
    </Fragment>
  );
};

export default Header;

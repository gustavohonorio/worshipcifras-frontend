import React from "react";
import UserImage from "./UserImage";
import LogoNavbar from "./LogoNavbar";


const styles = {
    Margin: {
      marginTop: '30px',
      marginLeft: '30px',
      display: 'flex',
      alignItems: 'center',
      heigth: '100vh'
    },
  };

const NavbarTop = () => {
    return (
        <div style={styles.Margin}>
            <UserImage />
            <LogoNavbar />
        </div>
    );
};

export default NavbarTop;
import React, { Fragment, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styles from '../../Styles/Pages/SplashScreen.module.css';
import logo from '../../Assets/LogoG.png';

export default function SplashScreen() {

  let history = useHistory();

  useEffect(() => {
    setTimeout(() =>  history.push('/home'), 3000);
  }, []);

    return (
      <Fragment>
        <div className={styles.container}>
          <img 
           src={logo}
           alt="Trending Games"
         />
         <span></span>
        </div>
      </Fragment>
    );
  
};


import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7} justify="left">
            <img src={require("assets/img/about_us.jpeg")} alt="about_us"
              style={{
                width: '100%',
                height: 450,
                objectFit: 'cover',
                margin: 'auto',
              }}>
            </img>
          </GridItem>
          <GridItem xs={12} sm={12} md={5} style={{ margin: 'auto' }}>
            <div className={classes.typo} align="right" style={{ color: 'black' }}>
              <h2><b>ABOUT US</b></h2>
              <hr
                align="right"
                style={{
                  color: '#9c59ff',
                  backgroundColor: '#9c59ff',
                  height: 15,
                  width: '50%'
                }}
              />
              <h5>
                Quantitative Finance Club is a community that strives to promote the
                passion for quantitative trading amongst the wider student body in NTU.
                We hope to be the bridge that connects together bright minds in finance,
                statistics and computing in this multi-disciplinary field. We place
                emphasis on projects, with a tenacious desire to turn theory into reality.
              </h5>
            </div>

          </GridItem>
        </GridContainer>
      </div>
    </div >
  );
}

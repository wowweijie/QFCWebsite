import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Hidden from '@material-ui/core/Hidden';

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div>
            <Hidden mdDown>
                <Parallax image={require("assets/img/qfc_main.jpeg")}>
                    <div style={{ backgroundColor: "#80b5d1", height: "60%", width: "3%" }}>
                    </div>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <img src={require("assets/img/logo.jpeg")} className={classes.logo_img} alt="logo"></img>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
            </Hidden>
            <Hidden lgUp>
                <Parallax image={require("assets/img/qfc_main.jpeg")}>
                    <div style={{ backgroundColor: "#80b5d1", height: "60%", width: "3%" }}>
                    </div>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <img src={require("assets/img/logo.jpeg")} className={classes.logo_img} alt="logo" style={{ width: '90%' }}></img>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
            </Hidden>

        </div>
    );
}

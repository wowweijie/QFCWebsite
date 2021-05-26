import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/box"

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function ProjectSection() {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgFluid
    );
    return (
        <div className={classes.section} >
            <h1 style={{ color: '#9c59ff' }}><b>PROJECTS</b></h1>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={team1} alt="..." className={imageClasses} />
                            </GridItem>
                            <CardBody>
                                <Box border={3} borderRadius={16} borderColor="#9c59ff" style={{ width: '70%', display: 'block', margin: 'auto' }}>
                                    <h3 style={{ color: '#9c59ff' }}>
                                        <b>STARTUP CONFERENCE</b>
                                    </h3>
                                    <h4 style={{ color: 'black' }}>
                                        An annual national industry event
                                        <br />
                                        January 1, 2020, 9:00 a.m. to 5:00 p.m.
                                        <br />
                                        Conference Hall A, National Event Hall
                                    </h4>
                                </Box>

                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={team2} alt="..." className={imageClasses} />
                            </GridItem>

                            <CardBody>
                                <Box border={3} borderRadius={16} borderColor="#9c59ff" style={{ width: '70%', display: 'block', margin: 'auto' }}>
                                    <h3 style={{ color: '#9c59ff' }}>
                                        <b>DEVELOPERS MEETUP</b>
                                    </h3>
                                    <h4 style={{ color: 'black' }}>
                                        An annual national industry event
                                        <br />
                                        January 1, 2020, 9:00 a.m. to 5:00 p.m.
                                        <br />
                                        Conference Hall A, National Event Hall
                                    </h4>
                                </Box>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-linkedin"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={team3} alt="..." className={imageClasses} />
                            </GridItem>
                            <CardBody>
                                <Box border={3} borderRadius={16} borderColor="#9c59ff" style={{ width: '70%', display: 'block', margin: 'auto' }}>
                                    <h3 style={{ color: '#9c59ff' }}>
                                        <b>DESIGNERS HAPPY HOUR</b>
                                    </h3>
                                    <h4 style={{ color: 'black' }}>
                                        An annual national industry event
                                        <br />
                                        January 1, 2020, 9:00 a.m. to 5:00 p.m.
                                        <br />
                                        Conference Hall A, National Event Hall
                                    </h4>
                                </Box>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}

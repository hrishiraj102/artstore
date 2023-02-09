import { Box, Button, Grid, Typography } from "@mui/material";

import React, { useState } from "react";

import "./LandingCSS.css"



function Landing() {

    const [showText, setShowText] = useState(false);





    return (

        <Box

        >

            <Grid width="100%" height="810px" sx={{ backgroundColor: "#967e2c" }} >
                <Typography variant="h2" sx={{ fontSize: 100, paddingTop: 8, letterSpacing: "2px",fontFamily:"fantasy"}} className="h1Css" >
                    Arorai
                </Typography>

                <hr style={{ display: "blox", borderWidth: 0, color: "#dfdad5", marginTop: 10, opacity: 100, backgroundColor: "#dfdad5" }} />
                <Grid
                    item
                    xs={1}
                    sm={2}
                    sx={{
                        display: "flex",
                        flexDirection: "row",

                    }}
                >
                    <Grid sx={{ borderRight: "1px solid #dfdad5", mt: -2, mb:-2,width: "50%", overflow: "hidden", height: "610px" }} >

                        <img src="./artback1.jpeg" alt="astheticview" className="img1" />

                    </Grid>
                    <Grid sx={{ width: "50%" }} className={"container"}>

                        {
                            <Button variant="contained" sx={{ backgroundColor: "#C69749" }} display="flex" onClick={() =>
                                setShowText(!showText)

                            }>


                                <Typography variant="h4" className="bodytxt" marginTop="0px" letterSpacing="1px" fontSize="40px"> About Us</Typography>
                            </Button>
                        }

                        {showText &&

                            <Grid className={`component ${showText ? "show" : ""}`}>

                                <Typography variant="h6" className="bodytxt" sx={{ textAlign: "left", ml: 5, mt: 2, width: "90%", letterSpacing: "3px" }}> We are the group of painters from India. We have collections of varity of canvas which
                                    are painted by our club members. Our artist are famous for their masterpices in the country. This is our online art store. You can order from the collections we have for you. You can visit our place for more 
                                    arts and exhibition.
                                </Typography>
                            </Grid>




                        }

                    </Grid>
                </Grid>

            </Grid>




        </Box>















    )
}

export default Landing
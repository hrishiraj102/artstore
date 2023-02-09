import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Mapcontainer from './Mapcontainer';


function Footer() {


    return (
        <div>
            <Box sx={{ width: "100%", height: "100%", backgroundColor: "#967e2c" }}>
                <Container >
                    <Grid
                        container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{ display: "flex", flexDirection: "row" }}>


                        <Grid sx={{ borderRight: "1px solid #dfdad5", width: "50%", display: "flex", justifyContent: "start", flexDirection: "column" }}>
                            <Box sx={{ mt: 5 }}>
                                <Typography variant="h4" sx={{ fontWeight: "500", display: "flex", mb: 4, ml: 2, mr: 2, color: "#dfdad5" }}>
                                    Contact Us
                                </Typography>
                            </Box>

                            <form style={{ display: "flex", justifyContent: "left", flexDirection: "column", flexWrap: "wrap" }}>
                                <TextField id="outlined-basic" label="Your Name" sx={{ backgroundColor: "#F5F2E7", width: 400, ml: 2, mr: 2, borderRadius: "5px", mb: 4, }} variant="outlined" size="small" />
                                <TextField id="outlined-basic" type="email" label="Your E-mail ID" sx={{ backgroundColor: "#F5F2E7", width: 400, ml: 2, mr: 2, mb: 4, borderRadius: "5px" }} variant="outlined" size="small" />
                                <TextField id="outlined-basic" type="number" label="Contact Number" sx={{ backgroundColor: "#F5F2E7", width: 400, ml: 2, mr: 2, mb: 4, borderRadius: "5px" }} variant="outlined" size="small" />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={5}

                                    sx={{ backgroundColor: "#F5F2E7", width: 400, ml: 2, mr: 2, mb: 4, borderRadius: "5px" }}
                                />




                                <Button variant="contained" onClick={() => window.alert("Will available soon")} sx={{ backgroundColor: "#5B8FB9", width: 150, borderRadius: "5px", ml: 2, mr: 2, mb: 3 }}>Send</Button>


                            </form>

                        </Grid>

                        <Grid sx={{ width: "50%", display: "flex", flexWrap: "wrap", justifyContent: "start", flexDirection: "column" }}>
                            <Typography variant="h4" sx={{ fontWeight: "500", display: "flex", mb: 1, ml: 3, mr: 2, mt: 6, color: "#dfdad5" }}>
                                Address -
                            </Typography>

                            <Typography variant="h6" sx={{ fontWeight: "500", display: "flex", ml: 3, mr: 2, color: "#dfdad5", textAlign: "left" }}>
                                Jalandhar, Punjab, India, Pincode - 144411. <br />Contact no - 832xx3xx21 Email ID - hrishiraj102@gmail.com
                            </Typography>


                            <Grid sx={{ml:3,mt:2}}>
                        <Mapcontainer/>
                        </Grid>




                        </Grid>
                        




                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Footer;
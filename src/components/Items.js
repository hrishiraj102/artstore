import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./ItemsCSS.css"
import productsData from "./artStore.json";
import GalleryComponent from "./GalleryComponent";









function Items() {


  
    const [showgallery,setGallery] =  useState(false)

   
    

    const Product = ({ name, artist, price, image }) => (
        <Box style={{ display: "flex", width: "400", height: "500", padding: 20, flexDirection: "column" }}>
            <img src={image} alt={name} style={{ width: "300px", height: "400px" }} />

            <Typography variant="h5" fontSize="24px" letterSpacing={1} className="producttxt" color="grey" sx={{ mt: 2 }}>
                {name}
            </Typography>
            <Typography variant="h6" fontSize="18px" letterSpacing={-.5} className="producttxt" color="white">
                By {artist}
            </Typography>

            <Typography variant="body1" className="producttxt">
                Price - {price}
            </Typography>





        </Box>


    )

    const ProductList = () => {
        const [products, setProducts] = useState([]);

        useEffect(() => {
            setProducts(productsData.products)      //Here .products is important as our element name is products in the json folder
        }, []);

        return (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", flexDirection: "row", padding: 20 }}>
                {
                    products.map((product) => (
                        <Product
                            key={product.id}
                            name={product.pname}
                            artist={product.artist}
                            price={product.price}
                            image={product.link}
                        />

                    ))}

            </div>
        );
    };






    return (
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "#dfdad5" }}>
            <Container >
                <Grid
                    container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Typography variant="h3" sx={{ fontWeight: 300, fontSize: 80, paddingTop: 8, letterSpacing: "2px", display: "flex", justifyContent: "center" }} className="proh3" >
                        Our Products
                    </Typography>



                </Grid>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <ProductList />


                </Grid>
                <Button  variant="outlined" onClick={()=> setGallery(!showgallery) } sx={{mb:2}}> Gallery

                </Button>

            </Container>
            <Grid>
                {showgallery &&
                    <Grid sx={{display:"flex",justifyContent:"center"}}>
                        {GalleryComponent()}
                    </Grid>
                }
            </Grid>
        </Box>

    )

}

export default Items
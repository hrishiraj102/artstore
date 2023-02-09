import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import productsData from "./artStore.json"

function GalleryComponent() {


    const Photo = ({ image, name }) => (
        <Box style={{ display: "flex", width: "350px", height: "450px", padding: 20, flexDirection: "column" }}   >
            <img src={image} alt={name} style={{ width: "300px", height: "400px", padding: "10px" }} />


        </Box>

    )

    const PhotoList = () => {
        const [getPhoto, setPhotos] = useState([]);

        useEffect(() => {
            setPhotos(productsData.photos)
        }, []);

        return (
            <Grid style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", flexDirection: "row", padding: 20 }}>
                {
                    getPhoto.map((photo) => (
                        <Photo
                            key={photo.id}
                            name={photo.imgname}
                            image={photo.link}
                        />

                    ))}
            </Grid>
        )
    }

    return (
        <Grid sx={{ width: "95%" }}>
            <Typography variant="h5" sx={{ fontWeight: 300, fontSize: 50, paddingTop: 8, letterSpacing: "2px", display: "flex", justifyContent: "center" }} className="proh3" >
                Best Selling
            </Typography>
            <PhotoList />
        </Grid>
    )
}

export default GalleryComponent;
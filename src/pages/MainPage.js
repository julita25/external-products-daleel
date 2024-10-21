import React, { useState } from 'react'
import {Box, Button, Typography} from "@mui/material"
import { toast } from 'react-toastify';
import ProductsService from '../services/ProductsService';

const failureToast = (msg) => {
    toast(msg, {
      type: "error", position: "top-center",  closeButton: false
    });
  };

const MainPage = () => {
  const [products, setProducts] = useState()
  const fetchExternalProducts = async (params) => {
    console.log("params", params)
        try {
          const response = await ProductsService.getProducts({ params });
          setProducts(response);
        } catch (err) {
          if (!err.message) {
            throw err;
          }
          failureToast(`Error loading user products  ${err.msg}`);
        }
      };

  const handleClick = () => {
     fetchExternalProducts({location: "BH", queryParams: "cl"})
  }

  return (
    <Box sx={{display: "flex", flexDirection: "column",alignItems: "center", height: "80%", justifyContent:"center", p:4, gap: "50px"}}>
      <Typography sx={{fontSize: "24px", fontWeight:"500"}}>Distribution partners</Typography>
      <Button variant="contained" onClick={handleClick}>Call products</Button>
    </Box>
  )
}

export default MainPage
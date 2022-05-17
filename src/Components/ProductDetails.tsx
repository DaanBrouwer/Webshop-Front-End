import {
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../Models/product";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https:localhost:5001/api/Products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={"https://picsum.photos/200"}
            alt={product?.name}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{product?.name}</Typography>
          <Divider />
          <Typography variant="h4">€{product?.price}</Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{product?.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{product?.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product?.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stock</TableCell>
                  <TableCell>{product?.stock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button size="small">Add to Cart</Button>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetails;

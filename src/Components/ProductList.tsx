import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../Models/product";
import Productcard from "./Productcard";
import agent from "../agent";

export default function ProductList() {
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.ProductList.list().then((products) => setproducts(products));
  }, []);

  return (
    <div>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <Productcard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

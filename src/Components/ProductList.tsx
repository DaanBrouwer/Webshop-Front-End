import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../Models/product";
import Productcard from "./Productcard";

export default function ProductList() {
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/Products").then((response) =>
      response.json().then((data) => setproducts(data))
    );
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

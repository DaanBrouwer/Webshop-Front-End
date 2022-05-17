import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Product } from "../Models/product";

interface Props {
  product: Product;
}

function Productcard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="test2">
            R
          </Avatar>
        }
        title="test2"
      />

      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: 140,
            backgroundSize: "contain",
            bgcolor: "primary.light",
          }}
          image="https://picsum.photos/200"
          alt="green iguana"
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button component={Link} to={`/products/${product.id}`} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Productcard;

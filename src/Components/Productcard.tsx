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
          image={product.brand}
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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Productcard;

import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const images = {
    "Standard SSL": "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
    "Wildcard SSL": "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/44957d35-8edb-43cf-b518-457ff48a7e16/Product-grid-WDS.jpg",
    "Domain - .com": "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/4626b5ac-8ac0-4e88-ae38-dd94cb12a89d/Product-grid-Email.jpg",
    "Domain - .org":   "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/3b91b99f-57eb-44bd-b2e1-1cfd6529bbfb/feat-ols-your-store-your-way.jpg?impolicy=cms-feature-module",
    "Domain - .co": "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/8f679b96-df22-41fc-afd8-854d47a1c634/Product-grid-Hosting.jpg"
  }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

function CartItem({ product_id, name, id, image_url, price, quantity, onRemoveFromCart }) {
  
  const removeFromCart = () => {
    onRemoveFromCart(id, product_id)
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
            className={classes.cover}
            >
            <img style={{ width: "100%", height: "150px"}} src={images[name]}/>
        </CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h5">{quantity} x ${price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={removeFromCart} color="primary">Remove from cart</Button>
        </CardActions>
      </div>
    </Card>
  );
}

{/* <ListItem>
<ListItemText primary={item.name} secondary={`\$${item.price}`}/>
<ListItemSecondaryAction>
  <IconButton edge="end" aria-label="delete" onClick={this.deleteItem(item.id)}>
    <DeleteIcon />
  </IconButton>
</ListItemSecondaryAction>
</ListItem> */}


export default CartItem;
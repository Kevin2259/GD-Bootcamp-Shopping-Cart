import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import Cart from '../components/Cart'
import { Container, Typography } from '@material-ui/core'

export const CartPage = () => (
  <Container>
    <Head title='Cart'/>
    <div style={{"padding-bottom": "10px"}}>
        <Typography variant="h3">My Cart</Typography>   
    </div>
    <div style={{"padding-bottom": "20px"}}>
      <Link href="/shop">
        <a>Back to shop</a>
      </Link>
    </div>
    <Cart />
  </Container>
);

export default CartPage;
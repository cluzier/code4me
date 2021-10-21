import React from 'react';
import {Typography, Button, Card, CardActions, CardContent} from '@material-ui/core';

import useStyles from './cartItemsStyles';

const CartItem = ({item, handleUpdateCartQty, handleRemoveFromCart}) => {
    const styles = useStyles();
    return (
        <Card>
            <CardContent className={styles.cardContent} >
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <div className={styles.buttons}>
                    <Button type="button" size="small"onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity} </Typography>
                    <Button type="button" size="small"onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => {handleRemoveFromCart(item.id)}}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem

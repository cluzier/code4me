import React from 'react'
import {Card, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './productStyles';

function Product({product, onAddToCart}) {
    const styles = useStyles();

    //console.log(product);

    return (
        <Card className={styles.root}>
            <CardContent>
                <div className={styles.cardContent}>
                    <Typography variant="h5" gutterBottom>{product.name}</Typography>
                    <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={styles.cardActions}>
                <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)} > <AddShoppingCart /> </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product

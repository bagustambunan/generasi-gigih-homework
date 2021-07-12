import React from 'react';
import data from '../data/data_playlist';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  export default function Playlist() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image={data.album.images[0].url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {data.album.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Artist: {data.album.artists[0].name}
                <br/>
                Album: {data.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Select
          </Button>
        </CardActions>
      </Card>
    );
  }
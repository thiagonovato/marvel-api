import React, { Component } from "react";
import PropTypes from "prop-types";

// Importação Styles
import styles from "./Styles";

// Importação Material UI
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

class CardUI extends Component {
  render() {
    const { classes, hero } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={() => this.props.handleOpen(hero)}>
          <CardMedia
            className={classes.cardMedia}
            image={hero.thumbnail.path + "." + hero.thumbnail.extension}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {hero.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

CardUI.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardUI);

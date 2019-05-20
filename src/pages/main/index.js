import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as HeroActions } from "../../store/ducks/hero";

// Importação Material UI
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Modal from "@material-ui/core/Modal";

// Importação Styles
import styles from "./Styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class Main extends Component {
  state = {
    open: false,
    hero: []
  };

  componentDidMount() {
    this.props.getHeroRequest();
  }

  handleOpen = hero => {
    this.setState({ open: true, hero });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, hero } = this.props;
    return (
      <div className={classes.layout}>
        <Grid container className={classes.gridTitle}>
          <Typography variant="h6">
            {hero.loading ? "Carregando..." : "Heróis"}
          </Typography>
        </Grid>
        <Grid container spacing={40}>
          {!hero.loading &&
            hero.data.map(data =>
              data.data.results.map((hero, key) => (
                <Grid item xs={6} sm={3} key={key}>
                  <Card className={classes.card}>
                    <CardActionArea onClick={() => this.handleOpen(hero)}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={
                          hero.thumbnail.path + "." + hero.thumbnail.extension
                        }
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {hero.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            )}
        </Grid>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {this.state.hero.name}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  hero: state.hero
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HeroActions, dispatch);

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as HeroActions } from "../../store/ducks/hero";

// Importação Material UI
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Importação de Componentes
import CardUI from "../../components/Card";
import ModalUI from "../../components/Modal";

// Importação Styles
import styles from "./Styles";

class Main extends Component {
  state = {
    open: false,
    hero: []
  };

  componentDidMount() {
    this.props.getHeroRequest();
  }

  maisHero = () => {
    this.props.getMoreHeroRequest(this.props.hero.count, 20);
  };

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
        <Grid container spacing={40} justify="center" alignItems="center">
          {!hero.loading &&
            hero.data.map(data =>
              data.data.results.map((hero, key) => (
                <Grid item xs={6} sm={3} key={key}>
                  <CardUI
                    hero={hero}
                    handleOpen={() => this.handleOpen(hero)}
                  />
                </Grid>
              ))
            )}
        </Grid>
        <Grid container spacing={24}>
          {!hero.loading && (
            <Grid item xs>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.maisHero}
                disabled={hero.loadingMore}
              >
                {hero.loadingMore ? "Carregando..." : "Ver mais"}
              </Button>
            </Grid>
          )}
        </Grid>
        <ModalUI
          actionOpen={this.state.open}
          actionClose={this.handleClose}
          hero={this.state.hero}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  hero: state.hero,
  count: state.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HeroActions, dispatch);

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

// Importação Styles
import styles from "./Styles";

// Importação de Utilitários
import Color from "../../utils/Color";

// Importação Componentes
import Bars from "../Barras";

// Importação Material UI
import ArrowUp from "@material-ui/icons/KeyboardArrowUp";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class Tabela extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid
          container
          className={classes.demo}
          justify="center"
          spacing={16}
          alignItems="center"
        >
          teste
        </Grid>
      </Grid>
    );
  }
}

Tabela.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  hero: state.hero
});

export default withStyles(styles)(connect(mapStateToProps)(Tabela));

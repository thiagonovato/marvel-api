import React, { Component } from "react";
import PropTypes from "prop-types";

// Importação Styles
import styles from "./Styles";

// Importação Material UI
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

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

class ModalUI extends Component {
  render() {
    const { classes, hero } = this.props;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.actionOpen}
        onClose={this.props.actionClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          {!!hero.thumbnail && (
            <img
              src={hero.thumbnail.path + "." + hero.thumbnail.extension}
              alt="Imagem"
              width={200}
            />
          )}
          <Typography variant="caption">ID: {hero.id}</Typography>
          <Typography variant="h6" id="modal-title">
            Nome: {hero.name}
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            <strong>Descrição:</strong> {hero.description}
            <Typography variant="body1">
              <strong>Qtde. de Quadrinhos: </strong>
              {hero.comics
                ? hero.comics.available
                  ? hero.comics.available
                  : "Sem informação"
                : "Não tem quadrinhos"}
            </Typography>
            <Typography variant="body1">
              <strong>Qtde. de Séries: </strong>
              {hero.series
                ? hero.series.available
                  ? hero.series.available
                  : "Sem informação"
                : "Não tem séries"}
            </Typography>
            <Typography variant="body1">
              <strong>Qtde. de Stories: </strong>
              {hero.stories
                ? hero.stories.available
                  ? hero.stories.available
                  : "Sem informação"
                : "Não tem stories"}
            </Typography>
          </Typography>
        </div>
      </Modal>
    );
  }
}

ModalUI.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ModalUI);

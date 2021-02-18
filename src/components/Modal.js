import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { GameContext } from "../context/GameContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Bilbo",
    fontSize: "1.5em",
    letterSpacing: 3,
    textAlign: "center",
    minWidth: 320,

    "& h2": {
      fontSize: "2em",
      margin: 0,
      color: "#fff",
    },
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    background: `linear-gradient(
      135deg,
      rgba(2, 0, 36, 0.9318277652858018) 0%,
      rgba(10, 25, 54, 0.8321078773306197) 48%,
      rgba(52, 124, 182, 0.834908997778799) 100%
    )`,
    boxShadow: theme.shadows[8],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 15,
    outline: "none",
  },
  characterName: {
    fontSize: "1.1em",
    fontWeight: "bold",
    color: "#fff",

    "& span": {
      color: 'greenyellow'
    }
  },
  button: {
    fontFamily: "Bilbo",
    fontSize: "0.8em",
    fontWeight: "bold",
    marginTop: 20,
  },
}));

const ModalWindow = () => {
  const classes = useStyles();
  const {
    state: { openModal: open, isChallengeComplete, characterName },
    dispatch,
  } = useContext(GameContext);

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
    dispatch({ type: "RESET_CHALLENGE" });
    dispatch({ type: "REMOVE_CHARACTER_NAME" });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableBackdropClick
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {isChallengeComplete ? (
              <h2 id="transition-modal-title">Challenge Completed!!!</h2>
            ) : (
              <>
                <h2>Sorry!</h2>
                <p className={classes.characterName}>
                  <span>{characterName}</span> was clicked twice
                </p>
              </>
            )}
            <Button
              className={classes.button}
              onClick={handleClose}
              variant="contained"
              color="primary"
            >
              Play again
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalWindow;
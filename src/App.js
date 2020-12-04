import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import background from "./assets/images/background.jpg";
import ImagesContainer from "./containers/ImagesContainer";

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(
      135deg,
      rgba(2, 0, 36, 0.7318277652858018) 0%,
      rgba(10, 25, 54, 0.4321078773306197) 48%,
      rgba(52, 124, 182, 0.434908997778799) 100%
    ), url(${background}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100%",
    transition: "all 0.5s",
  },
});

function App() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    const loaderElement = document.querySelector(".loader");
    if (loaderElement) {
      const img = new Image();
      img.src = background;
      img.onload = function () {
        setLoaded(true);
        loaderElement.remove();
      };
    }
  }, []);
  const classes = useStyles();
  return (
    loaded && (
      <div className={classes.root}>
        <ImagesContainer />
      </div>
    )
  );
}

export default App;

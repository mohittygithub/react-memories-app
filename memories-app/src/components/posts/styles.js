import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    margin: "25px 0",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "25px 0",
    margin: "0 5rem",
  },
}));

export default useStyles;

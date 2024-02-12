import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      html: {
        backgroundColor: "#ff0000", // red color
      },
    },
  })
);

export default useStyles;

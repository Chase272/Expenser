import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      html: {
        backgroundColor: "#yellow", // red color
      },
    },
  })
);

export default useStyles;

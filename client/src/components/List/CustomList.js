import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const CustomList = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => {
              props.history.push("/addproductform");
              if (isTabletOrMobile) props.handleDrawerToggle();
            }}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Product" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Expired Products" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => {
              props.history.push("/expired");
              if (isTabletOrMobile) props.handleDrawerToggle();
            }}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Out of stock" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => {
              props.history.push("/editproduct");
              if (isTabletOrMobile) props.handleDrawerToggle();
            }}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Update" />
          </ListItem>
        </List>

        <List
          component="div"
          disablePadding
          onClick={() => {
            props.history.push("/editproduct");
            if (isTabletOrMobile) props.handleDrawerToggle();
          }}
        >
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};
export default withRouter(CustomList);

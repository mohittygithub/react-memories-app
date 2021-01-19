import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import useStyles from "./styles";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Post from "./post/Post";
import Form from "../form/Form";

const Posts = (props) => {
  const classes = useStyles();
  const state = useSelector((state) => state.memoryReducer.state);
  console.log(state);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Memories
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <div className={classes.cards}>
          {state.map((memory) => {
            return (
              <Post
                key={memory._id}
                id={memory._id}
                title={memory.title}
                message={memory.message}
                creator={memory.creator}
                createdAt={memory.createdAt}
                image={memory.selectedFile}
              />
            );
          })}
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({ memories: state.memoryReducer.data });
export default Posts;

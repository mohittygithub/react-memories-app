import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMemories } from "../../redux/actionTypes";
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
          {props.memories.map((memory) =>
            memory.map((mem) => {
              return (
                <Post
                  key={mem._id}
                  id={mem._id}
                  title={mem.title}
                  message={mem.message}
                  creator={mem.creator}
                  createdAt={mem.createdAt}
                  image={mem.selectedFile}
                />
              );
            })
          )}
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ memories: state.memoryReducer.data });
export default connect(mapStateToProps)(Posts);

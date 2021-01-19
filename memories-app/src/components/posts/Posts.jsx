import React from "react";
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

const Posts = () => {
  const classes = useStyles();
  const memories = useSelector((state) => state.memories.data);
  console.log(memories);

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
          {memories ? (
            memories.map((memory) => (
              <Post
                key={memory._id}
                id={memory._id}
                title={memory.title}
                message={memory.message}
                creator={memory.creator}
                createdAt={memory.createdAt}
                image={memory.selectedFile}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Posts;

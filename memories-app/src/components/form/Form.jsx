import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createMemory } from "../../redux/actionTypes";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(postData);
    postData.creator
      ? dispatch(createMemory(postData))
      : alert("Please provide creator name and select an image to upload");
    clear();
  };
  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Creating a memory</Typography>
          <TextField
            name="creator"
            label="Creator"
            variant="outlined"
            fullWidth
            required
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            value={postData.message}
            fullWidth
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            label="Tags"
            variant="outlined"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              required
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            className={classes.buttonSubmit}
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
            onClick={clear}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};
export default Form;

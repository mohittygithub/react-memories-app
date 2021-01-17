import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMemories } from "./redux/actionTypes";
import axios from "axios";
import Posts from "./components/posts/Posts";
import { fetchFromServer } from "./redux/actionTypes";

const App = (props) => {
  useEffect(() => {
    let response;
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        response = res.data;
        props.dispatch(fetchFromServer(response));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Posts />
    </>
  );
};
const mapStateToProps = (state) => ({ memories: state.memoryReducer.data });
export default connect(mapStateToProps)(App);

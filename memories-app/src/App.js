import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMemories } from "./redux/actionTypes";
import axios from "axios";
import Posts from "./components/posts/Posts";
import { fetchFromServer } from "./redux/actionTypes";

const App = (props) => {
  let response = [];
  const fetchData = async () => {
    response = await axios.get("http://localhost:5000/posts");

    // response = response.data;
    console.log(response.data);
    props.dispatch(fetchFromServer(response.data));
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Posts />
    </>
  );
};
// const mapStateToProps = (state) => ({ memories: state.memoryReducer.data });
export default connect()(App);

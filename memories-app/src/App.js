import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Posts from "./components/posts/Posts";
import { setStoreState } from "./redux/actionTypes";

const App = (props) => {
  const fetchData = async () => {
    let fetchData = await axios.get("http://localhost:5000/posts");

    props.dispatch(setStoreState(fetchData.data));
    console.log(fetchData.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Posts />
    </>
  );
};
export default connect()(App);

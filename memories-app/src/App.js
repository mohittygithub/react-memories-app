import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Posts from './components/posts/Posts'
// import _ from "lodash";
import { fetchMemoryRequest } from './redux/actionTypes'

const App = () => {
  const dispatch = useDispatch()
  // const memories = useSelector((state) => state.memories.data)

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = () => {
    dispatch(fetchMemoryRequest())
  }
  // const showData = () => {
  //   if (!_.isEmpty(memories.data)) return <p>Data Arrived</p>;
  //   if (memories.loading) return <p>Loading...</p>;
  //   if (memories.error !== "") return <p>{memories.error}</p>;

  //   return <p>Unable to get data</p>;
  // };

  return <>{<Posts />}</>
}
export default App

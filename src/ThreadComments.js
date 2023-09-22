import { useState, useEffect } from "react";
import "./main.css";
import Axios from "axios";
// import useTitles from "./useTitles";

function ThreadComments() {
const [comments, setComments] = useState([]);
useEffect(() => {
  Axios.get("http://localhost:3000/api/get/comments").then((response) => {
    setComments(response.data);
  });
}, []);
return {
  comments
}
}
export default ThreadComments;

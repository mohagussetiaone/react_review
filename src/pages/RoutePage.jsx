import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RoutePage() {
  // state
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // function
  const getPost = async () => {
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  // comp life cycle
  useEffect(() => {
    getPost()
      .then((res) => {
        console.info(res);
        setPost(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  // validation
  if (loading) {
    return <div>Loading Please Wait</div>;
  }
  return (
    <div className="App">
      <h1>Detail Page</h1>
      {post.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <p>{e.body}</p>
        </div>
      ))}
    </div>
  );
}

import React, { Component, useEffect, useState } from "react";

// export default class CompLifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "Moh Agus Setiawan",
//     };
//   }
//   handleChange = () => {
//     this.setState({
//       username: "Agus bae",
//     });
//   };

//   // comp did mount
//   componentDidMount() {
//     console.info("Component Sudah dimounting");
//   }

//   // comp did update
//   componentDidUpdate() {
//     console.info("ada component telah diupdate");
//   }

//   // comp akan dicopot
//   componentWillUnmount() {
//     console.info("Good Bye");
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Comp Life Cycle</h1>
//         <p>{this.state.username}</p>
//         <button onClick={this.handleChange}>Change</button>
//       </div>
//     );
//   }
// }

export default function CompLifeCycle() {
  // state
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [post, setPost] = useState([]);
  // function getpost
  const getPost = async () => {
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`, {
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

  // function handleShow
  const handleShow = () => {
    setShow(!show);
  };

  // next page
  const nextPage = () => {
    setPage(page + 1);
  };

  // prev page
  const prevPage = () => {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  };

  // comp did mount
  useEffect(() => {
    console.info("component terlihat di web");
    getPost()
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  //   // comp did mount 2
  //   useEffect(() => {
  //     console.info("state show telah diupdate");
  //   }, [show]);

  return (
    <div className="App">
      <h1>Component Life Cycle</h1>
      {show ? <h3>Moh Agus Setiawan</h3> : null}
      <button onClick={handleShow}>Show or Hide</button>
      {post.map((e) => (
        <div key={e.id}>
          <h3>
            {e.id}.{e.title}
          </h3>
          <p>{e.body}</p>
        </div>
      ))}
      <div>
        <button onClick={prevPage}>Prev</button>
        {page}
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

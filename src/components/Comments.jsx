import { useEffect, useState } from "react";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  //   console.log(props.imdbId);

  const retriveComments = async () => {
    try {
      let res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.imdbId}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MThjZGEyNDc4ZDAwMTNhMDU4NjciLCJpYXQiOjE2NzU5NTg5NjMsImV4cCI6MTY3NzE2ODU2M30.Q1jX-HShMVTgkyRHM4th05_jV0PN_rkjeroFWeC2A1M",
          },
        }
      );
      if (res.ok) {
        const body = await res.json();
        console.log(body);
        setComments(body);
      } else {
        console.log("Error in fetch1: response status ", res.status);
      }
    } catch (error) {
      console.log("Error in fetch2: ", error);
    }
  };

  useEffect(() => {
    retriveComments();
  }, []);

  return (
    <>
      <h2 className="mt-4">Comments:</h2>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <div>
              <span>{comment.author} ha scritto: </span>
              <span>{comment.comment}</span>
            </div>
          );
        })
      ) : (
        <span>no comments yet</span>
      )}
    </>
  );
};

export default Comments;

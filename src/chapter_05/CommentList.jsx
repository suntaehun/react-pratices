import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "선태헌1",
        comment: "안녕1",
    },
    {
        name: "선태헌2",
        comment: "안녕2",
    },
    {
        name: "선태헌3",
        comment: "안녕3",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
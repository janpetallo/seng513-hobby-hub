import "./Comments.scss";
import Comment from "../comment/Comment.jsx";

const Comments = () => {
    // Temporary Comment Data
    const comments = [
        {
            id: 1,
            message: "Wow nice car",
            username: "F8X Fan",
            userId: 10,
            likes: 1001,
            dislikes: 3,
        },
        {
            id: 2,
            message: "Looks good!",
            username: "Bob",
            userId: 11,
            likes: 23,
            dislikes: 0,
        },
    ];


    return <div className="Comments">
        {comments.map(comment=>(
            <Comment comment = {comment} key = {comment.id} />
        ))}
        </div>;
};

export default Comments;
import "./posts.scss";
import Post from "../post/Post.jsx";

const Posts = () =>{
    // Temporary data
    const posts = [
        {
            id: 1,
            hubName: "Bimmers",
            postTitle:"BMW M2 on Ramps",
            postOwner: "M2 Guy",
            userId: 1,
            desc:"Last Wash before winter storage :( ",
            img:"https://i.imgur.com/1tll26I.jpeg"
        },

        {
            id: 2,
            hubName: "Bimmers",
            postTitle:"Posing for the cameras",
            postOwner: "M2 Guy",
            userId: 1,
            desc:"Took her out for a nice drive",
            img:"https://i.imgur.com/uGYk8k9.jpeg"
        },

    ];




    return <div className = "posts">
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
        </div>;
};

export default Posts;
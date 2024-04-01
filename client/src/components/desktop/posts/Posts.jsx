import "./posts.scss";
import Post from "../post/Post.jsx";

const Posts = ({hubTitle}) =>{
    // Temporary data
    const posts = [
        {
            id: 1,
            hubName: "Bimmers",
            postTitle:"BMW M2 on Ramps",
            postOwner: "M2 Guy",
            userId: 1,
            desc:"Last Wash before winter storage :( ",
            img:["https://i.imgur.com/1tll26I.jpeg"],
            likes: 1000,
            dislikes: 0,
            comments: 15,
        },

        {
            id: 2,
            hubName: "Bimmers",
            postTitle:"Posing for the cameras",
            postOwner: "M2 Guy",
            userId: 1,
            desc:"Took her out for a nice drive",
            img:["https://i.imgur.com/uGYk8k9.jpeg"],
            likes: 302,
            dislikes: 0,
            comments: 87,
        },

        {
            id: 3,
            hubName: "Bimmers",
            postTitle:"Photos of My M2",
            postOwner: "M2 Guy",
            userId: 1,
            desc:"All of the Photos I took of my M2 this year ",
            img:["https://i.imgur.com/1tll26I.jpeg", "https://i.imgur.com/uGYk8k9.jpeg"],
            likes: 873,
            dislikes: 2,
            comments: 7,
        },

    ];




    return <div className = "posts">
        {posts.map(post=>(
            <Post post={post}  hubTitle={hubTitle} key={post.id}/>
        ))}
        </div>;
};

export default Posts;

// Todo: make carousel fixed size

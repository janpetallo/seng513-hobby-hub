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

        {
            id: 4,
            hubName: "Bimmers",
            postTitle:"M2 Description",
            postOwner: "M2 Guy",
            userId: 1,
            desc: "The BMW M2 is a version of the BMW 2 Series automobile developed by BMW's motorsport" +
                " division, BMW M GmbH. As the 2 Series replaced the 1 Series coupé and convertible models, the first-generation" +
                " M2 was marketed as the most basic M model in the range. The first-generation M2 used the F8x chassis" +
                " from the M3/M4, codenamed F87 and featured the BMW N55 series engine, while its successors, the M2" +
                " Competition and M2 CS, featured a twin-turbocharged engine developed by BMW M GmbH (S55 engine). The" +
                " BMW M2 is a version of the BMW 2 Series automobile developed by BMW's motorsport division, BMW M GmbH." +
                " As the 2 Series replaced the 1 Series coupé and convertible models, the first-generation M2 was marketed" +
                " as the most basic M model in the range. The first-generation M2 used the F8x chassis from the M3/M4," +
                " codenamed F87 and featured the BMW N55 series engine, while its successors, the M2 Competition and M2" +
                " CS, featured a twin-turbocharged engine developed by BMW M GmbH (S55 engine). The BMW M2 is a version" +
                " of the BMW 2 Series automobile developed by BMW's motorsport division, BMW M GmbH. As the 2 Series replaced" +
                " the 1 Series coupé and convertible models, the first-generation M2 was marketed as the most basic M model in" +
                " the range. The first-generation M2 used the F8x chassis from the M3/M4, codenamed F87 and featured the BMW" +
                "N55 series engine, while its successors, the M2 Competition and M2 CS, featured a twin-turbocharged engine " +
                "developed by BMW M GmbH (S55 engine). The BMW M2 is a version of the BMW 2 Series automobile developed by " +
                "BMW's motorsport division, BMW M GmbH. As the 2 Series replaced the 1 Series coupé and convertible models, " +
                "the first-generation M2 was marketed as the most basic M model in the range. The first-generation M2 used " +
                "the F8x chassis from the M3/M4, codenamed F87 and featured the BMW N55 series engine, while its successors, " +
                "the M2 Competition and M2 CS, featured a twin-turbocharged engine developed by BMW M GmbH (S55 engine). " +
                " The BMW M2 is a version of the BMW 2 Series automobile developed by BMW's motorsport" +
                " division, BMW M GmbH. As the 2 Series replaced the 1 Series coupé and convertible models, the first-generation" +
                " M2 was marketed as the most basic M model in the range. The first-generation M2 used the F8x chassis" +
                " from the M3/M4, codenamed F87 and featured the BMW N55 series engine, while its successors, the M2" +
                " Competition and M2 CS, featured a twin-turbocharged engine developed by BMW M GmbH (S55 engine). The" +
                " BMW M2 is a version of the BMW 2 Series automobile developed by BMW's motorsport division, BMW M GmbH." +
                " As the 2 Series replaced the 1 Series coupé and convertible models, the first-generation M2 was marketed" +
                " as the most basic M model in the range. The first-generation M2 used the F8x chassis from the M3/M4," +
                " codenamed F87 and featured the BMW N55 series engine, while its successors, the M2 Competition and M2" +
                " CS, featured a twin-turbocharged engine developed by BMW M GmbH (S55 engine). The BMW M2 is a version" +
                " of the BMW 2 Series automobile developed by BMW's motorsport division, BMW M GmbH. As the 2 Series replaced" +
                " the 1 Series coupé and convertible models, the first-generation M2 was marketed as the most basic M model in" +
                " the range. The first-generation M2 used the F8x chassis from the M3/M4, codenamed F87 and featured the BMW" +
                "N55 series engine, while its successors, the M2 Competition and M2 CS, featured a twin-turbocharged engine " +
                "developed by BMW M GmbH (S55 engine). The BMW M2 is a version of the BMW 2 Series automobile developed by " +
                "BMW's motorsport division, BMW M GmbH. As the 2 Series replaced the 1 Series coupé and convertible models, " +
                "the first-generation M2 was marketed as the most basic M model in the range. The first-generation M2 used " +
                "the F8x chassis from the M3/M4, codenamed F87 and featured the BMW N55 series engine, while its successors, " +
                "the M2 Competition and M2 CS, featured a twin-turbocharged engine developed by BMW M GmbH (S55 engine). ",
            img:["https://i.imgur.com/1tll26I.jpeg", "https://i.imgur.com/uGYk8k9.jpeg"],
            likes: 873,
            dislikes: 2,
            comments: 7,
        },




    return <div className = "posts">
        {posts.map(post=>(
            <Post hubTitle={hubTitle} post={post} isPopup={false} key={post.id}/>
        ))}
        </div>;
};

export default Posts;

// Todo: make carousel fixed size

import "./post.scss"

const Post = ({ post }) => {
    return (
        <div className = "post">
            <div className="postContainer">

                <div className="postHeading">
                    <div className="hubName">
                       Hub: {post.hubName}
                    </div>
                    <div className="postTitle">
                        {post.postTitle}
                    </div>
                </div>

                <div className="content">
                    <img src={post.img} alt="Image can't be loaded"/>
                    <p className = "postOwner"> <strong>By: </strong> {post.postOwner}</p>
                    <p className = "postDescription"> {post.desc} </p>

                </div>

                <div className="info"></div>

            </div>
        </div>
    );
};


export default Post
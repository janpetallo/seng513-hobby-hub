import React, {useEffect, useState} from "react";
import "./ItemCards.scss";
import ItemCard from "../itemcard/ItemCard.jsx";
import newRequest from "../../../utilities/newRequest.js";

const ItemCards = ({allPosts=true}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // Function to fetch all marketplace posts and update state
        const fetchMarketPlacePosts = async () => {
            try {
                if(allPosts){
                const response = await newRequest.get("marketPlacePosts/getAllMarketPlacePosts");
                    setItems(response.data);

                // get all the user's specific item posts
                }else {
                    // get currentUser
                    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

                    // get the user data
                    const response = await newRequest.get(`/users/getUser/${currentUser._id}`);
                    if (response.status === 200) {
                        // get the user's post id's
                        const userMarketPosts = response.data.marketPosts;

                        // now we try to get the market posts associated with all of the market post id's
                        try {
                            const response2 = await newRequest.get(`/marketPlacePosts/getMarketPostsByIds?marketPostIDs=${userMarketPosts.join(',')}`);
                            setItems(response2.data);

                        } catch (error) {
                            console.log("Error getting all market posts");
                        }

                    } else {
                        console.log("Error getting user data from server");
                    }

                }
            } catch (error) {
                console.error("Error fetching marketplace posts:", error);
            }
        };

        // Call the fetchMarketPlacePosts function upon component loading
        fetchMarketPlacePosts();
    }, []); // Empty dependency array to ensure the effect runs only once on component mount



    return(
        <>
            <div className="item-card-wrapper">
                {/* Map over the data array */}
                {items.map(item => (
                    // Render the ItemComponent for each item in the array
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>
        </>
    )
}
export default ItemCards

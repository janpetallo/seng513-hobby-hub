import React, {useState, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import "./MyHubs.scss"
import newRequest from "../../utilities/newRequest.js";

const MyHubs = () => {

    const navigate = useNavigate();
    // get all hubs from backend
    const [hubs, setHubs] = useState([]);

    useEffect(() => {

        // Function to fetch all posts from backend API server
        const fetchHubs = async () => {
            try {
                const response = await newRequest.get("/hubs/getAllHubs");
                if (response.status !== 200) {
                    throw new Error("Failed to fetch hubs");
                }
                const hubsData = response.data;
                // filter out the hubs that are not the current user's
                const currentUser = JSON.parse(localStorage.getItem("currentUser"));
                const userHubs = hubsData.filter(hub => hub.hubOwner === currentUser._id);

                // in categories
                const categories = {};
                userHubs.forEach(hub => {
                    if (!categories[hub.category]) {
                        categories[hub.category] = [];
                    }
                    categories[hub.category].push(hub);
                });
                const categoriesArray = Object.keys(categories).map(category => ({
                    name: category,
                    hubs: categories[category]
                }));
                setHubs(categoriesArray);
                console.log(hubs);
            } catch (error) {
                console.error(error);
            }
        };
        // Call fetchHubs function when component mounts
        fetchHubs();
    }, []); 

    // const username = "BimmerGuy";
    const username = JSON.parse(localStorage.getItem("currentUser")).username;

    const handleClick = (hubName) => {
        navigate('/hubs', { state: { hub: hubName } });
    };

    return (
        <Container className="pt-2 ps-5 pe-5 pb-3">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="pt-2 ps-2 pe-2">{username}'s Hubs</h1>
                <h6 className="ps-2 pe-2!">View all your hubs here!</h6>
            </div>
            <hr/>
            {/* {categories.map((category, i) => (
                <Row key={i} className="ps-3 pe-3 section-bold">
                    {category.name}
                    <Row>
                        {category.hubs.map((hub, index) => (
                            <Col xs={4.5} sm={4} md={3.5} lg={3} key={index} className="col-container my-2 me-4 p-2">
                                <div className="text-center ">
                                    <Link className='hub-card-link' to={`/${hub.replace(' ', '')}`}>
                                        {hub}
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Row>
            ))} */}
            {hubs.map((hub, i) => (
                    <Row key={i} className="section-font">
                        {hub.name}
                        <Row>
                            {hub.hubs.map((hub, index) => (
                            <Col xs={4.5} sm={4} md={3.5} lg={3} className="col-container my-2 me-4 p-3">
                                <div className="text-center ">
                                    <div className="Myhub-selection-text-center"  onClick={() => handleClick(hub.hubName)}>
                                        {hub.hubName}
                                    </div>
                                </div>
                            </Col>
                            ))}
                        </Row>
                    </Row>
                ))}
        </Container>
        
    )
}

export default MyHubs

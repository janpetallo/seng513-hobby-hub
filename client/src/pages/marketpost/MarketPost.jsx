import React, {useEffect, useState} from "react";
import "./MarketPost.scss"
import {Button, FloatingLabel, Form} from "react-bootstrap";
import RichTextEditor from "../../components/TextEditor/RichTextEditor.jsx";
import ImageDropzone from "../../components/imagedropzone/ImageDropzone.jsx";
import UseGoBack from "../../utilities/UseGoBack/UseGoBack.jsx";
import {MdCancelPresentation} from "react-icons/md";
import {BiSend} from "react-icons/bi";
import HubsCategoryToggle from "../../components/HubsCategoryToggle/HubsCategoryToggle.jsx";
import ConditionToggle from "../../components/ConditionToggle/ConditionToggle.jsx";
import {useNavigate} from "react-router-dom";


const MarketPost = () => {
    // navigation hook
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);

    const [selectedCategoryO, setSelectedCategoryO] = useState(null); // this one is the item category
    const [categoryError, setCategoryError] = useState(false);

    const [selectedConditionO, setSelectedConditionO] = useState(null); // this one is item condition
    const [conditionError, setConditionError] = useState(false);

    const [marketPostTitle, setMarketPostTitle] = useState(''); // market post title
    const [price, setPrice] = useState(''); // market post price
    const[location, setLocation] = useState(""); // market post location



    // to get the market post title
    const handleTitleChange = (event) => {
        setMarketPostTitle(event.target.value);
    };

    // to get the price
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    // to get the location
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || selectedConditionO === null || selectedCategoryO === null) {
            event.preventDefault();
            event.stopPropagation();
            if(selectedConditionO === null){
                setConditionError(true);
            }

            if(selectedCategoryO === null){
                setCategoryError(true);
            }
        }

        if(selectedConditionO !== null) {setConditionError(false);}

        if(selectedCategoryO !== null) {setCategoryError(false);}

        setValidated(true);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategoryO(category)
    };


    return (
        <Form className="p-3 market-post-form" noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
                className="mb-3"
                controlId="floating-title"
                label="Title"
                onChange={handleTitleChange}
            >
                <Form.Control
                    className="market-post-field"
                    type="text"
                    placeholder=""
                    name="Title"
                    required
                />
                <Form.Control.Feedback type="invalid">Post needs a title!</Form.Control.Feedback>
            </FloatingLabel>

            {/* Default price of 0 in case they dont want to put a price then they can write contact seller */}
            <FloatingLabel
                className="mb-3"
                controlId="floating-price"
                label="Price"
                onChange={handlePriceChange}
            >
                <Form.Control
                    className="market-post-field"
                    type="text"
                    placeholder=""
                    name="Price"
                />
            </FloatingLabel>

            <FloatingLabel
                className="mb-3"
                controlId="floating-Location"
                label="Location"
                onChange={handleLocationChange}
            >
                <Form.Control
                    className="market-post-field"
                    type="text"
                    placeholder=""
                    name="Location"
                />
            </FloatingLabel>

            <FloatingLabel
                className="mb-3"
                controlId="floating-contact"
                label={`Email: ${JSON.parse(localStorage.getItem("currentUser")).email}`}
            >
                <Form.Control
                    className="market-post-field"
                    type="email"
                    placeholder=""
                    name="email"
                    disabled={true}
                />

            </FloatingLabel>

            <FloatingLabel
                className="mb-3"
                controlId="floating-contact"
                label={`Phone: ${JSON.parse(localStorage.getItem("currentUser")).phone}`}
            >
                <Form.Control
                    className="market-post-field"
                    type="phone"
                    placeholder=""
                    name="phone"
                    disabled={true}
                />
            </FloatingLabel>

            <div className="mb-3">
                Item Category
                <HubsCategoryToggle onCategorySelect={handleCategorySelect}/>
                {categoryError && (
                    <Form.Text className="text-danger">
                        Category cannot be empty
                    </Form.Text>
                )}
            </div>

            <div className="mb-3">
                Item Condition
                <ConditionToggle setSelectedConditionO={setSelectedConditionO}/>
                {conditionError && (
                    <Form.Text className="text-danger">
                        Condition cannot be empty
                    </Form.Text>
                )}
            </div>

            <ImageDropzone/>

            <RichTextEditor/>

            <div className="d-flex justify-content-center flex-wrap mt-3">
                <Button className="market-post-btn" variant="secondary" onClick={UseGoBack()}>
                    <MdCancelPresentation/> Cancel
                </Button>

                <Button className="market-post-btn" variant="HHPurple" type="submit">
                    <BiSend/> Post
                </Button>
            </div>
        </Form>
    )
}

export default MarketPost
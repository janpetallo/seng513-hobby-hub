import React, {useState} from "react";
import "./MarketPost.scss"
import {Button, FloatingLabel, Form} from "react-bootstrap";
import RichTextEditor from "../../components/TextEditor/RichTextEditor.jsx";
import ImageDropzone from "../../components/imagedropzone/ImageDropzone.jsx";
import UseGoBack from "../../utilities/UseGoBack/UseGoBack.jsx";
import {MdCancelPresentation} from "react-icons/md";
import {BiSend} from "react-icons/bi";
import HubsCategoryToggle from "../../components/HubsCategoryToggle/HubsCategoryToggle.jsx";
import ConditionToggle from "../../components/ConditionToggle/ConditionToggle.jsx";

const MarketPost = () => {
    const [validated, setValidated] = useState(false);

    const [selectedCategoryO, setSelectedCategoryO] = useState(null);
    const [categoryError, setCategoryError] = useState(false);

    const [selectedConditionO, setSelectedConditionO] = useState(null);
    const [conditionError, setConditionError] = useState(false);

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
                label="Email"
            >
                <Form.Control
                    className="market-post-field"
                    type="email"
                    placeholder=""
                    name="email"
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
import React, {useState} from "react";
import "./CustomizeHub.scss"
import {Button, FloatingLabel, Form, Tab, Tabs} from "react-bootstrap";
import RichTextEditor from "../TextEditor/RichTextEditor.jsx";
import {Link, useNavigate} from "react-router-dom";
import HubsCategoryToggle from "../HubsCategoryToggle/HubsCategoryToggle.jsx";
import newRequest from "../../utilities/newRequest.js";

const CustomizeHub = () => {
    // navigation hook
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [rules, setRules] = useState("");
    const [resources, setResources] = useState("");
    const [activeTab, setActiveTab] = useState(0);
    const [hubName, setHubName] = useState('');
    const [hubNameError, setHubNameError] = useState('')
    const [hubVisibility, setHubVisibility] = useState('public'); // Default to public
    const [category, setCategory] = useState("");

    // to get the text from the rich text editor
    const handleDescChange = (content) => {
            setDescription(content);
    };

    const handleRuleChange = (content) => {
        setRules(content);
    };

    const handleResourceChange = (content) => {
        setResources(content);
    };

    const handleInputChange = (e) => {
        setHubName(e.target.value);
    };


    const handleNextTab = async () => {
        if (activeTab === 0) {
            if (hubName.length > 18) {
                setHubNameError('Hub name cannot exceed 18 characters.');
            } else if (hubName.length <=0){
                setHubNameError('Hub name cannot be empty.');
            } else {

                // get user data from local storage
                const currentUser = JSON.parse(localStorage.getItem("currentUser"));
                // Check if user is logged in
                if (!currentUser) {
                    // Redirect user to login page or display a message
                    console.log("User is not logged in. Redirecting to login page...");
                    navigate("/");
                    return;
                }

                try {
                    // Make a request to check if the hub name is valid
                    const response = await newRequest.post('/hubs/checkValidHubName', {
                        hubName: hubName,
                        userID: currentUser._id,
                    });

                    if (response.status === 200) {
                        // Hub name is valid, proceed to the next tab
                        setHubNameError('');
                        setActiveTab(activeTab + 1);
                    }
                } catch (error) {
                    // Handle error if the hub name is not valid
                    if (error.response && error.response.status === 400) {
                        setHubNameError('Hub name already exists.');
                    } else {
                        console.error('Error:', error);
                    }
                }
            }
        } else {
            setActiveTab(activeTab + 1); // change tabs
        }
    };

    const handlePrevTab = () => {
        setActiveTab(prevTab => prevTab - 1);
    };

    const handleHubVisibilityChange = (e) => {
        setHubVisibility(e.target.value);
    };

    const handleCategorySelect = (category) => {
        setCategory(category)
    };


    const handleCreate = async () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        console.log(description);
        console.log(rules);
        console.log(resources);
        console.log(category);
        console.log(hubName);

        const hubData = {
            userName: currentUser.userName,
            userID: currentUser._id,
            hubOwner: currentUser._id,
            members: currentUser._id,
            moderators: currentUser._id,
            hubName: hubName,
            visibility: hubVisibility,
            description: description,
            rules: rules,
            resources: resources,
            category: category,
        };

        try {
            // create hub
            const response = await newRequest.post('/hubs/createHub', hubData);
            if (response.status === 201) {


                // Hub created successfully, redirect to hubs page
                navigate('/hubs', { state: { hub: hubName } });
            }
        } catch (error) {
            console.error('Error creating hub:', error);
        }
    };



    return (
        <div className="customize-hub-wrapper">
            <Tabs
                activeKey={activeTab}
                onSelect={setActiveTab}
                className="mb-3 customize-hub-tabs"
                fill
                variant="pills"
            >

                <Tab eventKey={0} title="Hub Name" disabled={true}>
                    <Form className="hub-name">
                        <h5>Enter a name for your hub:</h5>
                        <FloatingLabel
                            controlId="floating-hubname"
                            label="Name"
                        >
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="hubname"
                                className="border-HHPurple"
                                value={hubName}
                                onChange={handleInputChange}
                                isInvalid={hubNameError !== ''}
                            />
                            <Form.Control.Feedback type="invalid">
                                {hubNameError}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <hr/>

                        <h5>Pick the category your hub belongs to:</h5>
                        <HubsCategoryToggle onCategorySelect={handleCategorySelect}/>

                        <hr/>

                        <Form.Group>
                            <h5>Pick your hub type:</h5>
                            <Form.Check className="custom-radio"
                                        type="radio"
                                        id="publicHub"
                                        label={<span><strong>Public Hub</strong><span> Anyone can view, post, and comment. Share your hub to the world!</span></span>}
                                        name="hubType"
                                        value="public"
                                        checked={hubVisibility === 'public'}
                                        onChange={handleHubVisibilityChange}
                            />

                            <Form.Check className="custom-radio"
                                        type="radio"
                                        id="privateHub"
                                        label={<><strong>Private Hub</strong><span> Only approved users can enter. Only those worthy shall pass!</span></>}
                                        name="hubType"
                                        value="private"
                                        checked={hubVisibility === 'private'}
                                        onChange={handleHubVisibilityChange}
                            />
                        </Form.Group>
                    </Form>
                </Tab>

                <Tab eventKey={1} title="Description" disabled={true}>
                    <div className="d-flex flex-column tab-editor ">
                        <h5>Give a description for your hub:</h5>
                        <RichTextEditor onTextContentChange={handleDescChange}/>
                    </div>
                </Tab>

                <Tab eventKey={2} title="Rules" disabled={true}>
                    <div className="d-flex flex-column tab-editor ">
                        <h5>List any rules below:</h5>
                        <RichTextEditor onTextContentChange={handleRuleChange}/>
                    </div>
                </Tab>

                <Tab eventKey={3} title="Resources" disabled={true}>
                    <div className="d-flex flex-column tab-editor ">
                        <h5>List any resources below:</h5>
                        <RichTextEditor onTextContentChange={handleResourceChange}/>
                    </div>
                </Tab>

            </Tabs>
            <div className="d-flex justify-content-end mt-3 mb-3">
                {activeTab > 0 && (
                    <Button className='customize-hub-btn' onClick={handlePrevTab} variant="secondary">
                        Back
                    </Button>
                )}

                {activeTab < 3 ? (
                    <Button onClick={handleNextTab} variant="HHPurple" className="ms-2 customize-hub-btn">
                        Next
                    </Button>
                ) : (
                    // This needs to go to the specific hub idk what the link is going to be yet
                    <Link to="/hubs">
                        <Button variant="HHPurple" className="ms-2 customize-hub-btn" onClick={handleCreate}>
                            Create
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default CustomizeHub


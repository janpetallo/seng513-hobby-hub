import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CommunitySelection.scss';

function CreateHubPageMobile() {
    const [hubName, setHubName] = useState('');
    const navigate = useNavigate();

    const handleCreate = () => {
        // Add function to create a hub here
        // After creating the hub, you can redirect back to the previous page
        navigate(-1);
    }

    return (
        <div className="create-hub-page">
            <div id="create-hub-mobile">Create a New Hub</div>
            <Form>
                <Form.Group controlId="formHubName">
                    <Form.Label id="hub-label-mobile">Hub Name</Form.Label>
                    <Form.Control id="create-form-control-mobile" type="text" placeholder="Enter hub name" value={hubName} onChange={e => setHubName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label id="hub-label-mobile" className="create-form-label">Type</Form.Label>
                    <Form.Check className="custom-radio radio-mobile" type="radio" id="publicHub" label={<><strong>Public Hub</strong><span> Anyone can view, post, and comment. Share your hub to the world!</span></>} name="hubType" />
                    <Form.Check className="custom-radio radio-mobile" type="radio" id="privateHub" label={<><strong>Private Hub</strong><span> Only approved users can enter. Only those worthy shall pass!</span></>} name="hubType" />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button id="cancel-button" onClick={() => navigate(-1)}>
                        Cancel
                    </Button>
                    <Button id="create-button" onClick={handleCreate}>
                        Create Hub
                    </Button>
                </div>
            </Form>
        </div>
    );
}


export default CreateHubPageMobile;
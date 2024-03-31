import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useLocation } from 'react-router-dom';
import './CommunitySelection.scss';

function CreateHubPageMobile() {
    const [hubName, setHubName] = useState('');
    const isMobile = useMediaQuery({ query: '(max-width: 575px)' });
    const navigate = useNavigate();
    const location = useLocation();

    const [isHubNameTooLong, setIsHubNameTooLong] = useState(false);

    useEffect(() => {
        setIsHubNameTooLong(hubName.length == 18);
    }, [hubName]);

    useEffect(() => {
        if (!isMobile && location.pathname === '/create-hub') {
            navigate('/community-selection', { state: { openModal: true } });
        }
    }, [isMobile, navigate, location.pathname]);


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
                    <Form.Control id="create-form-control-mobile" type="text" placeholder="Enter hub name" maxLength={18} value={hubName} onChange={e => setHubName(e.target.value)} />
                                {isHubNameTooLong && <Form.Text className="text-danger">Hub name cannot exceed 18 characters</Form.Text>}
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
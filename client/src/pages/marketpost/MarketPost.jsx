import React from "react";
import "./MarketPost.scss"
import {Button, FloatingLabel, Form} from "react-bootstrap";
import RichTextEditor from "../../components/TextEditor/RichTextEditor.jsx";
import ImageDropzone from "../../components/imagedropzone/ImageDropzone.jsx";
import UseGoBack from "../../utilities/UseGoBack/UseGoBack.jsx";

const MarketPost = () => {

  return (
      <Form className="p-3 market-post-form">
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
          </FloatingLabel>

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
                  required
              />
          </FloatingLabel>

          <FloatingLabel
              className="mb-3"
              controlId="floating-condition"
              label="Condition"
          >
              <Form.Control
                  className="market-post-field"
                  type="text"
                  placeholder=""
                  name="Condition"
                  required
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
                  required
              />
          </FloatingLabel>

          <FloatingLabel
              className="mb-3"
              controlId="floating-contact"
              label="Contact"
          >
              <Form.Control
                  className="market-post-field"
                  type="text"
                  placeholder=""
                  name="Contact"
                  required
              />
          </FloatingLabel>


          <FloatingLabel
              className="mb-3"
              controlId="floating-tag"
              label="Tag"
          >
              <Form.Control
                  className="market-post-field"
                  type="text"
                  placeholder=""
                  name="Tag"
              />
          </FloatingLabel>

          <ImageDropzone/>

          <RichTextEditor/>

          <div className="d-flex justify-content-center flex-wrap mt-3">
              <Button className="market-post-btn" variant="secondary" onClick={UseGoBack()}>
                  Cancel
              </Button>

              <Button className="market-post-btn" variant="HHPurple" type="submit">
                  Post
              </Button>
          </div>
      </Form>
  )
}

export default MarketPost
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResizableBox } from 'react-resizable'; 
import 'react-resizable/css/styles.css';
import './homepage.css'; // You can create this CSS file for styling
import image from "./../../assets/img/profile-avatar.png";


export default function Homepage() {

  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setProfileImage(URL.createObjectURL(file));
    } else {
      setProfileImage(null);
    }
  };


  return (
    <div>
      <div className="profile-page d-flex justify-content-center align-items-center">

        <div className="profile">
        
      <header className="profile-header">
        <h1>Set Profile</h1>
        {/* Wrap the profile image in a resizable box */}
        <div className="image-section d-flex flex-column text-center justify-content-center align-items-center">
        
          <img
            src={profileImage || image}
            alt="Profile"
            height="150px"
            className="profile-image"
          />
        
        <Button variant="outline-dark" className='m-3 change-button' onClick={handleShow}>
        Select Profile Picture
        </Button>
        </div>
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
    

          <div className="profile-name d-flex  flex-row justify-content-center align-items-center">
            <input type='name' className='name-input' placeholder='enter your name' />
            <Button type="submit" variant='outline-dark' >Submit</Button>
          </div>

        </div>
      </div>
    </div>
  );
}

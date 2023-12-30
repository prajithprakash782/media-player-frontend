import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { uploadALllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [video , setVideo] = useState({
        id:"",
        caption:"",
        url:"",
        embedLink:""
    })
    console.log(video);
    const handleChange =(e)=>{
        const {name,value} = e.target
        setVideo({...video,[name]:value})
    }
    const embedVideoLink =(e)=>{
        const {value}=e.target
        const link = `https://www.youtube.com/embed/${value.slice(-11)}`
        setVideo({...video,embedLink:link})
    }
    const handleUpload = async()=>{
        const{id,caption,url,embedLink} = video
        if(!id||!caption||!url||!embedLink){
            toast.warning('Please fill the form completely')
        }
        else{
           const response = await uploadALllVideo(video)
           console.log(response);
           if(response.status>=200 && response.status<300){
            toast.success(`${response.data.caption} is successfully uploaded`)
            //making the state value none(to make the form blank from start)
            setVideo({
                id:"",
                caption:"",
                url:"",
                embedLink:""
            })
            setUploadVideoStatus(response.data)
            handleClose()
           }
           else{
            console.log(response);
            toast.error('Something went wrong. Try again later')
           }
            
        }
    }
    return (
        <>
            <div className='d-flex align-items-center'>
                <h5>Uplaod New Video</h5>
                <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i> Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the form </p>
                    <form className='border border-secondary rounded p-3'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control name={'id'} value={video.id} onChange={handleChange} type="email" placeholder="Enter Video id" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control name={'caption'} value={video.caption} onChange={handleChange} type="email" placeholder="Enter Video Caption" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control name={'url'} value={video.url} onChange={handleChange} type="email" placeholder="Enter Video Image Url" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control name={'embedLink'} value={video.embedLink} onChange={embedVideoLink} type="email" placeholder="Enter Youtube Video Link" />
                            
                        </Form.Group>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} className='btn btn-warning' variant="primary">Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
        </>


    )
}

export default Add
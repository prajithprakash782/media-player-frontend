import React from 'react'
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addWatchHistory, deleteVideo } from '../services/allAPI';



function VideoCard({ displayVideo,setDeleteStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const {caption ,embedLink} = displayVideo
    const today =new Date()
    const timeStamp =  new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    console.log(timeStamp);

    const videoDetails ={
      caption,
      embedLink,
      timeStamp
    }
    await addWatchHistory(videoDetails)
  
  };

  const removeVideo =async(id)=>{
    const response = await deleteVideo(id)
    console.log(response);
    setDeleteStatus(true)
  }

  const dragStated =(e,id)=>{
    console.log(`card no ${id} started dragging`);
    // console.log(e);
    e.dataTransfer.setData("videoID",id)
  }
  return (
    <>
      <Card className='mb-5' style={{ width: '100%', height: '350px' }} draggable onDragStart={(e)=>dragStated(e,displayVideo?.id)}>
        <Card.Img onClick={handleShow} style={{ height: '270px' }} variant="top" src={displayVideo.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>{displayVideo.caption}</h6>
            <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>

          </Card.Title>

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="498" src={`${displayVideo.embedLink}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        </Modal.Body>

      </Modal>

    </>
  )
}

export default VideoCard
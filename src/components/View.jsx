import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getALllVideo } from '../services/allAPI'

function View({uploadVideoStatus}) {

const [allVideo , setVideo] = useState([])

const [deleteVideoStatus , setDeleteStatus] = useState(false)

  const getAllUploadedVideo = async()=>{
    const {data} = await getALllVideo()
    // console.log(data);
    setVideo(data)
  }
  console.log(allVideo);
   useEffect(()=>{
    getAllUploadedVideo()
    setDeleteStatus(false)
   },[uploadVideoStatus,deleteVideoStatus])
  return (
    <>
    <Row>
      {allVideo.length>0?
      allVideo?.map((video)=>
        (<Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayVideo = {video} setDeleteStatus={setDeleteStatus}/>
      
      </Col>)):
      <p>Nothing to Display</p>
      }
    </Row>
    </>
  )
}

export default View
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getCategory, updateCategory } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [allCategory,setAllCategory] = useState([])
  const[deletelistcategory, setdeletelistcategory]= useState(false)
  const [category ,setCategory] =useState({
    id:"",
    categoryname:"",
    allVideos:[]
  })

  const handleChange = (e)=>{
    const {value} = e.target
    setCategory(value);
  }
  console.log(category);

  const handleSubmit = async ()=>{
    
    
    if(!category){
    toast.warning('Please fill the category name')
    }
    else{
      let body={
        category,
        allVideos:[]
      }
      //make api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category successfully added')
        //to make state null after addition
        setCategory("")
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went wrong.Please try again')
      }

    }
  }

  const getAllCategory =async()=>{
   const {data} = await getCategory()
   setAllCategory(data)

  }
  console.log(allCategory);

  useEffect(()=>{
    getAllCategory()
    setdeletelistcategory(false)
  },[category,deletelistcategory])

  const removeCatgeory= async(id)=>{
    const response =await deleteCategory(id)
    setdeletelistcategory(true)
  }

  const dragover =(e)=>{
    //this will prevent reload so that the data that we send from videocard.jsx wont be lost
    e.preventDefault()
    console.log("inside dragover");
  }

  const videoDrop = async(e,categoryId)=>{
    console.log(`dropped inside the category ${categoryId}`);
    const videos = e.dataTransfer.getData("videoID")
    console.log(videos);

    //api to get a particular video that is dragged
    const {data} = await getAVideo(videos)
    console.log(data);
    //to find the particular category with the specified id
    let selectedCategory = allCategory?.find((item)=>item.id===categoryId)
    console.log(selectedCategory);
    //data is added to the allvideos array in the particular category with the specified id
    selectedCategory.allVideos.push(data)

    await updateCategory(categoryId,selectedCategory)
    getCategory()
  }
  return (
    <>
      <div className="d-grid ms-3">

        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>


      </div>

      {
      allCategory?.length>0?
      allCategory.map((item)=>(<div className='m-5 border border-secondary rounded p-3'>

      <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,item.id)}>
        <h6>{item.category}</h6>
        <button  onClick={()=> removeCatgeory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>

      </div>
      <Row>
        <Col  sm={12}>
          {
          item.allVideos?.length>0?
        item.allVideos.map(card=>(<VideoCard displayVideo={card}/>)):
        <p>Nothing to Display</p>
      }
        </Col>
      </Row>

    </div>)):
    <p>Nothing to Display</p>
}
        

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil me-2 text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <form className='border border-secondary rounded p-3'>
             {/* <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control type="email" placeholder="Enter Category id" />

            </Form.Group>  */}

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Category Name</Form.Label>

              <Form.Control value={category.cname} onChange={handleChange} type="email" placeholder="Enter Category Name" />

            </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className='btn btn-warning' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Category
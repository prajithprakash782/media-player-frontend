import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getWatchHistory } from '../services/allAPI'

function WatchHistory() {
  const [allHistory , setHistory] = useState([])
  const getAllHistory =async()=>{
    const {data} = await getWatchHistory()
    setHistory(data)
  }
  console.log(allHistory);
  useEffect(()=>{
    getAllHistory()
  },[])

  const handleDelete =async(id)=>{
    await deleteHistory(id)
    getAllHistory()
  }
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'25px'}}><i class="fa-solid fa-arrow-left me-3"></i>Back to Home</Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
      allHistory.length>0?
      allHistory.map((item)=>(<tr>
        
        <td>{item.id}</td>
        <td>{item.caption}</td>
        <td><a href={item.embedLink}>{item.embedLink}</a></td>
        <td>{item.timeStamp}</td>
        <td><button onClick={()=>handleDelete(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
      
      </tr>))
        
        :<p>Nothing to Display</p>
      }
      </tbody>

    </table>
    </>
  )
}

export default WatchHistory
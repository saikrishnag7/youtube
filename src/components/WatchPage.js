import React from 'react'
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function WatchPage() {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(closeMenu())
    // eslint-disable-next-line 
  },[]);


  return (
    <div className ="flex">
    <div className ="px-2">
    <iframe width="1050" height="550" src={"https://www.youtube.com/embed/"+searchParam.get('v')} title="Mandey" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


   </div>
    

    </div>
    
  )
}

export default WatchPage
import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { searchsugg } from '../utils/constants';

const Head = () => {
  const [searchres ,setsearchres] = useState();
  const [sugg ,setSugg] = useState([]);
  const [showSuggestions ,setShowSuggestions] = useState(false);
  useEffect(() =>{
    const timer = setTimeout(() => getSearchSuggestions(),200);
  return ()=>{
      clearTimeout(timer);
  }


  },[searchres]);

  const dispatch = useDispatch();
 const  toggleHandler = () =>{
    dispatch(toggleMenu());

  };

  const getSearchSuggestions = async () =>{
    const data = await fetch(searchsugg+searchres);
    const json = await data.json();
    setSugg(json[1]);
    

  };

  return (
    <div className =" grid grid-flow-col p-2 m-2 shadow-lg">
      <div className ="flex space-x-2 col-span-1">
         <img alt ="ham" className ="h-4 pt-1 cursor-pointer" onClick = {() => toggleHandler()}src ="https://static-00.iconduck.com/assets.00/hamburger-menu-icon-512x385-ckt0hy0b.png"/>
         <img alt ="logo" className ="h-5 cursor-pointer" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"/>
    </div>
    <div className ="flex col-span-10 justify-center">
      <input type="text" className="h-9 w-1/2 rounded-l-2xl border border-gray-400" onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)}    value ={searchres} onChange={(e) => setsearchres(e.target.value)}placeholder='Search'></input>
      <button><img alt ="search" className = "h-9 border border-gray-400 rounded-r-2xl" src="https://t3.ftcdn.net/jpg/05/99/84/86/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg"/></button>
    </div>
    {showSuggestions && <div className ="fixed w-[38rem] py-2 px-4 mx-[32rem] mt-[37px]  bg-gray-100">
      <ul>
        {sugg.map((s) =>(
          <li className ="hover:bg-gray-300">{s}</li>
        ))}
      </ul>
    </div>}
    
    <div className = "col-span-1">
      <img alt ="user" className = "h-8" src ="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"/>
    </div>

    </div>
  )
}

export default Head
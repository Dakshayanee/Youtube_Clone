import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
//for search bar
  const[searchQuery,setSearchQuery] = useState("");
  const[suggestions ,setSuggestions] = useState([]);
  const[showSuggestions,setShowSuggestions] =useState(false);

  // to get access to cache
  const searchCache=useSelector(store => store.search)
//dispatch comes from useDispatch
   const dispatch=useDispatch();

//to make an api call-->every time search query changes make an api call
 useEffect(()=>{
  
  //if my search query present in my search cache show results other wise make an api call
  // and update the cache
   if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
   }else{
     getSearchSuggestion();
   }

   //every time my searchQuery changes this useEffect will call
  //make an api call after every key press
  //but if the diff bet 2 api calls is <200ms
  //decline the API call

  const timer=setTimeout(() => getSearchSuggestion(),200);
  return () =>{
    clearTimeout(timer);
  }
   },[searchQuery]);

//  key-Press 
//  -render the Component
//  -useEffect() will get call 
//  -start timer => make an api call after 200ms
//every time timer get created newly--> you need to clear the privious timer
//if again you press the key it will destroy the component( & call useEffect return method)

const getSearchSuggestion = async ()=>{
  const data=await fetch(YOUTUBE_SEARCH_API + searchQuery);
  const json = await data.json();
  console.log(json[1]);
   setSuggestions(json[1]);

   //to update the cache use dispatch and action
  //  send object in cacheResults
   dispatch(
     cacheResults({
       [searchQuery]:json[1],
   }))
}

  // toggleMenuHandler do dispatch and action
  //useDispatch is a hook coming from react-redux
 // const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch (toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2  h-20 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="w-8 h-8 cursor-pointer"
          alt="menu"
          src="https://img.icons8.com/ios-glyphs/60/menu--v1.png"
        />
        <a href="/">
        <img
          className="w-26 h-8 ml-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 p-2 bg-gray-100 rounded-r-full">
        🔍
        </button>
        </div>
        {showSuggestions && (
        <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;

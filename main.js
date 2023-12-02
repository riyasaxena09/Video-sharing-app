import youtubeapi from './api/youtubeapi'
import React, { useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router';
import Search from './components/Searchbar'
import Videolist from './components/Videolist'
import {Grid} from '@mui/material'
import Videodetails from './components/Videodetails'
function Main(){
    const nav=useNavigate();
    function out(){
        nav('/');
    }
  const [videos,setvideos]=useState([]);
  const [selectedvideo,setselectedvideo]=useState({id:{} ,snippet:{}})
  return (
    <div><div style={{display:"flex",justifyContent:"space-between"}}><h1 className='h'>Find Your Choice..</h1>
    <p className='log' style={{padding:"5px",fontSize:"20px",cursor:"pointer"}} onClick={out}>Logout</p></div>
      <Grid style={{justifyContent:"center"}} container spacing={10}>
        <Grid item xs={11}>
<Grid container spacing={10}>
<Grid item xs={12}>
<Search onSubmit={handlesubmit}></Search>
</Grid>
<Grid item xs={8}>
<Videodetails video={selectedvideo}></Videodetails>
</Grid>
<Grid item xs={4}>
<Videolist videos={videos} onVideoSelect={setselectedvideo}></Videolist>
</Grid>
</Grid>
        </Grid>
      </Grid>
    </div>

  )
  async function handlesubmit(searchterm){
const{data:{items:videos}}=await youtubeapi.get("search",{
params:{
  part:"snippet",
  maxResults:5,
key:"AIzaSyCv5ZEOWfpEuIQmtU26iJaT3zIhWYmogX0",
q: searchterm,
}
}
)
console.log(videos)
setvideos(videos);
setselectedvideo(videos[4]);
  }
}

export default Main;


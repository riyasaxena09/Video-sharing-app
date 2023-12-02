import { useState } from "react";
import { Paper } from "@mui/material";
import {TextField} from "@mui/material";
function Search({onSubmit}){
    const [searchterm,setSearch]=useState("");
    function submithandler(e){
        setSearch(e.target.value);
    }
    function onkeyPress(e){
if(e.key==="Enter"){
onSubmit(searchterm)
}
    }
    return(
        <>
        <Paper elevation={6} style={{padding:"25px"}} >
<TextField
fullWidth
label="search..."
value={searchterm}
onChange={submithandler}
onKeyPress={onkeyPress}
>
</TextField>
        </Paper>
        </>
    )
}
export default Search;
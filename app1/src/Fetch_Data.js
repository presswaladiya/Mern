import { useEffect, useState } from "react";
import axios from "axios";

function Fetch_Data() {
    const [p, setPost] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/view")
           
            .then((response) => response.json())
            .then((data)=>setPost(data.user))
            .catch((error) => console.error('Fetch error:', error));
    }, []);

    return (
        console.log(p)    
    )
}

export default Fetch_Data;

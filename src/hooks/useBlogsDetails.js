import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const useBlogsDetails = () => {
    const {blogID} = useParams()
    const [blogDetails, setProjectDetails] = useState([])
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`http://localhost:5000/blogs/${blogID}`)
      .then(res=>res.json())
      .then(data=>setProjectDetails(data))
      .finally(() => setSpinner(false));
    }, [blogID])

    return {
        blogDetails,
        spinner
    }
};

export default useBlogsDetails;
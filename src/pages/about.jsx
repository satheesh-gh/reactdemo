import { useEffect, useState } from "react"

function About() {
    const [about, setAbout]=useState(null)
    const [ab, setAb]=useState(null)
    const [error, setError] = useState(null);
    useEffect(()=>{
 fetch("http://localhost:31372/api/aboutus")
    .then(response=>response.json())
    .then(data=>{
        setAbout(data);
        setAb(data.AboutUs);
    })
    .catch(err => setError(err.message));
    },[]);
  return (
    <div>
      <h1>About Page </h1>
      <p>{about?.Message}</p>      
      <div dangerouslySetInnerHTML={{
    __html: ab?.Description
}} />
<div dangerouslySetInnerHTML={{
    __html: ab?.DescriptionAr
}} />
      
    </div>
  )
}

export default About
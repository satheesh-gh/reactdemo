import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"

function Ads() {

    const [ads, setAds]=useState(null)
    const [adsList, setAdsList]=useState(null)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/category");
    };
    useEffect(() => {
      async function fetchAds() {
        try {
          const response = await fetch("http://localhost:31372/api/ads/List", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          setAds(data);
          setAdsList(data.Ads);
        } catch (error) {
          console.error("Error fetching ads:", error);
        }
      }


      fetchAds();
      
    }, []);

  return (
    <div>
      <h1>Ads</h1>
      <p>Welcome to our ads page!</p>
      <button onClick={handleClick}>Go to category</button>
      <table border="1" align="center" cellPadding="10">
    <thead>
        <tr>
            <th>Id</th>
            <th>Image</th>
        </tr>
    </thead>

    <tbody>
        {adsList?.map(item => (
            <tr key={item.AdID}>
                <td>{item.AdID}</td>
                <td>
                    <img
                        src={ads.ImagePath+item.Image}
                        alt={item.AdID}
                        width="100%"
                    />
                </td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
  )
}

export default Ads
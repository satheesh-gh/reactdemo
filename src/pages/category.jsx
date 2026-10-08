import { useEffect, useState } from "react"

function Category() {
 const [category, setCategory]=useState(null)
 const [categoryList, setCategoryList]=useState(null)
 const [count, setCount]=useState(0)

    useEffect(()=>{
        fetch("http://localhost:31372/api/category/List", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response=>response.json())
    .then(data=>{
        setCategory(data);
        setCategoryList(data.CategoryList);
    })
    .catch(err => console.error("Error fetching category data:", err)); 
    },[count]);

    return(
        <div>
      <h1>Category</h1>
      <p>Welcome to our Category Page!</p>
        <p>Count: {count} </p>
      <table border="1" align="center" cellPadding="10">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
        </tr>
    </thead>

    <tbody>
        {categoryList?.map(item => (
            <tr key={item.CategoryID}>
                <td>{item.CategoryID}</td>
                <td>{item.Name}</td>
                <td>
                    <img
                        src={category.ImagePath + item.Image}
                        alt={item.Name}
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

export default Category

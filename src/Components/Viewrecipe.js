import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewrecipe = () => {
    var[recipelist,setrecipelist]=useState([])
    axios.get("http://localhost:4500/api/viewall").then((response)=>{
      console.log(response.data)
      setrecipelist(response.data.data)
    })
    const deleteapi=(id)=>{
      const data={"_id":id}
      console.log(data)
      axios.post("http://localhost:4500/api/delete",data).then((response)=>{
          if(response.data.status=="success")
          {
              alert("successfully deleted")
          }
          else
          {
              alert("error to delete")
          }
      })
  }
  return (
    <div> 
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                {recipelist.map((value,key)=>{
                  return <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card" >
 <center> <img style={{width:250,height:250}} src="https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA" className="card-img-top" alt="..."/></center>
 
    

  <div className="card-body">
    
     <p className="card-text"><b>Recipe Title:</b>{value.recipetitle}</p>
     <p className="card-text"><b>Recipe Category:</b>{value.category}</p>
     <p className="card-text"><b>Recipe Description:</b>{value.description}</p>
     <p className="card-text"><b>Prepared By:</b>{value.preparedby}</p>
     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteapi(value._id)}} className="btn btn-success">DELETE</button>

                </div>
   
  </div>
 
</div>
</div>})}        
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewrecipe
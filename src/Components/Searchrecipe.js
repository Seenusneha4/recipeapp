import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Searchrecipe = () => {
    const[data,setdata]=useState([{"category":"","description":"","preparedby":""}])
    var[recipetitle,setrecipetitle]=useState("")
    const subdata=()=>{
        const data={"recipetitle":recipetitle}
        console.log(data)
        axios.post("http://localhost:4500/api/search",data).then((response)=>{
            setdata(response.data.data)
        })
    }
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
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Recipe title</label>
                    <input onChange={(a)=>{setrecipetitle(a.target.value)}} type="text" className="form-control"/>
                </div>
               

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subdata} className="btn btn-success">SEARCH</button>

                </div>
            </div>
           {data.map((value,key)=>{
               return <div class="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
     Category<input type="text" value={value.category} className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
       Description <input type="text" value={value.description} className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      Prepared by  <input type="text" value={value.preparedby} className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteapi(value._id)}} className="btn btn-success">DELETE</button>

                </div>
</div>
})}

        </div>
    </div>
</div>



    </div>
  )
}

export default Searchrecipe
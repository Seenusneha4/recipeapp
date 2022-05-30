import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Addrecipe = () => {
    var[recipetitle,setrecipetitle]=useState("")
    var[category,setcategory]=useState("")
    var[description,setdescription]=useState("")
    var[preparedby,setpreparedby]=useState("")
    const subdata=()=>{
        const data={"recipetitle":recipetitle,"category":category,"description":description,"preparedby":preparedby}
        console.log(data)
        axios.post("http://localhost:4500/api/recipeapp",data).then((response)=>{
            if(response.data.status=="success")
            {
                alert("successfully inserted")
            }
            else
            {
                alert("failed")
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
                <label for="" className="form-label">Category</label>
                <select onChange={(a)=>{setcategory(a.target.value)}}  name="" id="" class="form-control">
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Non Vegetarian">Non Vegetarian</option>
                            
                        </select>

                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">Description</label>
                <textarea onChange={(a)=>{setdescription(a.target.value)}} name="" id="" cols="30" rows="10" class="form-control"></textarea>
               
            </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Prepared By</label>
                    <input onChange={(a)=>{setpreparedby(a.target.value)}} type="text" className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subdata} className="btn btn-success">SUBMIT</button>

                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addrecipe
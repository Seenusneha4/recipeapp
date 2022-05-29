import React from 'react'
import Header from './Header'

const Viewrecipe = () => {
    var recipelist=[{"recipetitle":"idili sambar",
    "category":"Vegetarian",
    "description":"tasty",
    "preparedby":"Aravindh",
    "img":"https://media.istockphoto.com/photos/idli-sambhar-picture-id1255831204?k=20&m=1255831204&s=612x612&w=0&h=A7KoIFQDfHLEZEJufS1BZ5Hee_Xt7JHkEBq0McMRN3k="},
    {"recipetitle":"porotta beef",
    "category":"Non vegetarian",
    "description":"delicious",
    "preparedby":"Alen",
    "img":"https://preview.redd.it/u9hfn7nn5c751.jpg?auto=webp&s=00ed9ae4aa1e090afe81019057db1b24c5c9150c"},
    {"recipetitle":"masala dosha",
    "category":"Vegetarian",
    "description":"yummy",
    "preparedby":"Aravindh",
    "img":"https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800"},
    {"recipetitle":"Biriyani",
    "category":"Non vegetarian",
    "description":"tasty",
    "preparedby":"Aravindh",
    "img":"https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900"},
    {"recipetitle":"chapathi vegcurry",
    "category":"Vegetarian",
    "description":"tasty",
    "preparedby":"Ajitha",
    "img":"https://www.yummyoyummy.com/wp-content/uploads/2013/12/Vegetable-mappas.jpg"}

]
  return (
    <div>
        <Header/>
        <div classNameName="container">
    <div classNameName="row">
        <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div classNameName="row g-3">
                {recipelist.map((value,key)=>{return<div className="card" >
 <center> <img style={{width:250,height:250}} src={value.img} className="card-img-top" alt="..."/></center>
 
    

  <div className="card-body">
    <center>
     <p className="card-text"><b>Recipe Title:</b>{value.recipetitle}</p>
     <p className="card-text"><b>Recipe Category:</b>{value.category}</p>
     <p className="card-text"><b>Recipe Description:</b>{value.description}</p>
     <p className="card-text"><b>Prepared By:</b>{value.preparedby}</p>
    
    </center>
  </div>
 
</div>

})}        
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewrecipe
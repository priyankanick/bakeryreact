import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Page2 from './page2';
import NavBar from './navBar';

const axios = require('axios').default;
function Index() {
  var[nextPage,setNextPage]=useState(false)
    let [details, setDetails] = useState([])
    let [cartData,setCartData]=useState([]);
    useEffect(()=>{
        fetchdata()
    },[])
    useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cartData))
console.log(cartData)
    },[cartData])
    var validation = (item) => {
      //setNextPage(true) 
      let temp_arr=JSON.parse(JSON.stringify(cartData));
      temp_arr.push(item)
      setCartData(temp_arr)
      
    }
    async function fetchdata() {
        var response = await axios.get(`http://localhost:5000/product/`)

        setDetails(response.data.data)
        console.log(response)

    }
    useEffect(()=>{
      console.log("=======>",details)
  },[details])
    return (
        <>
  {nextPage ? <Page2 /> : <>
  <NavBar/>

  <div className="row m-3">
  
    {details.length>0?details.map((cake,index)=>{
    return(
      <div class="col-xxl-3 col-lg-4 col-md-6 mb-5"> 
    <Card style={{ width: '100%'}} className="m-2" key={index}>
      <Card.Img variant="top" className="card-img-top poster" src={cake.pic} />
      <Card.Body>
        <Card.Title> <p className="card-text">{ cake.name}</p></Card.Title>
        <Card.Text>
       
          <p className="card-text">{ cake.price}</p>
        </Card.Text>
        <Button variant="primary" onClick={() => { validation(details[index]) }}>Add to cart</Button>
       
      </Card.Body>
    </Card></div>)
  }):null}
    </div>
    
  </>
}
        </>
    )      
}

export default Index;

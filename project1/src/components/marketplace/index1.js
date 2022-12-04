import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import NavScrollExample from "./nav";
const axios = require('axios').default;
function Index1() {
  var [details, setDetails] = useState([])
  useEffect(() => {
    fetchdata()
  }, [])

  async function fetchdata() {
    var response = await axios.get(`https://raw.githubusercontent.com/Anupamdatta10/imagejson/main/images.json`)
    setDetails(response.data.images)
    // console.log(response.data.images)
  }
  function search(data) {
    console.log("test search", data)
    let temp_arr = []
    for (var i = 0; i < details.length; i++) {
      if (details[i]['@AppName'].toLowerCase().includes(data.toLowerCase())) {
        temp_arr.push(details[i])
      }
    }
    console.log(temp_arr)
    setDetails(temp_arr)
  }
  // function reset()
  // {
  //   details.map((i)=>)
  // }

  return (
    <>
      <div>
        <NavScrollExample titleName={"Marketplace"} name={"anupam"} search={search} />
        <div className="row m-3">
          {details.map((market, index) => {
            return (
              <div className='col'>
                <Card style={{ width: '18rem' }} className="m-2">
                  <Card.Title>{market['@AppName']}</Card.Title>

                  <Card.Img variant="top" src={market['@Logo']} />
                  <Card.Body>
                    <Card.Text>
                      <p className="card-text">{market['@Description']}</p>
                    </Card.Text>
                  </Card.Body>
                </Card></div>)
          })}


        </div>
      </div>
    </>
  )
}

export default Index1
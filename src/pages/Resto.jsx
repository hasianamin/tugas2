import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

// 37d6a9f5fcbf2025e6ae256b576fa712

const Resto = () => {
    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        axios.get('https://developers.zomato.com/api/v2.1/search',{
            headers: {
                'user-key': '37d6a9f5fcbf2025e6ae256b576fa712' 
            }
        }).then((res) => {
            console.log(res.data.restaurants)
            setRestaurant(res.data.restaurants)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    console.log(restaurant)

    const renderRestaurant = () => {
        return restaurant.map((value) => {
            if(!value.restaurant.thumb){
                var image = "https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg" 
            } else{
                var image = value.restaurant.thumb
            }
            return(
                <Card className="col-3 m-1">
                    <CardImg top width="100%" height="200px" src={image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><b>{value.restaurant.name}</b></CardTitle>
                    <CardSubtitle>{value.restaurant.location.city}</CardSubtitle>
                    <CardText>
                        {value.restaurant.cuisines} <br/>
                        {value.restaurant.timings}
                    </CardText>
                    <Button className="btn btn-primary">Reserve Now</Button>
                    </CardBody>
                </Card>
            )
        })
    }

    return (
        <div className="container mt-5 d-flex flex-wrap">
            {renderRestaurant()}
        </div>
    )
}

export default Resto
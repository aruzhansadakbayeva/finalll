import React from "react";
import './Home.css'
import {Link} from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function Home() {

    return (

        <div>     <h2 className="page-heading"> <Link to='/catalog' style={{ color: '#FFF' }} >VIEW NEW COLLECTION</Link> </h2>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} className="sliderimg"/>
                <img src={"https://object.pscloud.io/cms/cms/Photo/img_0_398_633_0_6.png"} className="sliderimg"/>
                <img src={"http://yepman.ru/wp-content/uploads/2013/02/tumblr_mhuw6tAikS1qeuobqo1_1280.jpg"} className="sliderimg"/>

            </AliceCarousel>
        </div>







    );
}

export default Home;

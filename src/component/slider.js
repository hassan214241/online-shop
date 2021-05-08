import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const mystyle = {
   
    height: "400px",
    width: "100px",
  };

function Slider() {


    return (
        <div>
          

                    <Carousel >
                        <Carousel.Item interval={2000}>
                            <img
                            style={mystyle}
                                className="d-block w-100"
                                src="https://image.freepik.com/free-vector/digital-online-shop-global-logistic-truck-van-scooter-black-yellow-delivery-phone-mobile-website-background-concept-location-shopping-food-shipping-box-3d-illustration-copy-space_255625-35.jpg"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                             style={mystyle}
                                className="d-block w-100"
                                src="https://image.freepik.com/free-photo/online-shopping-mobile-application-3d-rendering_51264-772.jpg"
                                alt="Second slide"
                            />
                            
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img
                             style={mystyle}
                                className="d-block w-100"
                                src="https://image.freepik.com/free-vector/3d-online-shopping-social-media-mobile-applications-websites-concepts_131114-30.jpg"
                                alt="Third slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                             style={mystyle}
                                className="d-block w-100"
                                src="https://image.freepik.com/free-photo/shopping-carts-holding-sales-badges_23-2148669947.jpg"
                                alt="Third slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                             style={mystyle}
                                className="d-block w-100"
                                src="https://image.freepik.com/free-vector/shopping-online-isometric-infographic-flowchart-poster_1284-15255.jpg"
                                alt="Third slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                             style={mystyle}
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                alt="Third slide"
                            />
                            
                        </Carousel.Item>
                        
                    </Carousel>




              
   </div>
    );
}
export default Slider;
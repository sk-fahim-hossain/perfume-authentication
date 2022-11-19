import { Carousel,Button } from 'react-bootstrap';
import React from 'react';
import image1 from '../../../images/product -01.png'
import image2 from '../../../images/product-02.png'
import image3 from '../../../images/product-03.png'


const Slider = () => {
    return (
        <div className="bg-dark container-fluid">
            <div className="container">
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-80"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       <div className="justify-content-end w-50 float-end p-5 my-5">
                        <h3><i>New collection 2022</i></h3>
                       <h1>FASHION WATCHES</h1>
                        <p>Thinking cause international development Andrew Carnegie democratizing the global financial system invest. Beneficiaries reduce child mortality network board of.</p>
                        <button className="btn btn-outline bg-light">Show More</button>
                       </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-80"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                       <div className="p-5 my-5">
                       <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="outline-secondary">Show More</Button>
                       </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-80"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                       <div className=" w-50 float-end p-5 my-5 text-end">
                        <div className="">
                        <h3 className="pt-3"><i>New collection 2015</i></h3>
                       <h1>WATCHES FOR WOMEN</h1>
                       <br />
                        <p>Thinking cause international development Andrew Carnegie democratizing the global financial system invest. Beneficiaries reduce child mortality network board of.</p>
                        <button className="btn btn-secondary">SHow More</button>
                        </div>
                       </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default Slider;
import React from 'react';
import img from '../../images/product-04.png';

const Product = () => {
    return (
        <section>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <h1 className="text-center mt-2 mb-5">Product</h1>
                    <div className="col-md-6 col-sm-12">
                        <img src={img} alt="" />
                        <div className="m-2"></div>
                        <div className="row  d-flex">
                            <div className="col-md-4 col-sm-4 p-1">
                                <img src={img} style={{ width: '80px' }} alt="" />
                            </div>
                            <div className="col-md-4  col-sm-4 p-1">
                                <img src={img} style={{ width: '80px' }} alt="" />
                            </div>
                            <div className="col-md-4  col-sm-4 p-1">
                                <img src={img} style={{ width: '80px' }} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3 className="mt-3">COMBAT PROPERTY APPROACH CAUSE ENGAGE</h3>
                        <br />
                        <div className="text-start">
                            <h1 className="text-start">$399.99</h1>
                            <br />
                            <p>Vendor: vendor 1</p>
                            <p>Type: Sweater Wear</p>
                            <br />
                            <p><i>Research proper resources legal aid approach investment fellows participatory monitoring. Metrics gender, prevention, global leaders indicator pathway to a better life. Action Against Hunger peaceful free-speech affordable health care elevate lifting people up economic dialogue.</i></p>
                        </div>
                        <hr />
                        <br />
                        <div className="mt-4"></div>
                        <button className="btn btn-outline-secondary mx-4">Buy Now</button>
                        <button className="btn btn-outline-secondary ">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
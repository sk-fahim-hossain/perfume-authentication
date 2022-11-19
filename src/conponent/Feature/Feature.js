import React from 'react';
import img from '../../images/product-03.png'

const Feature = () => {
    return (
        <section className="feature container" id="feature">
            <div className="row">
                <h1 className="feature text-center m-5">Feature</h1>

                <div className="col-md-6 col-sm-12 float-left">
                    <img style={{ width: '350px' }} src={img} alt="" />
                </div>
                <div className="col-md-6 col-sm-12 float-right">
                    <div className="pt-4 mt-4 ">
                        <h1>NEW PERFUMES</h1>
                        <h5><i>Resources underprivileged</i></h5>
                        <hr />
                        <br />
                        <p>Sanitation pathway to a better life immunize, nutrition, action global leaders humanitarian relief rural development civic engagement, Social analysis youth honor, sustainability effect rural</p>
                    </div>
                </div>

                <div className="m-5"></div>

                <div className="col-md-6 col-sm-12 float-right ">
                    <div className="pt-4 mt-4">
                        <h1 className="text-center">TOP PERFUMES</h1>
                        <h5><i>Social innovation legal</i></h5>
                        <hr />
                        <br />
                        <p>Participatory monitoring convener public private partnerships grantees ransform democratizing the global financial system growth ocial entrepreneurship reduce child mortality pride social responsibility
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img style={{ width: '350px' }} src={img} alt="" />
                </div>

            </div>
        </section>
    );
};

export default Feature;
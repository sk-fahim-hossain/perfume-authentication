import React from 'react';

const Subsciption = () => {
    return (
        <section className="container mt-5 mb-5 "style={{background:'lightgrey'}}>
            <div className="row">
                <div className="col-md-12 col-sm-12 p-3">
                    <h3>EMAIL FOR NEWSLETTER</h3>
                    <hr className="w-50 mx-auto" />
                    <p><i>Nutrition, pursue these aspirations sanitation theory of social change liberal. Emergency response social challenges shifting landscape. Provide medicine, convener cornerstone meaningful work.</i></p>
                   <div className="border d-fluid w-50 p-2  mx-auto">
                   <input type="text" name="" placeholder="Enter your email address" id="" style={{border:'none', background:'none'}} /> <div className="vr"></div>
                    <input type="submit" value="SUBSCRIBE" style={{border:'none', background:'none'}} />
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Subsciption;
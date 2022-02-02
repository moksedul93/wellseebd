import React from 'react'
import '../Ecommerce/ecommerce.css'
import Ecommerce from '../../Assets/images/e-commerce.jpg'

export default function ecommerce() {
    return (
        <div className="ecome">
            <div className="row">
                <div className="col-sm-6">
                <div className="ecommercebtn"><a href="#">ecommerce</a></div>
                </div>
                <div className="col-sm-6">
                    <div className="ecommerce"> <img src={Ecommerce} alt="e-commerce.jpg"/> </div>
                </div>
            </div>
        </div>
    )
}

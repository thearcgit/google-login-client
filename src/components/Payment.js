import axios from 'axios'
import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Payment = () => {

    const [product, setProduct] = useState({
        name: "Jeans",
        price: 20
    })

    const makePayment = async token => {
        console.log('token', token)
        const data = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }

        try {
            let res = await axios.post(`http://localhost:8080/payment`, data, headers)
            if (res.status === 200) {

                console.log('response', res?.data)

            }

        } catch (error) {
            console.log('error', error)


        }


    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center w-100">

                    <div className="full-height col-10">

                        <StripeCheckout
                            stripeKey={process.env.REACT_APP_STRIPEKEY}
                            token={makePayment}
                            name="payment"
                        >

                            <button type="button" className="btn btn-primary">Make Payment of {product?.price}</button>
                        </StripeCheckout>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Payment

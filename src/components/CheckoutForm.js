import React from 'react'
import { useForm } from 'react-hook-form';

type FormValues = {

    firstName: string,
    lastName: string,
    address: string,
    zipCode: number,
    creditCardNumber: number,
    expirationDate: number,
    cvv: number

}

function CheckoutForm() {

    const { register } = useForm();

    return (
        <div className='form-container'>
        <form>
        <label htmlFor="firstName"></label>
        <input name="firstName" id="firstName" placeholder="First Name"/>

        <label htmlFor="lastName"></label>
        <input name="lastName" id="lastName" placeholder="Last Name" />

        <label htmlFor="address"></label>
        <input name="address" id="address" placeholder="Address"/>

        <label htmlFor="zipCode"></label>
        <input name="zipCode" id="zipCode" placeholder="Zip Code" />

        <label htmlFor="city"></label>
        <input name="city" id="city" placeholder="City" />
        <br>
        </br>
        <br>
        </br>
        <label htmlFor="creditCardNumber"></label>
        <input name="creditCardNumber" type="number" id="creditCardNumber" placeholder="Credit Card Number" />

        <label htmlFor="expirationDate"></label>
        <input name="expirationDate" type="number" id="expirationDate" placeholder="Expiration Date" />

        <label htmlFor="cvv"></label>
        <input name="cvv" type="number" id="cvv" placeholder="CVV" />

        <input type="submit"/>

       
    </form>
        </div>
    )
}

export default CheckoutForm

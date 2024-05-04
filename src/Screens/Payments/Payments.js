import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native';
// import {STRIPEPUB_KEY} from '@env'
import PaymentStripeCardComp from '../../Components/PaymentStripeCardComp';

const Payments = () => {
    return (
        <StripeProvider
          publishableKey={'pk_live_51KmXx3SFPr4BFJScoEvEmfTtfUkzyGTeVMVH5Laaz7xPri8wvx5n2YhjalEnnEXiin6TfAnVQaS9mUmpcDeOFC6d00mSdqtkFo'}
          merchantIdentifier="merchant.identifier" // required for Apple Pay
          urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        >
          <PaymentStripeCardComp />
        </StripeProvider>
      );
}

export default Payments

const styles = StyleSheet.create({})
import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import { CardField, useStripe } from '@stripe/stripe-react-native'; 

const PaymentStripeCardComp = () => {
    return (
        <SafeAreaView>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            console.log('cardDetails', cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField);
          }}
        />
        </SafeAreaView>
      );
      
}

export default PaymentStripeCardComp

const styles = StyleSheet.create({})
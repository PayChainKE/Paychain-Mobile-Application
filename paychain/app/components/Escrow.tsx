
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Escrow = () => {
  return (
    <View>
      <Text>Supplier Escrow</Text>
      <Text>Secure payment to suppliers with USDC</Text>
      <View>
        <Text>Create New Escrow Payment</Text>
        <Text>Supplier Name</Text>
        <input type="text"  placeholder='Enter supplier name'/>
        <Text>Payment Method</Text>
        <input type="text" placeholder='USDC (Base L2) or KES (MPESA)'/>
      </View>
      <View>
        <Text>Amount</Text>
        <input type="text" placeholder='0.00'/>
        <Text>Release Date</Text>
        <input type="text" placeholder='mm/dd/yyyy' />
      </View>
      <View>
        <Text>Description</Text>
        <input type="text" placeholder='Payment for goods/services'/>
        <Text>Create Escrow</Text>
      </View>
      <View>
        <Text>Active Escrow Payments</Text>
        <Text>Global Tech Suppliers Ltd</Text>
        <Text>Pending Release  USDC</Text>
        <Text>$ 1,200</Text>
        <Text>Release Now</Text>
      </View>
      <View>
        <Text>Kenya Manufacturing Co.</Text>
        <Text>Complete  KES</Text>
        <Text>KES  45,000</Text>
      </View>
      <View>
        <Text>Import Partners LLC</Text>
        <Text>Pending Release   USDC</Text>
        <Text>$850</Text>
        <Text>Release Now</Text>
      </View>
      <View>
        <Text>Global Payments</Text>
        <Text>Pay international suppliers with USDC</Text>
      </View>
      <View>
        <Text>Secure Escrow</Text>
        <Text>Funds held until delivery confirmation</Text>
      </View>
      <View>
        <Text>Instant Settlement</Text>
        <Text>Fast blockchain based transfers.</Text>
      </View>
      <View></View>
    </View>
  )
}

export default Escrow

const styles = StyleSheet.create({})
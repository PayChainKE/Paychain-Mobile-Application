


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wallet = () => {
  return (
    <View>
      <Text>Payments</Text>
      <Text>All incoming payments with Sentinel AI verification</Text>
      <View>
        <Text>Today</Text>
        <Text>KES 10, 450</Text>
        <Text>4 payments</Text>
      </View>
      <View>
        <Text>This Week</Text>
        <Text>
          KES 85,200
        </Text>
        <Text>
          32 payments
        </Text>
      </View>
      <View>
        <Text>This Month</Text>
        <Text>KES 342,800</Text>
        <Text>156 payments</Text>
      </View>
      <View>
        <Text>Verified</Text>
        <Text>100%</Text>
        <Text>Sentinel AI</Text>
      </View>
      <View>
        <Text>All Payments</Text>
        <input type="search"  placeholder='Search payments...'/>
      </View>
      <View>
        <Text>Status</Text>
        <Text>Date & Time</Text>
        <Text>Phone Number</Text>
        <Text>Amount</Text>
        <Text>Type</Text>
      </View>
      <View>
        <Text>2026-03-09 14:32</Text>
        <Text>0712XXX234</Text>
        <Text>KES 2,500</Text>
        <Text>M-PESA</Text>
        <Text>2026-03-10 13:57</Text>
        <Text>0743XXX789</Text>
        <Text>KES 5,800</Text>
        <Text>MPESA</Text>
      </View>
      <View>
        <Text>2026-04-09 5:58</Text>
        <Text>0745XXX123</Text>
        <Text>KES 980</Text>
        <Text>MPESA</Text>
        <Text>2026-05-08 12:34</Text>
        <Text>0753XXX167</Text>
        <Text>KES 5,789</Text>
        <Text>MPESA</Text>
        <Text>Showing 7 of 156 payments</Text>
        <Text>Previous</Text>
        <Text>Next</Text>
      </View>
    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cashadvance = () => {
  return (
    <View>
      <Text>Cash Advance</Text>
      <Text>Instant working capital based on your sales</Text>
      <View>
        <Text>Your Advance Eligibility</Text>
        <Text>Available Amount</Text>
        <Text>KES 75,000</Text>
        <Text>Repayment Terms</Text>
        <Text>3-6 months</Text>
        <Text>Automatic deduction from sales</Text>
      </View>
      <View>
        <Text>Interest rate: 2.5% per month</Text>
        <Text>Repayment Automatic 15% deduction from daily sales</Text>
        <Text>Apply for Cash Advance</Text>
      </View>
      <View>
        <Text>Advance Calculator</Text>
        <Text>Amount Needed (KES)</Text>
        <Text>KES 10,000  KES 50,000   KES 75,000</Text>
      </View>
      <View>
        <Text>Repayment Period</Text>
        <option value="">
          <select name="" id="">3 months</select>
          <select name="" id="">4 months</select>
          <select name="" id="">5 months</select>
        </option>
      </View>
      <View>
        <Text>Monthly Payment   Total Interest    Total Repayment</Text>
        <Text>KES 18,750     KES  3,750      KES 53,750</Text>
      </View>
      <View>
        <Text>Instant Approval</Text>
        <Text>Get funds within 24 hours</Text>
      </View>
      <View>
        <Text>Flexible Terms</Text>
        <Text>Choose 3-6 month repayment</Text>
      </View>
      <View>
        <Text>Auto Repayment</Text>
        <Text>No manual payments needed</Text>
      </View>
    </View>
  )
}

export default Cashadvance

const styles = StyleSheet.create({})


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import almoLogo from '@/assets/almo-logo.jpg';

const Etims = () => {
  return (
    <View>
      <Text>e-TIMS Hub</Text>
      <Text>KRA Tax Compliance Dashboard</Text>
      <View>
        <Text>Registration Status</Text>
        <Text>PayChain is registered as your KRA technical agent for automated e-TIMS filing</Text>
        <Text>Reference: MOU #KRA-PC-2026-08452</Text>
      </View>
      <View>
        <Text>KRA PIN</Text>
        <Text>A012345K</Text>
        <Text>e-TIMS Device ID</Text>
        <Text>ETIMS-PC-89234</Text>
        <Text>Last Sync</Text>
        <Text>2 hours ago</Text>
      </View>
      <View>
        <Text>VAT Resereve Vault</Text>
        <Text>KES 15, 200</Text>
        <Text>16% VAT automatically reserved</Text>
        <Text>This amount is automatically set aside from your sales for VAT compliance</Text>
        <Text>Filling Deadline Approaching</Text>
        <Text>Monthly return due in 7 days (March 20, 2026)</Text>
        <Text>Review & File Return</Text>
      </View>
      <View>
        <Text>Recent e-TIMS Transactions</Text>
      </View>
      <View>
        <Text>Date</Text>
        <Text>2026-03-09</Text>
        <Text>Amount</Text>
        <Text>KES 2,500</Text>
      </View>
      <View>
        <Text>VAT (16%)</Text>
        <Text>KES 400</Text>
      </View>
      <View>
        <Text>e-TIMS Reference</Text>
        <Text>ETM-2026-03-09-001</Text>
      </View>
      <View>
        <Text>Status</Text>
        <Text>Filed</Text>
        <Text>View All Transactions {'-->'} </Text>
      </View>
    </View>
  )
}

export default Etims

const styles = StyleSheet.create({})
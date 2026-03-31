

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Inflationshield = () => {
  return (
    <View>
      <View>
        <Text>Inflation Shield Vault</Text>
        <Text>Protect your wealth with USDC on Base L2</Text>
      </View>
      <View>
        <Text>Total USDC Balance</Text>
        <Text>$ 1,850.00</Text>
        <Text>=KES 250,950 at current rate</Text>
        <Text>KES (KE)</Text>
        <Text>USDC $$$</Text>
      </View>
      <View>
        <Text>Auto-Swap Incoming Payments</Text>
        <Text>Automatically convert excess KES to USDC</Text>
        <Text>Keep this amount liquid in KES, swap all excess</Text>
        <input type="text" placeholder='50000'/>
      </View>
      <View>
        <Text>Manual Swap to USDC</Text>
        <Text>Emergency Swap to KES</Text>
      </View>
      <View>
        <Text>Inflation Protected</Text>
        <Text>KES 12,450</Text>
        <Text>Since activation</Text>
      </View>
      <View>
        <Text>Total Swaps</Text>
        <Text>24</Text>
        <Text>This month</Text>
      </View>
      <View>
        <Text>Wallet Address</Text>
        <Text>0x742...a4f2</Text>
        <Text>View on Base Scan</Text>
      </View>
      <View>
        <Text>Quick Actions with USDC</Text>
        <Text>Pay Global Supplier</Text>
        <Text>Use USDC  for international payments</Text>
        <Text>Pay Utility Bills</Text>
        <Text>KPLC, Water, Internet with USDC</Text>
      </View>
    </View>
  )
}

export default Inflationshield

const styles = StyleSheet.create({})
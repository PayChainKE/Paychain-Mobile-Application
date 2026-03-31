

import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react'

const Mytills = () => {
  return (
    <View>
      <View>
      <Text>My Tills</Text>
      <Text>Manage your Equity Bank payment tills</Text>
      <Text>Span New Till</Text>
      </View>
      <View>
        <Text>Main Counter</Text>
        <Text>8012345</Text>
        <Text>Active</Text>
        <Text>Current Balance</Text>
        <Text>KES 45, 200</Text>
        <Text>Copy         QR Code</Text>
      </View>
      <View>
        <Text>Online Sales</Text>
        <Text>8012346</Text>
        <Text>Active</Text>
        <Text>Current Balance</Text>
        <Text>KES 23,800</Text>
        <Text>Copy       QR Code</Text>
      </View>
      <View>
        <Text>Mobile Till</Text>
        <Text>8012347</Text>
        <Text>Inactive</Text>
        <Text>Current Balance</Text>
        <Text>KES 12400,800</Text>
        <Text>Copy        QR Code</Text>
      </View>
      <View>
        <Text>Add New Till</Text>
        <Text>Via Jenga API</Text>
        <Text>+</Text>
      </View>
      <View>
        <Text>Claim Payment Manually</Text>
        <Text>If a payment wasn't automatically matched by Sentinel AI, you can claim it manually.</Text>
      </View>
      <View>
        <Text>MPESA Reference Code</Text>
        <textarea name="inpu" id="" placeholder='e.g QGH8XYZ123'></textarea>
      </View>
      <View>
        <Text>Amount (KES)</Text>
        <input type="text" placeholder='e.g., 2500'/>
      </View>
      <View>
        <Text>Claim Payment</Text>
      </View>
    </View>
  )
}

export default Mytills

const styles = StyleSheet.create({})
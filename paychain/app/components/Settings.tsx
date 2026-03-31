

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <Text>Manage your account and preferences</Text>
      <View>
        <Text>Profile Information</Text>
        <Text>Business Name</Text>
        <input type="text" placeholder='Merchant Name Ltd' />
        <Text>Contact Person</Text>
        <input type="text" placeholder='John Specke'/>
      </View>
      <View>
        <Text>Email Address</Text>
        <input type="text" placeholder='leonardoduor91@gmail.com' />
        <Text>Phone Number</Text>
        <input type="text"  placeholder='+25475654647464'/>
        <Text>Update Profile</Text>
      </View>
      <View>
        <Text>Security</Text>
        <Text>Two Factor Authentication</Text>
        <Text>Add an extra layer of security</Text>
        <Text>Change Password</Text>
        <Text>Update Password</Text>
        <Text>API Keys</Text>
        <Text>Manage your integration API keys</Text>
        <Text>Manage API Keys</Text>
      </View>
      <View>
        <Text>Notifications</Text>
        <Text>Payment Notifications</Text>
        <Text>Get notified for every payment</Text>
        <Text>e-TIMS Alerts</Text>
        <Text>Tax filing reminders</Text>
        <Text>Marketing Updates</Text>
        <Text>Product updates and tips</Text>
      </View>
      <View>
        <Text>Payment Preferences</Text>
        <Text>Base L2 Wallet Address</Text>
        <Text>0x754c774j5868e87g75r736e74g</Text>
        <Text>Change Wallet</Text>
        <Text>KRA PIN Registered Number</Text>
        <Text>+254712345908</Text>
        <Text>Update Number</Text>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})
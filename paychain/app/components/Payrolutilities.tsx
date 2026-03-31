

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Payrolutilities = () => {
  return (
    <View>
      <Text>Payroll & Utilities</Text>
      <Text>Manage staff payments and business bills</Text>
      <View>
        <Text>Payroll</Text>
        <Text>Pay Staff</Text>
        <textarea name="" id="" cols="30" rows="10" placeholder='Upload Employee CSV'></textarea>
      </View>
      <View>
        <Text>Or paste M-PESA numbers (one per line):</Text>
        <textarea name="" id="" cols="30" rows="10" placeholder='071234578,0723456789'></textarea>
      </View>
      <View>
        <Text>
          [/] Pay from USDC Vault   [/] Pay from KES Balance
        </Text>
        <Text>Process Payroll</Text>
      </View>
      <View>
        <Text>Recent Payroll</Text>
        <Text>February 2026 - 8 employees</Text>
        <Text>Processed on Feb 28, 2026</Text>
        <Text>KES 145,000</Text>
      </View>
      <View>
        <Text>January 2026 - 8 employees</Text>
        <Text>Processed on Jan 31, 2026</Text>
        <Text>KES 142,500</Text>
      </View>
      <View>
        <Text>Utilities</Text>
        <Text>KPLC - Kenya Power</Text>
        <Text>Electricity payments</Text>
        <Text>Account Number</Text>
        <input type="text" placeholder='Enter account number'/>
        <Text>Amount (KES)</Text>
        <input type="text" placeholder='0.00'/>
        <input type="radio" placeholder='Post-paid'/>
        <input type="radio" placeholder='Pre-paid (Tokens)'/>
        <Text>Pay KPLC Bill</Text>
      </View>
      <View>
        <Text>Nairobi Water</Text>
        <Text>Water & sewerage</Text>
        <Text>Account Number</Text>
        <input type="text" placeholder='Enter account number'/>
        <Text>Amount (KES)</Text>
        <input type="text" placeholder='0.00'/>
        <Text>Pay Water Bill</Text>
      </View>
      <View>
        <Text>Internet & TV</Text>
        <Text>Zuku, Safaricom, etc</Text>
        <Text>Provider</Text>
        <option value="">
          <select name="" id="" disabled="disabled">Zuku</select>
          <select name="" id="">JTL</select>
          <select name="" id="">Safaricom Home Faiba</select>
          <select name="" id="">Faiba</select>
        </option>
        <Text>Account Number</Text>
        <input type="text" placeholder='Enter account number'/>
        <Text>Amount (KES)</Text>
        <input type="text" placeholder='0.00'/>
        <Text>Pay Internet Bill</Text>
      </View>
      <View>
        <Text>Swap & Settle</Text>
        <Text>USDC to M-PESA</Text>
        <Text>
          Convert your USDC vault balance back to KES and send to M-PESA
        </Text>
        <Text>USDC Amount</Text>
        <input type="text" placeholder='0.00'/>
        <Text>M-PESA Number</Text>
        <input type="text" placeholder='+254712345649'/>
        <Text>Swap USDC to M-PESA</Text>
      </View>
    </View>
  )
}

export default Payrolutilities

const styles = StyleSheet.create({})
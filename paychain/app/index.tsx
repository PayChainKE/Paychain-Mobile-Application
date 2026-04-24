// import { Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// interface Props {
//   name: string;
//   amount: number;
//   till: number;
//   cash: number;
//   type: string;
//   crypto: number;
// }



// const Index:React.FC<Props> = () => {


//   return (
//     <SafeAreaView
//       // style={{
//       //   flex: 1,
//       //   justifyContent: "center",
//       //   alignItems: "center",
//       // }}
//       className="bg-[#edfde4] h-full flex-1 items-center"
//     >
//       <Text className="text-center font-medium ">Here's how Kamau General Store is doing today</Text>
//       <View className="h-[150px] w-[250px] bg-green-900 rounded-[10px] m-7">
//         <View className="flex-row items-center justify-start gap-x-1">
//         <text className="text-[10px] text-white bg-[#641203] font-semibold ">PRIMARY LEDGER</text>
//         <text className="text-white font-bold bg-[#5448f5]">TILL: PC847291</text>
//         </View>
//         <Text className="font-semibold text-xl text-white">KES 184,250</Text>
//         <Text className="text-white font-normal">+KES 18,450 today</Text>
//       </View>
//             <View className="h-[250px] w-[350px] bg-green-900 rounded-[10px]">
//         <View className="flex justify-between gap-3">
//         <text className="text-[10px] text-white bg-[#d8f7c9] font-semibold ">GLOBAL SETTLEMENTS</text>
//         </View>
//         <Text className="font-semibold text-xl text-white">312.50 USDC</Text>
//         <Text className="text-white font-normal">+KES 40,625</Text>
//         <View>
//           <Text>Swap {"-->"} USDC</Text>
//           <Text> Send USDC</Text>
//         </View>
//       </View>
//       <View className="flex-1 justify-between "> {/*point 1*/}
//         <View>
//           <View className="h-[150px] w-[250px] bg-green-900 rounded-[10px]">
//             <Text>TODAY'S REVENUE</Text>
//             <Text>KES 18,450</Text>
//             <Text>12 payments processed</Text>
//           </View>
//           <View>

//           </View>
//         </View>
//         <View>hey</View>
//       </View>
//     </SafeAreaView >
//   );
// }

// export default Index;
/////////////////////////////////////
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { ArrowRight } from "lucide-react-native"
import { router } from "expo-router";

export default function Loginscreen() {
  const [phoneNumber, setPhoneNumber] = useState('790 630 415');
  const [password, setPassword] = useState('**********');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView className="flex-1 bg-emerald-900">
      <StatusBar  barStyle="light-content"/>
      <View className="px-6 pt-20 pb-10">
        <Text className="text-white text-sm font-medium mb-2">PayChain</Text>
        <Text className="text-white text-sm mb-1">MERCHANT PORTAL</Text>
        <Text className="text-white text-5xl font-bold mt-8 mb-2">Secured.</Text>
        <Text className="text-emerald-300 text-5xl font-bold mb-2">Pay. </Text>
        <Text className="text-white text-5xl font-bold">Grow.</Text>
      </View>
      <View className="bg-white rounded-t-3xl px-6 pt-8 pb-20 min-h-screen">
        <Text className="text-2xl font-bold text-gray-900 mb-2">Sign in to your account</Text>
        <Text className="text-gray-600 mb-6">
          Use your M-PESA phone number and the password provided during onboarding.
        </Text>
        <View className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded mb-6">
          <Text className="text-emerald-800 text-sm">
            No account? Access is provided by your PayChain onboarding officer after approval.
          </Text>
        </View>
        <Text className="text-gray-700 font-medium mb-2 text-sm">M-PESA PHONE NUMBER</Text>
        <View className="flex-row items-center bg-white border border-gray-200 rounded-lg px-4 py-4 mb-6">
          <Text className="text-gray-600 mr-2">+254</Text>
          <TextInput
          className="flex-1 text-gray-900 text-lg"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          />
        </View>

        <Text className="text-gray-700 font-medium mb-2 text-sm">PASSWORD</Text>
        <View className="flex-row items-center bg-white border border-gray-200 rounded-lg px-4 py-4 mb-2">
          <TextInput
          className="flex-1 text-gray-900 text-lg"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
            <Text className="text-emerald-600">{'</>'}</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-gray-500 text-sm italic mb-6">First time? Use your temporary password.</Text>

        <TouchableOpacity
        className="bg-emerald-700 rounded-2xl py-4 items-center flex-row justify-center"
        onPress={() => router.replace("/(tabs)/home")}
        >
          <Text className="text-white font-bold text-lg mr-2">Sign In</Text>
          <ArrowRight size={20} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


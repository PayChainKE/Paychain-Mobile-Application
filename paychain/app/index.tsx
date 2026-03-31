import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  name: string;
  amount: number;
  till: number;
  cash: number;
  type: string;
  crypto: number;
}



const Index:React.FC<Props> = () => {


  return (
    <SafeAreaView
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      className="bg-[#edfde4] h-full flex-1 items-center"
    >
      <Text className="text-center font-medium ">Here's how Kamau General Store is doing today</Text>
      <View className="h-[250px] w-[350px] bg-green-900 rounded-[10px] m-7">
        <View className="flex-row items-center justify-start gap-x-1">
        <text className="text-[10px] text-white bg-[#d8f7c9] font-semibold ">PRIMARY LEDGER</text>
        <text className="text-white font-bold bg-[#ecfae2]">TILL: PC847291</text>
        </View>
        <Text className="font-semibold text-xl text-white">KES 184,250</Text>
        <Text className="text-white font-normal">+KES 18,450 today</Text>
      </View>
            <View className="h-[250px] w-[350px] bg-green-900 rounded-[10px]">
        <View className="flex justify-between gap-3">
        <text className="text-[10px] text-white bg-[#d8f7c9] font-semibold ">GLOBAL SETTLEMENTS</text>
        </View>
        <Text className="font-semibold text-xl text-white">312.50 USDC</Text>
        <Text className="text-white font-normal">+KES 40,625</Text>
        <View>
          <Text>Swap {"-->"} USDC</Text>
          <Text> Send USDC</Text>
        </View>
      </View>
      <View className="flex-1 justify-between "> {/*point 1*/}
        <View>
          <View className="h-[150px] w-[250px] bg-green-900 rounded-[10px]">
            <Text>TODAY'S REVENUE</Text>
            <Text>KES 18,450</Text>
            <Text>12 payments processed</Text>
          </View>
          <View>

          </View>
        </View>
        <View>hey</View>
      </View>
    </SafeAreaView >
  );
}

export default Index;


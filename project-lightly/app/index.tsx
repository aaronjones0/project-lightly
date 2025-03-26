import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className='bg-stone-100 text-stone-700'
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='text-6xl font-semibold text-stone-500'>nudge</Text>
      <Text>{'Hi :)'}</Text>
    </View>
  );
}

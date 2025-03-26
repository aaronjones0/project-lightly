import { Platform, Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      className='bg-stone-100 text-stone-700'
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        className='text-6xl font-semibold text-stone-500'
        style={{
          fontFamily: Platform.select({
            android: 'Inter_400Regular',
            ios: 'Inter-Regular',
            // android: 'RobotoSerif_100Thin',
            // ios: 'RobotoSerif-Thin',
          }),
        }}
      >
        nudge
      </Text>
      <Text style={{
        fontFamily: Platform.select({
          android: 'Inter_400Regular',
          ios: 'Inter-Regular',
        }),
      }}>{'Hi :)'}</Text>
    </View>
  );
}


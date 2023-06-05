import { Pressable, View, Image } from 'react-native'
import deliveriesImage from '../assets/deliveries.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function DeliveriesHeader({ handleLogout }) {
  return (
    <View className='w-full h-2/5 bg-orange-400 rounded-b-3xl items-center justify-center'>
      <Pressable
        className='w-9 aspect-square bg-orange-200 rounded-md self-end m-3 mt-0 items-center justify-center'
        onPress={handleLogout}
      >
        <MaterialCommunityIcons name='logout' size={24} color='black' />
      </Pressable>
      <Image
        source={deliveriesImage}
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
          marginTop: -70
        }}
      />
    </View>
  )
}

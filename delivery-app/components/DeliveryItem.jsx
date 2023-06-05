import { Image, Pressable, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import boxImage from '../assets/box.png'
import { DELIVERY_STATUS } from '../utils/constants'
import StatusBadge from './StatusBadge'

export default function DeliveryItem({ navigation, delivery }) {
  const { id, estimated_delivery_date, status } = delivery
  return (
    <Pressable
      className='w-full bg-white rounded-lg p-4 my-1'
      onPress={() => {
        navigation.navigate('Delivery', {
          deliveryId: id
        })
      }}
    >
      <View className='flex-row items-center justify-between w-full'>
        <View className='flex-row items-center'>
          <View className='w-14 aspect-square rounded-full items-center justify-center p-4 bg-slate-100'>
            <Image
              source={boxImage}
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
            />
          </View>
          <View className='ml-4 justify-between relative'>
            <Text className='text-gray-400 text-xs absolute -top-5 left-0 w-56'>
              Entrega: {estimated_delivery_date.split('T')[0]}
            </Text>

            <Text className='text-lg font-bold'>{id.toString()}</Text>
          </View>
        </View>
        <View className='flex-row items-center gap-x-2'>
          <StatusBadge status={status} />
          <Ionicons name='eye-outline' size={24} color='black' />
        </View>
      </View>
    </Pressable>
  )
}

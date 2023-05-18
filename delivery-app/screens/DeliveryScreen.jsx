import { View, Text, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import DeliveryMap from '../components/DeliveryMap'
import useDelivery from '../hooks/useDelivery'
import { DELIVERY_STATUS } from '../utils/constants'
import BackButton from '../components/BackButton'

export default function DeliveryScreen({ route, navigation }) {
  const { deliveryId } = route.params
  const { delivery, loading, errorMessage } = useDelivery(deliveryId)
  if (loading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>Loading...</Text>
      </View>
    )
  }
  if (errorMessage) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>{errorMessage.toString()}</Text>
      </View>
    )
  }

  return (
    <View className='flex-1 p-4 relative items-center'>
      <View className='w-full h-3/4 bg-orange-400 rounded-3xl absolute top-4 left-4' />
      <View className='w-full h-2/4 px-8 pt-3 gap-y-1'>
        <View className='w-full flex-row justify-between items-center mb-2'>
          <View className='-ml-4'>
            <BackButton navigation={navigation} color='white' to='Deliveries' />
          </View>
          <Pressable
            className='w-9 self-start items-center justify-center -mr-4'
            onPress={() => {
              navigation.navigate('EditDelivery', {
                deliveryId
              })
            }}
          >
            <Feather name='edit' size={24} color='white' />
          </Pressable>
        </View>
        <View className='w-full'>
          <Text className='text-white'>Id</Text>
          <Text className='text-2xl text-white font-bold'>
            {delivery?.id?.toString()}
          </Text>
        </View>
        <View className='w-full'>
          <Text className='text-white'>Origen</Text>
          <Text className='text-2xl text-white font-bold'>
            {delivery?.origin_location.at(0).toUpperCase() +
              delivery?.origin_location.slice(1).toLowerCase()}
          </Text>
        </View>
        <View className='w-full'>
          <Text className='text-white'>Destino</Text>
          <Text className='text-2xl text-white font-bold'>
            {delivery?.destination_location.at(0).toUpperCase() +
              delivery?.destination_location.slice(1).toLowerCase()}
          </Text>
        </View>
        <View className='w-full'>
          <Text className='text-white'>Fecha estimada de entrega</Text>
          <Text className='text-2xl text-white font-bold'>
            {delivery?.estimated_delivery_date.split('T')[0]}
          </Text>
        </View>
        <View className='w-full'>
          <Text className='text-white'>Estado</Text>
          <Text className='text-2xl text-white font-bold'>
            {DELIVERY_STATUS[delivery?.status]}
          </Text>
        </View>
      </View>
      <View className='w-11/12 h-2/4 bg-black rounded-3xl overflow-hidden'>
        <DeliveryMap
          origin={delivery?.origin_location}
          destination={delivery?.destination_location}
        />
      </View>
    </View>
  )
}

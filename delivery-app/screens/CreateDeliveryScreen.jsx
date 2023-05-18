import { View, Text, Pressable, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import {
  CITIES_OPTIONS,
  DELIVERY_STATUS_OPTIONS,
  TOKEN_KEY
} from '../utils/constants'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { createDeliveryService } from '../services/deliveries'

export default function CreateDeliveryScreen({ navigation }) {
  const doo = new Date()
  const [delivery, setDelivery] = useState({
    origin_location: CITIES_OPTIONS[0].value,
    destination_location: CITIES_OPTIONS[1].value,
    estimated_delivery_date: new Date(
      doo.getTime() + Math.abs(doo.getTimezoneOffset() * 60000)
    ),
    status: 'pending'
  })
  console.log(delivery)
  const [creating, setCreating] = useState(false)
  const [errorCreatingMessage, setErrorCreatingMessage] = useState(null)
  const [showPicker, setShowPicker] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toISOString()
    setShowPicker(false)
    setDelivery({ ...delivery, estimated_delivery_date: currentDate })
  }

  const handleCreateDelivery = async () => {
    setCreating(true)
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      const { error } = await createDeliveryService(delivery, token)
      if (error) return setErrorCreatingMessage(error)
      navigation.push('Deliveries')
    } catch (error) {
      setErrorCreatingMessage(error)
    } finally {
      setCreating(false)
    }
  }

  return (
    <ScrollView className='flex-1 h-full'>
      <View className='w-full px-4 gap-y-3 py-10 flex-1 h-full'>
        <Text className='font-bold text-3xl self-start text-orange-400'>
          Crear envio
        </Text>
        <View className='w-full items-center'>
          <Text className='text-lg self-start'>Ciudad de origen</Text>
          <Picker
            style={{ width: '50%' }}
            selectedValue={delivery?.origin_location}
            onValueChange={(itemValue, itemIndex) =>
              setDelivery({ ...delivery, origin_location: itemValue })
            }
          >
            {CITIES_OPTIONS.map(({ label, value }) => (
              <Picker.Item key={value} label={label} value={value} />
            ))}
          </Picker>
        </View>
        <View className='w-full items-center'>
          <Text className='text-lg self-start'>Ciudad de destino</Text>
          <Picker
            style={{ width: '50%' }}
            selectedValue={delivery?.destination_location}
            onValueChange={(itemValue, itemIndex) =>
              setDelivery({ ...delivery, destination_location: itemValue })
            }
          >
            {CITIES_OPTIONS.map(({ label, value }) => (
              <Picker.Item key={value} label={label} value={value} />
            ))}
          </Picker>
        </View>
        <View className='w-full items-center'>
          <Text className='text-lg self-start'>Fecha de entrega estimada</Text>
          <Text className='text-xl font-bold'>
            {delivery?.estimated_delivery_date.toString().split('T')[0] ||
              'No especificada'}
          </Text>
        </View>
        <View className='w-full items-center'>
          <Pressable
            onPress={() => setShowPicker(!showPicker)}
            className='bg-neutral-300 rounded-lg w-full py-3 items-center mb-3'
          >
            <Text>Modificar fecha</Text>
          </Pressable>
          {showPicker && (
            <DateTimePicker
              value={new Date(delivery?.estimated_delivery_date)}
              mode='date'
              is24Hour={true}
              display='default'
              onChange={onChange}
            />
          )}
        </View>
        <View className='w-full items-center'>
          <Text className='text-lg self-start'>Estado del envio</Text>
          <Picker
            style={{ width: '50%' }}
            selectedValue={delivery?.status}
            onValueChange={(itemValue, itemIndex) =>
              setDelivery({ ...delivery, status: itemValue })
            }
          >
            {DELIVERY_STATUS_OPTIONS.map(({ label, value }) => (
              <Picker.Item key={value} label={label} value={value} />
            ))}
          </Picker>
        </View>

        <View className='flex-1 flex-row gap-x-2 pt-10'>
          <Pressable
            onPress={() => navigation.goBack()}
            className='bg-neutral-300 rounded-lg py-3 px-4 flex-1 items-center mb-3'
          >
            <Text>Cancelar</Text>
          </Pressable>
          <Pressable
            onPress={handleCreateDelivery}
            className='bg-orange-400 rounded-lg py-3  flex-1 px-4 items-center mb-3'
          >
            {creating ? <Text>Guardando...</Text> : <Text>Guardar</Text>}
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

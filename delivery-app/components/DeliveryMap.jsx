import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import { CITIES_COORDS } from '../utils/constants'
import { Marker } from 'react-native-maps'

export default function DeliveryMap({ origin, destination }) {
  const colombiaRegion = {
    latitude: 4.5709,
    longitude: -74.2973,
    latitudeDelta: 16,
    longitudeDelta: 16
  }
  return (
    <View className='flex-1'>
      <MapView style={{ flex: 1 }} initialRegion={colombiaRegion}>
        <Marker
          coordinate={CITIES_COORDS[origin]}
          title={origin.at(0).toUpperCase() + origin.slice(1).toLowerCase()}
          description='Ciudad de origen'
        />
        <Marker
          coordinate={CITIES_COORDS[destination]}
          title={
            destination.at(0).toUpperCase() + destination.slice(1).toLowerCase()
          }
          description='Ciudad de destino'
        />
      </MapView>
    </View>
  )
}

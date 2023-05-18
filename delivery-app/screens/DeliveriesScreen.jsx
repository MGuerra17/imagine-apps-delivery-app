import { View, Text, Pressable, FlatList } from 'react-native'
import useDeliveries from '../hooks/useDeliveries'
import { Ionicons } from '@expo/vector-icons'
import useAuth from '../hooks/useAuth'
import DeliveriesHeader from '../components/DeliveriesHeader'
import FilterModal from '../components/FilterModal'
import DeliveryItem from '../components/DeliveryItem'
import { MaterialIcons } from '@expo/vector-icons'

export default function DeliveriesScreen({ navigation }) {
  const {
    deliveriesFiltered,
    loading,
    error,
    currentfilter,
    setCurrentFilter,
    modalVisible,
    setModalVisible
  } = useDeliveries()
  const { handleLogout } = useAuth({ navigation })

  if (loading) return <Text>Loading...</Text>

  return (
    <View className='flex-1 items-center'>
      <DeliveriesHeader handleLogout={handleLogout} />
      <View className='w-full h-3/5 items-center'>
        <View className='flex-row justify-between items-center px-4 mt-6 mb-4 w-full'>
          <Text className='text-2xl font-bold'>Todos los envios</Text>
          <View className='flex-row items-center gap-x-4'>
            <Pressable
              className='w-9 aspect-square bg-slate-200 rounded-md items-center justify-center'
              onPress={() => setModalVisible((prevState) => !prevState)}
            >
              <Ionicons name='filter' size={24} color='black' />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('CreateDelivery')}>
              <MaterialIcons name='post-add' size={30} color='green' />
            </Pressable>
          </View>
        </View>
        <FlatList
          className='w-full px-4'
          data={deliveriesFiltered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <DeliveryItem navigation={navigation} delivery={item} />
          )}
        />
      </View>
      <FilterModal
        visible={modalVisible}
        setVisible={setModalVisible}
        currentfilter={currentfilter}
        setCurrentFilter={setCurrentFilter}
      />
    </View>
  )
}

import * as SecureStore from 'expo-secure-store'
import { TOKEN_KEY } from '../utils/constants'
import { useEffect, useState } from 'react'
import { getDeliveriesService } from '../services/deliveries'

export default function useDeliveries() {
  const [deliveries, setDeliveries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [currentfilter, setCurrentFilter] = useState('all')

  const getDeliveries = async () => {
    setLoading(true)
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      const { data, error } = await getDeliveriesService(token)
      if (error) return setError(error)
      setDeliveries(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const filterDeliveries = (deliveries, filter) => {
    if (filter === 'all') return deliveries
    if (filter === 'pending') {
      return deliveries.filter((delivery) => delivery.status === 'pending')
    }
    if (filter === 'onTheWay') {
      return deliveries.filter((delivery) => delivery.status === 'onTheWay')
    }
    if (filter === 'delivered') {
      return deliveries.filter((delivery) => delivery.status === 'delivered')
    }
    if (filter === 'cancelled') {
      return deliveries.filter((delivery) => delivery.status === 'cancelled')
    }
  }

  useEffect(() => {
    getDeliveries()
  }, [])

  const deliveriesFiltered = filterDeliveries(deliveries, currentfilter)

  return {
    deliveries,
    loading,
    error,
    modalVisible,
    setModalVisible,
    currentfilter,
    setCurrentFilter,
    deliveriesFiltered
  }
}

import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react'
import { getDeliveryService } from '../services/deliveries'
import { TOKEN_KEY } from '../utils/constants'

export default function useDelivery(deliveryId) {
  const [delivery, setDelivery] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const getDelivery = async () => {
    setLoading(true)
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      const { data, error } = await getDeliveryService(deliveryId, token)
      if (error) return setErrorMessage(error)
      setDelivery(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDelivery()
  }, [])

  return {
    delivery,
    loading,
    errorMessage,
    setDelivery
  }
}

import { useState } from 'react'
import { CommonActions } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store'
import { BASE_URL, TOKEN_KEY } from '../utils/constants'

export default function useAuth({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(BASE_URL + '/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const { error, token } = await response.json()

      if (error) return setError(error)

      await SecureStore.setItemAsync(TOKEN_KEY, token)

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Deliveries' }]
        })
      )
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
    )
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
    handleLogout,
    loading
  }
}

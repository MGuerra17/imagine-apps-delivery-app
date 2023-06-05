import { View, Pressable, Text, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import useAuth from '../hooks/useAuth'

export default function LoginForm({ navigation }) {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
    loading
  } = useAuth({ navigation })

  return (
    <View className='w-full flex flex-col items-center gap-y-4'>
      <View className='flex flex-row justify-center items-center text-slate-400 w-3/4'>
        <FontAwesome5 name='user-alt' size={20} color='rgb(148 163 184)' />
        <TextInput
          className='w-64 ml-2 border border-slate-300 active:border-orange-500 focus:border-orange-500 rounded-full p-2'
          value={username}
          onChangeText={setUsername}
          placeholder='Username'
          autoCapitalize='none'
        />
      </View>
      <View className='flex flex-row justify-center items-center text-slate-400 w-3/4 mb-8'>
        <FontAwesome5 name='lock' size={20} color='rgb(148 163 184)' />
        <TextInput
          secureTextEntry
          className='w-64 ml-2 border border-slate-300 active:border-orange-500 focus:border-orange-500 rounded-full p-2'
          value={password}
          onChangeText={setPassword}
          placeholder='Password'
        />
      </View>
      <Pressable
        className='w-3/4 py-4 rounded-full bg-orange-400'
        onPress={() => handleLogin()}
      >
        <Text className='text-white font-bold uppercase w-full text-center'>
          {loading ? 'Cargando...' : 'Iniciar sesión'}
        </Text>
      </Pressable>
      {error && (
        <View className='w-3/4 p-4 border border-red-300 bg-red-200 rounded-lg'>
          <Text className='text-red-500 text-center w-full'>{error}</Text>
        </View>
      )}
    </View>
  )
}

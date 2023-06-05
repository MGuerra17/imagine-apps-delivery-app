import { Ionicons } from '@expo/vector-icons'
import { Pressable } from 'react-native'
export default function BackButton({ navigation, color = 'black', to }) {
  return (
    <Pressable
      className='w-9 self-start items-center justify-center'
      onPress={() => (to ? navigation.navigate(to) : navigation.goBack())}
    >
      <Ionicons name='arrow-back' size={24} color={color} />
    </Pressable>
  )
}

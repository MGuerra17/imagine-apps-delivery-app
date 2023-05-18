import { StatusBar } from 'expo-status-bar'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard
} from 'react-native'
import LoginHeader from '../components/LoginHeader.jsx'
import LoginForm from '../components/LoginForm.jsx'

export default function LoginScreen({ navigation }) {
  const handleBlur = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={handleBlur}>
      <SafeAreaView className='flex-1 items-center justify-center'>
        <LoginHeader />
        <View className='h-2/3 w-full flex flex-col items-center justify-start'>
          <Text className='font-bold text-4xl mt-8 mb-2'>Bienvenido</Text>
          <Text className='mb-10'>Inicie sesión para continuar</Text>
          <LoginForm navigation={navigation} />
        </View>
        <StatusBar style='auto' />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

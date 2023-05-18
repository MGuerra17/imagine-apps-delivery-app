import { ImageBackground, View } from 'react-native'
import loginImage from '../assets/delivery-login-2.jpg'

export default function LoginHeader() {
  return (
    <View className='h-1/3 w-full relative'>
      <ImageBackground
        className={`w-[150vw] aspect-square bottom-0 self-center absolute`}
        imageStyle={{ borderRadius: 99999 }}
        source={loginImage}
      />
    </View>
  )
}

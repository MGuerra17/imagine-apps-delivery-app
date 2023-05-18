import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import DeliveriesScreen from './screens/DeliveriesScreen'
import CreateDeliveryScreen from './screens/CreateDeliveryScreen'
import DeliveryScreen from './screens/DeliveryScreen'
import EditDeliveryScreen from './screens/EditDeliveryScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Deliveries' component={DeliveriesScreen} />
        <Stack.Screen name='Delivery' component={DeliveryScreen} />
        <Stack.Screen name='CreateDelivery' component={CreateDeliveryScreen} />
        <Stack.Screen name='EditDelivery' component={EditDeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

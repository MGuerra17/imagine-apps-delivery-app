import { Text, View } from 'react-native'
import { DELIVERY_STATUS } from '../utils/constants'

const BADGE_COLORS = {
  pending: 'gray',
  delivered: 'emerald',
  onTheWay: 'blue',
  cancelled: 'red'
}

export default function StatusBadge({ status }) {
  return (
    <View className={`rounded-full bg-${BADGE_COLORS[status]}-200 px-3 py-1`}>
      <Text className={`text-${BADGE_COLORS[status]}-700 text-xs`}>
        {DELIVERY_STATUS[status]}
      </Text>
    </View>
  )
}

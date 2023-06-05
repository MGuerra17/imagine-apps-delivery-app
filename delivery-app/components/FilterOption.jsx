import { Pressable, Text, View } from 'react-native'

export default function FilterOption({ label, value, selected, onSelect }) {
  return (
    <Pressable
      className={`w-full  rounded-lg border items-start justify-center py-2 my-1 ${
        selected
          ? 'bg-emerald-200 border-emerald-500'
          : 'bg-slate-100 border border-slate-200'
      } `}
      onPress={() => onSelect(value)}
    >
      <Text className='text-lg uppercase w-full text-center'>{label}</Text>
    </Pressable>
  )
}

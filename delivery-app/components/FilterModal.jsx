import { Modal, Pressable, Text, View } from 'react-native'
import { FILTER_OPTIONS } from '../utils/constants'
import FilterOption from './FilterOption'

export default function FilterModal({
  visible,
  setVisible,
  currentfilter,
  setCurrentFilter
}) {
  return (
    <Modal visible={visible}>
      <View className='w-full h-full bg-black bg-opacity-50 items-center justify-center'>
        <View className='w-8/12 h-4/6 bg-white rounded-2xl items-center justify-start p-4'>
          <Text className='text-2xl font-bold self-start'>Filtrar envios</Text>
          <Text className='text-lg my-3 self-start'>Escoger categoria</Text>
          <View className='w-full items-center justify-center gap-y-2 flex-1 '>
            {FILTER_OPTIONS.map(({ label, value }) => {
              return (
                <FilterOption
                  key={value}
                  label={label}
                  value={value}
                  selected={value === currentfilter}
                  onSelect={setCurrentFilter}
                />
              )
            })}
          </View>
          <View className='items-end justify-end w-full'>
            <Pressable
              className='px-3 py-2 bg-orange-400 rounded-full mt-4 items-center justify-center'
              onPress={() => setVisible(false)}
            >
              <Text className='text-white font-bold uppercase w-full text-center'>
                Aplicar
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

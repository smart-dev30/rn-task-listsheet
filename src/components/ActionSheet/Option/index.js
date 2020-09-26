import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './styles'

const Option = ({ option, onChange, isSelected }) => {
  const handlePress = () => {
    onChange(option)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[
        styles.container,
        isSelected && styles.selectedBackground
      ]}>
        <Text style={[
          styles.label,
          isSelected && styles.selectedLabel
        ]}>
          {option.label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Option

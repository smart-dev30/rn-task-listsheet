import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './styles'

const Option = ({ option, onChange, isSelected, isCancel }) => {
  const handlePress = () => {
    onChange(option)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.content,
          isSelected && styles.selectedBackground
        ]}
      >
        <Text style={[
          styles.label,
          isCancel && styles.cancelLabel,
          isSelected && styles.selectedLabel
        ]}>
          {option.label}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Option

import React, { useRef, useState } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'
import ActionSheet from '../ActionSheet'
import noop from 'lodash/noop'

import { styles } from './styles'

const Selector = ({ options, onSelect, onPlus }) => {
  const [selection, setSelection] = useState(null)
  const actionsRef = useRef()

  const handlePress = () => {
    actionsRef.current.show()
  }

  const handleChange = value => {
    setSelection(value)
    onSelect(value)
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>
            {selection ? selection.label : 'Please select'}
          </Text>

          <Image style={styles.iconDown} source={require('images/down.png')} />
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity style={styles.plusButton} onPress={onPlus || noop}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>

      <ActionSheet
        ref={actionsRef}
        options={options || []}
        onChange={handleChange}
      />
    </View>
  )
}

export default Selector

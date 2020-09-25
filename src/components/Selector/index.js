import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'
import noop from 'lodash/noop'

import { styles } from './styles'

const Selector = ({ onSelect, onPlus }) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={onSelect || noop}>
      <View style={styles.button}>
        <Text style={styles.buttonTitle}>Please select</Text>

        <Image style={styles.iconDown} source={require('images/down.png')} />
      </View>
    </TouchableWithoutFeedback>

    <TouchableOpacity style={styles.plusButton} onPress={onPlus || noop}>
      <Text style={styles.plusText}>+</Text>
    </TouchableOpacity>
  </View>
)

export default Selector

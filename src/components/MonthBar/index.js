import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import noop from 'lodash/noop'
import moment from 'moment'

import { styles } from './styles'

const MonthBar = ({ onPressPrev, onPressNext }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPressPrev || noop}>
      <Image
        style={styles.icon}
        source={require('images/left.png')}
      />
    </TouchableOpacity>

    <Text style={styles.title}>{moment().format("MMMM YYYY")}</Text>

    <TouchableOpacity style={styles.button} onPress={onPressNext || noop}>
      <Image
        style={styles.icon}
        source={require('images/right.png')}
      />
    </TouchableOpacity>
  </View>
)

export default MonthBar

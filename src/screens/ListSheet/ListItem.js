import React from 'react'
import { View, Text } from 'react-native'
import { listItemStyles as styles } from './styles'

const ListItem = ({ date }) => {
  const pad = number => (number < 10)
    ? '0' + number.toString()
    : number.toString()

  return (
    <View style={[styles.container, date.day % 2 == 1 && styles.backgroundGrey]}>
      <View style={styles.dayInfo}>
        <Text style={styles.title}>{pad(date.day + 1)}</Text>
        <Text style={styles.description}>{date.weekDay}</Text>
      </View>

      <View style={styles.timeInfo}>
        <Text style={styles.dot}>&#9679;&nbsp;</Text>
        <Text style={styles.description}>10:00 AM - 06:00 PM</Text>
      </View>
    </View>
  )
}

export default ListItem

import React, {useState} from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import moment from 'moment'
import { styles } from './styles'

const MonthBar = ({ date, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(date)

  handlePrevPress = () => {
    const prevDate = moment(selectedDate).add(-1, 'M')
    setSelectedDate(prevDate)
    onChange(prevDate)
  }

  handleNextPress = () => {
    const nextDate = moment(selectedDate).add(1, 'M')
    setSelectedDate(nextDate)
    onChange(nextDate)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePrevPress}>
        <Image
          style={styles.icon}
          source={require('images/left.png')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{selectedDate.format("MMMM YYYY")}</Text>

      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Image
          style={styles.icon}
          source={require('images/right.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default MonthBar

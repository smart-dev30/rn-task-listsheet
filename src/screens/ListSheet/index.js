import React from 'react'
import { View, FlatList } from 'react-native'
import moment from 'moment'
import range from 'lodash/range'
import Header from 'components/Header'
import MonthBar from 'components/MonthBar'
import ListItem from './ListItem'
import { styles } from './styles'

const ListSheet = () => {
  const getWeekName = day => {
    const givenDay = moment().set('date', day + 1)
    return givenDay.format('dddd')
  }

  const days = range(moment().daysInMonth()).map(day => ({
    day,
    weekDay: getWeekName(day),
  }))

  renderItem = ({ item }) => (
    <ListItem date={item} />
  )

  return (
    <View style={styles.container}>
      <Header />

      <MonthBar />

      <FlatList
        data={days}
        renderItem={renderItem}
      />
    </View>
  )
}

export default ListSheet

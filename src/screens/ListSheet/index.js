import React, {useState} from 'react'
import { View, FlatList } from 'react-native'
import moment from 'moment'
import range from 'lodash/range'
import Header from 'components/Header'
import Selector from 'components/Selector'
import MonthBar from 'components/MonthBar'
import ListItem from './ListItem'
import { smallOptions, largeOptions } from 'constants/data'
import { styles } from './styles'

const ListSheet = () => {
  const [date, setDate] = useState(moment())
  
  const getWeekName = day => {
    const givenDay = date.set('date', day + 1)
    return givenDay.format('dddd')
  }

  const days = range(date.daysInMonth()).map(day => ({
    day,
    weekDay: getWeekName(day),
  }))

  keyExtractor = item => `item-${item.day}`

  renderItem = ({ item }) => (
    <ListItem date={item} />
  )

  handleSelectOption = option => {
    console.log(option)
  }

  handleMonthChange = selectedDate => {
    setDate(selectedDate)
    console.log(selectedDate.format())
  }

  return (
    <View style={styles.container}>
      <Header />

      <Selector options={largeOptions} onSelect={handleSelectOption} />

      <MonthBar onChange={handleMonthChange} date={date} />

      <FlatList
        data={days}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  )
}

export default ListSheet

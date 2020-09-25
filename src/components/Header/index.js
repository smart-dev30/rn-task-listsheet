import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import colors from 'constants/colors'
import { styles } from './styles'

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primaryDark} barStyle="light-content" />
      
      <Text style={styles.title}>AVAILABILITIES</Text>
    </View>
  )
}

export default Header

import { StyleSheet } from 'react-native'
import metrics from 'constants/metrics'
import colors from 'constants/colors'

export const styles = StyleSheet.create({
  container: {
    height: metrics.headerHeight,
    backgroundColor: colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  }
})

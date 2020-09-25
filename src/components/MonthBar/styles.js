import { StyleSheet } from 'react-native'
import metrics from 'constants/metrics'
import colors from 'constants/colors'
import spaces from 'constants/spaces'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spaces.medium,
    height: metrics.itemHeight,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: colors.white,
  },

  title: {
    color: colors.primaryText,
    fontSize: 16,
  }
})

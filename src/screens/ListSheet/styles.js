import { StyleSheet } from 'react-native'

import metrics from 'constants/metrics'
import spaces from 'constants/spaces'
import colors from 'constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
})

export const listItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: metrics.itemHeight,
    alignItems: 'center',
    paddingHorizontal: spaces.medium,
  },

  backgroundGrey: {
    backgroundColor: colors.lightGrey,
  },

  dayInfo: {
    flex: 1,
  },

  timeInfo: {
    flexDirection: 'row'
  },

  title: {
    color: colors.primaryText,
    fontWeight: 'bold',
    fontSize: 16,
  },

  dot: {
    color: colors.deepBrown,
  },
  
  description: {
    color: colors.secondaryText,
    fontSize: 14,
  }
})

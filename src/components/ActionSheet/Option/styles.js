import { StyleSheet } from 'react-native'
import colors from 'constants/colors'
import spaces from 'constants/spaces'
import metrics from 'constants/metrics'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: spaces.medium,
    marginVertical: spaces.small,
    padding: spaces.small,
    borderRadius: 20,
    height: metrics.optionHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },

  selectedBackground: {
    backgroundColor: colors.primary,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primaryText,
  },

  selectedLabel: {
    color: colors.white,
  },
})

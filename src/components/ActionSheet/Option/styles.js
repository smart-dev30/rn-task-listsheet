import { StyleSheet } from 'react-native'
import colors from 'constants/colors'
import spaces from 'constants/spaces'
import metrics from 'constants/metrics'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },

  content: {
    borderRadius: 20,
    height: metrics.optionHeight,
    paddingHorizontal: spaces.medium,
    justifyContent: 'center',
  },

  selectedBackground: {
    backgroundColor: colors.primary,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primaryText,
  },

  cancelLabel: {
    color: colors.primaryDark,
  },

  selectedLabel: {
    color: colors.white,
  },
})

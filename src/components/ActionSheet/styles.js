import { StyleSheet } from 'react-native'
import metrics from 'constants/metrics'
import colors from 'constants/colors'
import spaces from 'constants/spaces'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  overlay: {
    backgroundColor: colors.black,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  content: {
    paddingBottom: metrics.bottomSpace,
    paddingHorizontal: spaces.medium,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    paddingVertical: spaces.medium,
  },

  textPrimary: {
    color: colors.textPrimary,
  },

  textCancel: {
    color: colors.primary,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
})

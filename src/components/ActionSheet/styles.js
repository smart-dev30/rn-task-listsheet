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

  list: {

  },

  content: {
    flex: 1,
    paddingVertical: spaces.medium,
    paddingHorizontal: spaces.medium,
    backgroundColor: 'white',
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    paddingHorizontal: spaces.small,
    paddingTop: spaces.small,
    paddingBottom: spaces.small + metrics.bottomSafeHeight,
    backgroundColor: 'white',
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

export const contentContainerStyle = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: spaces.medium,
  }
});
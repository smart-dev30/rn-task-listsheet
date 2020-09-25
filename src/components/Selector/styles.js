import { StyleSheet } from 'react-native'
import metrics from 'constants/metrics'
import colors from 'constants/colors'
import spaces from 'constants/spaces'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spaces.medium,
    alignItems: 'center',
  },

  button: {
    flexDirection: 'row',
    flex: 1,
    height: 36,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spaces.small,
  },

  plusButton: {
    marginLeft: spaces.small,
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconDown: {
    width: 16,
    height: 16,
    tintColor: colors.primary,
  },

  buttonTitle: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
  },

  plusText: {
    color: colors.white,
    fontSize: 20,
  }
})

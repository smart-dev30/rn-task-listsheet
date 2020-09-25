import { StyleSheet } from 'react-native'

import {
  screenWidth,
  screenHeight,
  statusBarHeight,
  statusBarUnsafeHeight,
  bottomSafeHeight,
  headerHeight
} from 'constants/metrics'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: headerHeight,
  },
})


import { Dimensions } from 'react-native'
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window')

const statusBarHeight = getStatusBarHeight(true)
const statusBarUnsafeHeight = getStatusBarHeight()
const bottomSafeHeight = getBottomSpace()

export default {
  screenWidth: width,
  screenHeight: height,

  statusBarHeight,
  statusBarUnsafeHeight,
  bottomSafeHeight,

  headerHeight: 64,
  itemHeight: 60,
}

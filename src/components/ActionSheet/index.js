import React, {
  useState,
  useRef,
  forwardRef,
  useEffect,
  useImperativeHandle
} from 'react'

import {
  Modal,
  ScrollView,
  Animated,
  Easing,
  TouchableWithoutFeedback
} from 'react-native'

import { styles } from './styles'

const ActionSheet = forwardRef(({ onChange, options }, ref) => {
  const [visible, setVisible] = useState(false)

  const translateY = 0

  const sheetAnimation = useRef(new Animated.Value(translateY)).current
  const overlayAnimation = useRef(new Animated.Value(0)).current

  // getSheetContentHeight = () => {
  //   const options = props.options.length * getHeight(Option)
  //   const bottomSpace = getBottomSpace(props, true)
  //   const maxHeight = getMaxHeight(props)

  //   let height = header + options + separators + extraBottomSpace

  //   return height
  // }

  useEffect(() => {
    if (visible) {
      showSheet()
    }
  }, [visible])

  useImperativeHandle(ref, () => ({
    show() {
      setVisible(true)
    },
  }))

  const showSheet = () => {
    console.log('showSheet')
    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnimation, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start()
  }

  hide = value => {
    console.log('hideSheet')
    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: translateY,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(handleHideCallback)

    onChange(value)
  }

  const handleCancel = () => {
    hide(null)
  }

  const handleHideCallback = () => {
    console.log('hideSheet-done')
    setVisible(false)
  }

  const opacityInterpolation = overlayAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.7],
  })
  const overlayStyle = { opacity: opacityInterpolation }

  return (
    <Modal
      visible={visible}
      animationType="none"
      transparent
      onRequestClose={handleCancel}
    >
      <TouchableWithoutFeedback onPress={handleCancel}>
        <Animated.View style={[styles.overlay, overlayStyle]} />
      </TouchableWithoutFeedback>

      <ScrollView style={styles.container}>
        
      </ScrollView>
    </Modal>
  )
})

export default ActionSheet

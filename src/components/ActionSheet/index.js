import React, {
  useState,
  useRef,
  forwardRef,
  useEffect,
  useImperativeHandle
} from 'react'

import {
  Modal,
  View,
  ScrollView,
  Animated,
  Easing,
  TouchableWithoutFeedback
} from 'react-native'

import Option from './Option'
import metrics from 'constants/metrics'
import spaces from 'constants/spaces'
import { cancelOption } from 'constants/data'

import { styles, contentContainerStyle } from './styles'

const ActionSheet = forwardRef(({ onChange, options, selectedOption }, ref) => {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(selectedOption)
  let isScrollEnabled = false

  const getSheetHeight = () => {
    const scrollContent = metrics.optionHeight * options.length + spaces.medium * 2
    const footer = spaces.small * 2 + metrics.bottomSafeHeight + metrics.optionHeight
    const height = scrollContent + footer

    const maxHeight = metrics.screenHeight * 0.8

    isScrollEnabled = height > maxHeight

    return Math.min(height, maxHeight)
  }

  let translateY = getSheetHeight()
  const sheetAnimation = useRef(new Animated.Value(translateY)).current
  const overlayAnimation = useRef(new Animated.Value(0)).current

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
    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnimation, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start()
  }

  const hide = value => {
    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: translateY,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(handleHideCallback)

    if (value) {
      onChange(value)
    }
  }

  const handleCancel = () => {
    hide(null)
  }

  const handleHideCallback = () => {
    setVisible(false)
  }

  const handleOptionChange = option => {
    setSelected(option)
    hide(option)
  }

  const listStyle = {
    height: translateY,
    transform: [{ translateY: sheetAnimation }],
  }
  const opacityInterpolation = overlayAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.4],
  })
  const overlayStyle = { opacity: opacityInterpolation }

  return (
    <Modal
      visible={visible}
      animationType="none"
      transparent
      onRequestClose={handleCancel}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleCancel}>
          <Animated.View style={[styles.overlay, overlayStyle]} />
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.list, listStyle]}>
          <View style={styles.content}>
            <ScrollView contentContainerStyle={contentContainerStyle} scrollEnabled={isScrollEnabled}>
              {
                options.map(option => (
                  <Option
                    key={`option-${option.value}`}
                    option={option}
                    onChange={handleOptionChange}
                    isSelected={selected && (option.value == selected.value)}
                  />
                ))
              }
            </ScrollView>
          </View>

          <View style={styles.footer}>
            <Option
              option={cancelOption}
              onChange={handleCancel}
              isCancel
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
})

export default ActionSheet

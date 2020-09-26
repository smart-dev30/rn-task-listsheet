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

import { cancelOption } from 'constants/data'

import { styles, contentContainerStyle } from './styles'

const ActionSheet = forwardRef(({ onChange, options, selectedOption }, ref) => {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(selectedOption)

  const translateY = 0
  let isScrollEnabled = false

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
    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: 0,
        duration: 100,
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
        duration: 100,
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

          <View style={styles.footer}>
            <Option
              option={cancelOption}
              onChange={handleCancel}
              isCancel
            />
          </View>
        </View>
      </View>
    </Modal>
  )
})

export default ActionSheet

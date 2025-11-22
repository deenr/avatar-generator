import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getPatternSvg } from '../utils/patterns'
import type { Shape, BackgroundType, BackgroundStyle } from '../app/types/avatar'

export const useAvatarStore = defineStore('avatar', () => {
  const textColor = ref<string>("#000033")
  const backgroundColor = ref<string>("#00C16A")
  const font = ref<string>("Arial")
  const fontWeight = ref<string>("400")
  const sizePercentage = ref<number>(40)
  const zoom = ref<number>(100)
  const shape = ref<Shape>('square')

  const backgroundType = ref<BackgroundType>('solid')
  const backgroundColors = ref<string[]>(["#00C16A", "#000000"])
  const backgroundGradientAngle = ref<number>(135)
  const activePattern = ref<string | null>(null)

  const backgroundStyle = computed<BackgroundStyle>(() => {
    if (backgroundType.value === 'solid') {
      return { backgroundColor: backgroundColors.value[0] }
    } else if (backgroundType.value === 'linear') {
      return { background: `linear-gradient(${backgroundGradientAngle.value}deg, ${backgroundColors.value[0]}, ${backgroundColors.value[1]})` }
    } else if (backgroundType.value === 'radial') {
      return { background: `radial-gradient(circle, ${backgroundColors.value[0]}, ${backgroundColors.value[1]})` }
    } else if (backgroundType.value === 'pattern' && activePattern.value) {
      const c2 = backgroundColors.value[1] || '#000000'
      const backgroundImage = getPatternSvg(activePattern.value, c2)

      return {
        backgroundColor: backgroundColors.value[0],
        backgroundImage
      }
    }
    return { backgroundColor: backgroundColors.value[0] }
  })

  return {
    textColor,
    backgroundColor,
    font,
    fontWeight,
    sizePercentage,
    zoom,
    shape,
    backgroundType,
    backgroundColors,
    backgroundGradientAngle,
    activePattern,
    backgroundStyle,
  }
})

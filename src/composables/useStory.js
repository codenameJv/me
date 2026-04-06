import { ref, computed, watch } from 'vue'
import { scenes } from '@/data/scenes.js'
import { startTypingSound, stopTypingSound } from '@/composables/useTypingSound.js'

const mode = ref('story')
const isChatMode = computed(() => mode.value === 'chat')

const currentIndex = ref(0)
const displayedText = ref('')
const isTyping = ref(false)

let timeoutId = null
let charIndex = 0
const CHAR_DELAY = 35

const currentScene = computed(() => scenes[currentIndex.value])
const isBlurred = computed(() => currentScene.value.blurred)
const isLastScene = computed(() => currentIndex.value >= scenes.length - 1)
const speechText = computed(() => currentScene.value.speechText)

function clearTypewriter() {
  clearTimeout(timeoutId)
  timeoutId = null
  charIndex = 0
}

function typeNext(text) {
  if (charIndex < text.length) {
    displayedText.value = text.slice(0, charIndex + 1)
    charIndex++
    timeoutId = setTimeout(() => typeNext(text), CHAR_DELAY)
  } else {
    isTyping.value = false
  }
}

watch(
  speechText,
  (text) => {
    clearTypewriter()
    displayedText.value = ''
    if (!text) {
      isTyping.value = false
      return
    }
    isTyping.value = true
    const delay = currentScene.value.speechDelay ?? 400
    timeoutId = setTimeout(() => {
      startTypingSound(text.length, CHAR_DELAY)
      typeNext(text)
    }, delay)
  },
  { immediate: true }
)

function advance() {
  if (!isLastScene.value) {
    currentIndex.value++
  }
}

function goBack() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function handleInteraction() {
  if (isTyping.value) {
    clearTypewriter()
    stopTypingSound()
    displayedText.value = speechText.value
    isTyping.value = false
  } else if (!isLastScene.value) {
    advance()
  } else {
    mode.value = 'chat'
  }
}

function restartStory() {
  mode.value = 'story'
  currentIndex.value = 0
}

export function useStory() {
  return {
    scenes,
    currentScene,
    currentIndex,
    isBlurred,
    isLastScene,
    displayedText,
    isTyping,
    mode,
    isChatMode,
    handleInteraction,
    goBack,
    restartStory,
  }
}

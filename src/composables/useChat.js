import { ref, computed } from 'vue'
import { greetingMessage, findResponse } from '@/data/chatResponses.js'

const chatDisplayedText = ref('')
const chatIsTyping = ref(false)
const inputText = ref('')

let typewriterTimeoutId = null
let typewriterCharIndex = 0
const CHAR_DELAY = 30

function clearTypewriter() {
  clearTimeout(typewriterTimeoutId)
  typewriterTimeoutId = null
  typewriterCharIndex = 0
}

function typeText(fullText) {
  if (typewriterCharIndex < fullText.length) {
    typewriterCharIndex++
    chatDisplayedText.value = fullText.slice(0, typewriterCharIndex)
    typewriterTimeoutId = setTimeout(() => typeText(fullText), CHAR_DELAY)
  } else {
    chatIsTyping.value = false
    typewriterTimeoutId = null
  }
}

function showResponse(text) {
  clearTypewriter()
  chatDisplayedText.value = ''
  chatIsTyping.value = true
  typewriterCharIndex = 0
  typewriterTimeoutId = setTimeout(() => typeText(text), 100)
}

function skipTyping() {
  if (!chatIsTyping.value) return
  const fullText = chatDisplayedText.value
  // We need the full text — reconstruct from what's being typed
  // Actually let's store it
  clearTypewriter()
  chatIsTyping.value = false
}

// Store the current full response so skip works
let currentFullText = ''

function showResponseFull(text) {
  currentFullText = text
  clearTypewriter()
  chatDisplayedText.value = ''
  chatIsTyping.value = true
  typewriterCharIndex = 0
  typewriterTimeoutId = setTimeout(() => typeText(text), 100)
}

function skipChatTyping() {
  if (!chatIsTyping.value) return
  clearTypewriter()
  chatDisplayedText.value = currentFullText
  chatIsTyping.value = false
}

function sendMessage() {
  const text = inputText.value.trim()
  if (!text || chatIsTyping.value) return
  inputText.value = ''
  const response = findResponse(text)
  showResponseFull(response)
}

function showGreeting() {
  showResponseFull(greetingMessage)
}

export function useChat() {
  return {
    chatDisplayedText,
    chatIsTyping,
    inputText,
    sendMessage,
    skipChatTyping,
    showGreeting,
  }
}

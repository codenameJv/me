import typingSrc from '@/assets/audio/typing-sound.mp3'

const audio = new Audio(typingSrc)
audio.loop = true
audio.volume = 0.4

let stopTimeout = null

export function startTypingSound(charCount, charDelay) {
  clearTimeout(stopTimeout)
  audio.currentTime = 0
  audio.play().catch(() => {})

  const duration = charCount * charDelay
  stopTimeout = setTimeout(() => {
    audio.pause()
    audio.currentTime = 0
  }, duration)
}

export function stopTypingSound() {
  clearTimeout(stopTimeout)
  audio.pause()
  audio.currentTime = 0
}

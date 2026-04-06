import { ref } from 'vue'
import bgMusic from '@/assets/audio/bg-music.mp3'

const audio = new Audio(bgMusic)
audio.loop = true
audio.volume = 0.3

const isPlaying = ref(false)

function play() {
  audio.play().then(() => {
    isPlaying.value = true
  }).catch(() => {})
}

function pause() {
  audio.pause()
  isPlaying.value = false
}

function toggle() {
  if (isPlaying.value) {
    pause()
  } else {
    play()
  }
}

export function useBackgroundMusic() {
  return { isPlaying, play, pause, toggle }
}

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'
import AnimatedCharacter from '@/components/AnimatedCharacter.vue'
import ChatInput from '@/components/ChatInput.vue'
import backgroundImage from '@/assets/background-image/main-background.png'
import { useStory } from '@/composables/useStory.js'
import { useChat } from '@/composables/useChat.js'
import { useBackgroundMusic } from '@/composables/useBackgroundMusic.js'

import { computed } from 'vue'

const { isBlurred, currentScene, isChatMode } = useStory()

const bgPosition = computed(() => isChatMode.value ? 'center center' : currentScene.value.bgPosition)
const bgScale = computed(() => isChatMode.value ? 'scale(1)' : currentScene.value.bgScale)
const bgOrigin = computed(() => isChatMode.value ? 'center center' : currentScene.value.bgOrigin)
const { showGreeting } = useChat()
const { isPlaying, play, toggle } = useBackgroundMusic()

function autoPlay() {
  play()
  window.removeEventListener('click', autoPlay)
  window.removeEventListener('keydown', autoPlay)
}

onMounted(() => {
  play()
  window.addEventListener('click', autoPlay)
  window.addEventListener('keydown', autoPlay)
})

onUnmounted(() => {
  window.removeEventListener('click', autoPlay)
  window.removeEventListener('keydown', autoPlay)
})

watch(isChatMode, (val) => {
  if (val) {
    setTimeout(() => showGreeting(), 800)
  }
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-black">
    <!-- Background with dynamic blur + pan -->
    <div
      class="absolute inset-0 bg-contain bg-center bg-no-repeat md:bg-cover transition-all duration-[1500ms] ease-in-out"
      :class="isBlurred && !isChatMode ? 'blur-md' : 'blur-0'"
      :style="{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: bgPosition,
        transform: bgScale,
        transformOrigin: bgOrigin,
      }"
    />
    <!-- Vignette overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 transition-opacity duration-[1500ms]"
      :class="isBlurred && !isChatMode ? 'opacity-100' : 'opacity-40'"
    />

    <div class="relative z-10 min-h-screen">
      <RouterView />
      <AnimatedCharacter />
      <Transition name="fade-up">
        <ChatInput v-if="isChatMode" />
      </Transition>
    </div>

    <!-- Music toggle -->
    <button
      @click.stop="toggle"
      class="fixed top-4 right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gray-900/70 backdrop-blur-sm text-white/80 transition-colors hover:bg-gray-800/80"
    >
      <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </svg>
    </button>
  </div>
</template>

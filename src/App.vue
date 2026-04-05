<script setup>
import { watch } from 'vue'
import AnimatedCharacter from '@/components/AnimatedCharacter.vue'
import ChatInput from '@/components/ChatInput.vue'
import backgroundImage from '@/assets/background-image/main-background.png'
import { useStory } from '@/composables/useStory.js'
import { useChat } from '@/composables/useChat.js'

import { computed } from 'vue'

const { isBlurred, currentScene, isChatMode } = useStory()

const bgPosition = computed(() => isChatMode.value ? 'center center' : currentScene.value.bgPosition)
const bgScale = computed(() => isChatMode.value ? 'scale(1)' : currentScene.value.bgScale)
const bgOrigin = computed(() => isChatMode.value ? 'center center' : currentScene.value.bgOrigin)
const { showGreeting } = useChat()

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
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useStory } from '@/composables/useStory.js'

const { handleInteraction, goBack, isChatMode } = useStory()

function onKeydown(e) {
  if (isChatMode.value) return
  if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
    e.preventDefault()
    handleInteraction()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    goBack()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <!-- Full-screen click target (above character z-50) -->
  <div
    v-if="!isChatMode"
    class="fixed inset-0 z-[55] cursor-pointer"
    @click="handleInteraction"
  />
</template>

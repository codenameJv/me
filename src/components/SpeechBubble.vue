<script setup>
defineProps({
  displayedText: { type: String, default: '' },
  isTyping: { type: Boolean, default: false },
})
</script>

<template>
  <Transition name="bubble">
    <div
      v-if="displayedText"
      class="relative mb-3 mx-4 max-w-[min(92vw,32rem)] md:max-w-md rounded-2xl border border-white/10 bg-gray-900/85 px-5 py-4 backdrop-blur-sm max-h-[40vh] overflow-y-auto"
    >
      <p class="text-sm leading-relaxed text-white/90 sm:text-base">
        {{ displayedText }}<span
          v-if="isTyping"
          class="ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] bg-white/80 animate-blink"
        />
      </p>
      <!-- Triangle tail -->
      <div
        class="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900/85"
      />
    </div>
  </Transition>
</template>

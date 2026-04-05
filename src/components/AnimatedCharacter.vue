<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import mainCharacter from '@/assets/components/main-character.png'
import SpeechBubble from '@/components/SpeechBubble.vue'
import { useStory } from '@/composables/useStory.js'
import { useChat } from '@/composables/useChat.js'

const { displayedText, isTyping, isLastScene, currentScene, isChatMode } = useStory()
const { chatDisplayedText, chatIsTyping, skipChatTyping } = useChat()

const visible = ref(false)
const isMobile = ref(window.innerWidth < 768)

function onResize() {
  isMobile.value = window.innerWidth < 768
}

const characterOffset = computed(() => {
  if (isChatMode.value) return '0px'
  return isMobile.value
    ? currentScene.value.characterXMobile
    : currentScene.value.characterX
})

// On mobile, counter-translate the bubble so it stays centered even when the character moves
const bubbleCounterOffset = computed(() => {
  if (isChatMode.value || !isMobile.value) return 'none'
  const offset = currentScene.value.characterXMobile
  if (!offset || offset === '0px') return 'none'
  const negated = offset.startsWith('-') ? offset.slice(1) : `-${offset}`
  return `translateX(${negated})`
})

// In chat mode, use chat composable text; in story mode, use story text
const bubbleText = computed(() =>
  isChatMode.value ? chatDisplayedText.value : displayedText.value
)
const bubbleIsTyping = computed(() =>
  isChatMode.value ? chatIsTyping.value : isTyping.value
)

onMounted(() => {
  window.addEventListener('resize', onResize)
  setTimeout(() => {
    visible.value = true
  }, 300)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
    <!-- Speech bubble + character column -->
    <div
      class="flex flex-col items-center transition-all duration-[1200ms] ease-in-out"
      :style="{ transform: `translateX(${characterOffset})` }"
    >
      <!-- Counter-transform on mobile so bubble stays screen-centered (story mode only) -->
      <div
        class="flex flex-col items-center transition-transform duration-[1200ms] ease-in-out"
        :style="{ transform: !isChatMode ? bubbleCounterOffset : 'none' }"
      >
        <SpeechBubble
          :displayed-text="bubbleText"
          :is-typing="bubbleIsTyping"
          :class="isChatMode ? 'pointer-events-auto cursor-pointer' : ''"
          @click="isChatMode && skipChatTyping()"
        />
        <!-- Tap hint (story mode only) -->
        <Transition name="fade-up">
          <p
            v-if="!isChatMode && !isTyping && displayedText"
            class="mb-1 text-xs text-white/40 animate-pulse select-none"
          >
            Tap to continue
          </p>
        </Transition>
      </div>

      <!-- Character image -->
      <img
        :src="mainCharacter"
        alt="Main character"
        class="h-[45vh] sm:h-[50vh] md:h-[60vh] w-auto drop-shadow-md sm:drop-shadow-2xl transition-all duration-[1200ms] ease-out"
        :class="[
          visible ? 'opacity-100 translate-y-0 animate-idle' : 'opacity-0 translate-y-16',
          isChatMode ? 'mb-[60px]' : '',
        ]"
      />
    </div>
  </div>
</template>

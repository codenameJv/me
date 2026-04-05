<script setup>
import { useChat } from '@/composables/useChat.js'

const { inputText, chatIsTyping, sendMessage } = useChat()
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-[60] pointer-events-auto">
    <form
      class="flex items-center gap-2 bg-gray-950/80 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-bottom"
      @submit.prevent="sendMessage"
    >
      <input
        v-model="inputText"
        type="text"
        placeholder="Ask me anything..."
        :disabled="chatIsTyping"
        class="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 placeholder-white/30 outline-none focus:border-amber-500/50 disabled:opacity-40"
        @keydown.stop
      />
      <button
        type="submit"
        :disabled="chatIsTyping || !inputText.trim()"
        class="rounded-full bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-500 disabled:opacity-40 disabled:hover:bg-amber-600"
      >
        Send
      </button>
    </form>
  </div>
</template>

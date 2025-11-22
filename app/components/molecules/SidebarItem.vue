<template>
  <button
    class="flex items-center justify-center size-10 rounded-md transition-all duration-200 cursor-pointer"
    :class="[
      props.active
        ? 'text-primary-600 bg-primary-100'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    ]"
    tabindex="0"
    @click="$emit('select', props.id)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['select']);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <UFieldGroup>
    <UButton
      class="px-2.5"
      color="neutral"
      :variant="shape === 'square' ? 'solid' : 'outline'"
      @click="shape = 'square'"
    >
      <template #leading> <IconSquare class="size-4" /> </template>
    </UButton>
    <UButton
      class="px-2.5"
      color="neutral"
      :variant="shape === 'circle' ? 'solid' : 'outline'"
      @click="shape = 'circle'"
    >
      <template #leading> <IconCircle class="size-4" /> </template>
    </UButton>
  </UFieldGroup>
</template>

<script setup lang="ts">
import { useAvatarStore } from '../../../stores/avatar';

const store = useAvatarStore();
const { shape } = storeToRefs(store);
</script>

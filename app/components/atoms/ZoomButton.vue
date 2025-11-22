<template>
  <UFieldGroup>
    <UButton
      class="px-2.5"
      color="neutral"
      variant="outline"
      @click="zoomOut"
      :disabled="zoom <= 10"
    >
      <template #leading> <IconMinus class="size-4" /> </template>
    </UButton>
    <UButton
      color="neutral"
      variant="outline"
      :label="`${zoom}%`"
      class="pointer-events-none min-w-[60px]"
    />
    <UButton
      class="px-2.5"
      color="neutral"
      variant="outline"
      @click="zoomIn"
      :disabled="zoom >= 200"
    >
      <template #leading> <IconPlus class="size-4" /> </template>
    </UButton>
  </UFieldGroup>
</template>

<script setup lang="ts">
import { useAvatarStore } from '../../../stores/avatar';

const store = useAvatarStore();
const { zoom } = storeToRefs(store);

function zoomIn() {
  if (zoom.value < 200) {
    zoom.value += 10;
  }
}

function zoomOut() {
  if (zoom.value > 10) {
    zoom.value -= 10;
  }
}
</script>

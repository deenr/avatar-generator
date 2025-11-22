<template>
  <div class="py-4">
    <UFormField label="Text" class="w-full">
      <UPopover :ui="{ content: 'w-[223px]' }">
        <UButton
          :label="textColor ? textColor : 'Choose color'"
          class="w-full"
          color="neutral"
          variant="outline"
        >
          <template #leading>
            <span :style="textChipStyle" class="size-3 rounded-full border-gray-200 border" />
          </template>
          <template #trailing>
            <IconChevronDown class="ml-auto size-5 text-dimmed" />
          </template>
        </UButton>
        <template #content>
          <UColorPicker v-model="textColor" class="p-2" />
        </template>
      </UPopover>
    </UFormField>

    <div class="mt-4 border-t border-gray-200 pt-4">
      <p class="text-sm font-medium text-gray-900 mb-2">Background Colors</p>
      <UFormField label="Primary Color" class="w-full">
        <UPopover :ui="{ content: 'w-[223px]' }">
          <UButton
            :label="backgroundColors[0] || 'Choose color'"
            class="w-full"
            color="neutral"
            variant="outline"
          >
            <template #leading>
              <span
                :style="{ backgroundColor: backgroundColors[0] }"
                class="size-3 rounded-full border-gray-200 border"
              />
            </template>
            <template #trailing>
              <IconChevronDown class="ml-auto size-5 text-dimmed" />
            </template>
          </UButton>
          <template #content>
            <UColorPicker v-model="backgroundColors[0]" class="p-2" />
          </template>
        </UPopover>
      </UFormField>

      <UFormField v-if="backgroundType !== 'solid'" label="Secondary Color" class="w-full mt-3">
        <UPopover :ui="{ content: 'w-[223px]' }">
          <UButton
            :label="backgroundColors[1] || 'Choose color'"
            class="w-full"
            color="neutral"
            variant="outline"
          >
            <template #leading>
              <span
                :style="{ backgroundColor: backgroundColors[1] }"
                class="size-3 rounded-full border-gray-200 border"
              />
            </template>
            <template #trailing>
              <IconChevronDown class="ml-auto size-5 text-dimmed" />
            </template>
          </UButton>
          <template #content>
            <UColorPicker v-model="backgroundColors[1]" class="p-2" />
          </template>
        </UPopover>
      </UFormField>

      <UFormField v-if="backgroundType === 'linear'" label="Angle" class="w-full mt-3">
        <USlider
          v-model="backgroundGradientAngle"
          :min="0"
          :max="360"
          :step="1"
          :tooltip="true"
          class="mt-2"
        />
      </UFormField>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAvatarStore } from '../../../stores/avatar';
import { storeToRefs } from 'pinia';

const store = useAvatarStore();
const { textColor, backgroundColors, backgroundType, backgroundGradientAngle } = storeToRefs(store);

const textChipStyle = computed(() => ({ backgroundColor: textColor.value }));
</script>

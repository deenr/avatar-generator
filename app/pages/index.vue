<template>
  <div class="p-5 h-screen bg-gray-100">
    <main class="relative h-full flex items-center justify-center">
      <div class="absolute z-10 inset-0 h-full w-fit">
        <OrganismsSidebar />
      </div>
      <div class="absolute z-10 top-0 right-0 flex flex-row gap-3">
        <AtomsZoomButton />
        <AtomsViewButton />
        <AtomsDownloadButton />
      </div>
      <div
        id="avatar-preview"
        class="flex items-center justify-center size-[480px] overflow-hidden"
        :style="containerStyle"
      >
        <p
          class="w-full h-fit text-center"
          contenteditable="true"
          :style="textStyle"
          onkeypress="return (innerText.length < 3)"
        >
          DR
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAvatarStore } from '../../stores/avatar';

const store = useAvatarStore();
const { textColor, font, sizePercentage, zoom, shape, backgroundStyle, fontWeight } =
  storeToRefs(store);

const containerStyle = computed(() => ({
  ...backgroundStyle.value,
  borderRadius: shape.value === 'circle' ? '50%' : '0',
  transform: `scale(${zoom.value / 100})`,
}));

const textStyle = computed(() => {
  const style: Record<string, string> = {
    color: textColor.value,
    fontFamily: font.value,
    fontSize: `${(sizePercentage.value / 100) * 480}px`,
  };

  if (fontWeight.value && fontWeight.value !== '400') {
    style.fontWeight = fontWeight.value;
  }

  return style;
});
</script>

<template>
  <UButton
    label="Download"
    color="neutral"
    variant="outline"
    :loading="isLoading"
    @click="() => downloadImage('png')"
  >
    <template #leading>
      <IconDownload class="size-4" />
    </template>
  </UButton>
</template>

<script setup lang="ts">
import { toPng, toJpeg } from 'html-to-image';

const isLoading = ref(false);

const items = [
  [
    {
      label: 'Download PNG',
      click: () => downloadImage('png'),
    },
    {
      label: 'Download JPG',
      click: () => downloadImage('jpeg'),
    },
  ],
];

async function downloadImage(format: 'png' | 'jpeg') {
  const element = document.getElementById('avatar-preview');
  console.log(element);
  if (!element) return;

  isLoading.value = true;

  try {
    const options = {
      quality: 0.95,
      width: 480,
      height: 480,
      style: {
        transform: 'scale(1)', // Ensure download is always at 100% scale
      },
    };

    let dataUrl;
    if (format === 'png') {
      dataUrl = await toPng(element, options);
    } else {
      dataUrl = await toJpeg(element, options);
    }

    const link = document.createElement('a');
    link.download = `avatar.${format === 'jpeg' ? 'jpg' : 'png'}`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Failed to download image', error);
  } finally {
    isLoading.value = false;
  }
}
</script>

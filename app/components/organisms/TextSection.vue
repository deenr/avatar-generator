<template>
  <UForm class="py-4">
    <UFormField label="Font" class="w-full">
      <UDropdownMenu :items="fontOptions" :ui="{ content: 'w-[223px] h-64' }">
        <UButton :label="font" class="w-full" color="neutral" variant="outline">
          <template #trailing>
            <IconChevronDown class="ml-auto size-5 text-dimmed" />
          </template>
        </UButton>

        <template #font="{ item }">
          <span class="truncate" :style="item.style">{{ item.value }}</span>
          <span
            v-if="item.value === font"
            data-slot="itemTrailing"
            class="ms-auto inline-flex gap-1.5 items-center"
            ><span
              class="iconify i-lucide:check shrink-0 size-5"
              aria-hidden="true"
              data-slot="itemTrailingIcon"
            ></span
          ></span>
        </template>
      </UDropdownMenu>
    </UFormField>
    <UFormField label="Font Weight" class="w-full mt-4">
      <USelect
        v-model="fontWeight"
        :items="fontWeights"
        option-attribute="label"
        value-attribute="value"
        class="w-full"
      />
    </UFormField>

    <UFormField label="Size" class="w-full mt-4">
      <USlider class="mt-2" v-model="sizePercentage" :tooltip="true" />
      <div class="flex justify-between mt-1">
        <p>0</p>

        <p>100</p>
      </div>
    </UFormField>
  </UForm>
</template>

<script setup lang="ts">
import { useAvatarStore } from '../../../stores/avatar';

const store = useAvatarStore();
const { font, sizePercentage, fontWeight } = storeToRefs(store);

const fontList = [
  'Arial',
  'Anton',
  'Archivo',
  'Bebas Neue',
  'Freeman',
  'Geist',
  'Helvetica',
  'Lato',
  'Merriweather',
  'Montserrat',
  'Open Sans',
  'Oswald',
  'Playfair Display',
  'Poetsen One',
  'Poppins',
  'Radio Canada Big',
  'Raleway',
  'Reddit Sans',
  'Roboto',
  'Roboto Condensed',
  'Roboto Slab',
  'Sedan SC',
  'Times New Roman',
  'Verdana',
];

const fontOptions = computed(() =>
  fontList.map((f, index) => ({
    slot: 'font' as const,
    label: f,
    value: f,
    style: `font-family: ${f}`,
    onSelect() {
      font.value = f;
    },
  }))
);

const fontWeights = [
  { label: 'Thin', value: '100' },
  { label: 'Extra Light', value: '200' },
  { label: 'Light', value: '300' },
  { label: 'Normal', value: '400' },
  { label: 'Medium', value: '500' },
  { label: 'Semi Bold', value: '600' },
  { label: 'Bold', value: '700' },
  { label: 'Extra Bold', value: '800' },
  { label: 'Black', value: '900' },
];
</script>

<style scoped>
:deep(.font-preview-select option) {
  font-family: var(--font-family);
}

:deep(.font-preview-select option[value='Arial']) {
  font-family: Arial;
}
:deep(.font-preview-select option[value='Anton']) {
  font-family: Anton;
}
:deep(.font-preview-select option[value='Archivo']) {
  font-family: Archivo;
}
:deep(.font-preview-select option[value='Bebas Neue']) {
  font-family: 'Bebas Neue';
}
:deep(.font-preview-select option[value='Freeman']) {
  font-family: Freeman;
}
:deep(.font-preview-select option[value='Geist']) {
  font-family: Geist;
}
:deep(.font-preview-select option[value='Helvetica']) {
  font-family: Helvetica;
}
:deep(.font-preview-select option[value='Lato']) {
  font-family: Lato;
}
:deep(.font-preview-select option[value='Merriweather']) {
  font-family: Merriweather;
}
:deep(.font-preview-select option[value='Montserrat']) {
  font-family: Montserrat;
}
:deep(.font-preview-select option[value='Open Sans']) {
  font-family: 'Open Sans';
}
:deep(.font-preview-select option[value='Oswald']) {
  font-family: Oswald;
}
:deep(.font-preview-select option[value='Playfair Display']) {
  font-family: 'Playfair Display';
}
:deep(.font-preview-select option[value='Poetsen One']) {
  font-family: 'Poetsen One';
}
:deep(.font-preview-select option[value='Poppins']) {
  font-family: Poppins;
}
:deep(.font-preview-select option[value='Radio Canada Big']) {
  font-family: 'Radio Canada Big';
}
:deep(.font-preview-select option[value='Raleway']) {
  font-family: Raleway;
}
:deep(.font-preview-select option[value='Reddit Sans']) {
  font-family: 'Reddit Sans';
}
:deep(.font-preview-select option[value='Roboto']) {
  font-family: Roboto;
}
:deep(.font-preview-select option[value='Roboto Condensed']) {
  font-family: 'Roboto Condensed';
}
:deep(.font-preview-select option[value='Roboto Slab']) {
  font-family: 'Roboto Slab';
}
:deep(.font-preview-select option[value='Sedan SC']) {
  font-family: 'Sedan SC';
}
:deep(.font-preview-select option[value='Times New Roman']) {
  font-family: 'Times New Roman';
}
:deep(.font-preview-select option[value='Verdana']) {
  font-family: Verdana;
}
</style>

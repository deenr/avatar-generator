<template>
  <section
    class="relative flex flex-row bg-white h-full w-fit border border-gray-200 rounded-lg"
  >
    <div
      class="absolute bottom-3 -right-5.5 py-2 pr-1 bg-white border border-l-0 border-gray-200 rounded-r-lg cursor-pointer hover:bg-gray-50"
      @click="sidebarOpen = !sidebarOpen"
    >
      <component
        :is="sidebarOpen ? ChevronLeftIcon : ChevronRightIcon"
        class="size-4"
      />
    </div>
    <div class="flex flex-col gap-2 p-3">
      <MoleculesSidebarItem
        v-for="item in sidebarItems"
        :key="item.id"
        :id="item.id"
        :active="activeSidebarId === item.id && sidebarOpen"
        @select="setActiveSidebar(item.id)"
      >
        <component :is="item.component" />
      </MoleculesSidebarItem>
    </div>
    <article
      v-if="sidebarOpen && activeSidebarId"
      class="border-l border-gray-200 w-3xs py-3 px-4"
    >
      <h2 class="text-lg text-gray-900 font-bold">
        {{ activeSidebar?.title }}
      </h2>
      <LazyOrganismsTemplatesSection v-if="activeSidebarId === 'templates'" />
      <LazyOrganismsTextSection v-if="activeSidebarId === 'text'" />
      <LazyOrganismsColorsSection v-else-if="activeSidebarId === 'colors'" />
      <LazyOrganismsBackgroundSection v-else-if="activeSidebarId === 'background'" />
    </article>
  </section>
</template>

<script setup lang="ts">
import {
  LayoutTemplate as IconLayoutTemplate,
  BookType as IconBookType,
  SwatchBook as IconSwatchBook,
  Layers2 as IconLayers2,
  type LucideProps,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

const sidebarItems: {
  id: "templates" | "text" | "colors" | "background";
  title: string;
  component: FunctionalComponent<LucideProps, {}, any, {}>;
}[] = [
  { id: "templates", title: "Templates", component: IconLayoutTemplate },
  { id: "text", title: "Text", component: IconBookType },
  { id: "colors", title: "Colors", component: IconSwatchBook },
  { id: "background", title: "Background", component: IconLayers2 },
];

const sidebarOpen = ref<boolean>(true);

const activeSidebarId = ref<
  "templates" | "text" | "colors" | "background" | null
>(sidebarItems[0]!.id);

const activeSidebar = computed(() =>
  sidebarItems.find((i) => i.id === activeSidebarId.value)
);

function setActiveSidebar(
  id: "templates" | "text" | "colors" | "background"
): void {
  if (id === activeSidebarId.value) {
    activeSidebarId.value = null;
    sidebarOpen.value = false;
  } else {
    activeSidebarId.value = id;
    sidebarOpen.value = true;
  }
}
</script>

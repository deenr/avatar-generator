<template>
  <div class="py-4">
    <h3 class="text-sm font-medium text-gray-900 mb-3">Background Style</h3>
    <div class="grid grid-cols-3 gap-2">
      <button
        v-for="preset in allPresets"
        :key="preset.id"
        class="aspect-square rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 overflow-hidden relative"
        :class="{
          'ring-2 ring-primary-500 ring-offset-2': isSelected(preset),
        }"
        @click="applyPreset(preset)"
      >
        <div class="size-full" :style="getPreviewStyle(preset)" />
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity"
        >
          <span class="text-xs text-white font-medium text-center px-1">{{ preset.name }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAvatarStore } from '../../../stores/avatar';
import { storeToRefs } from 'pinia';
import { getPatternSvg } from '../../../utils/patterns';
import { usePatterns } from '../../composables/usePatterns';

const store = useAvatarStore();
const { backgroundType, backgroundColors, backgroundGradientAngle, activePattern } =
  storeToRefs(store);

type Preset = {
  id: string;
  name: string;
  type: 'solid' | 'linear' | 'radial' | 'pattern';
  angle?: number;
  patternId?: string;
  colors: string[];
};

const basePresets: Preset[] = [
  { id: 'solid', name: 'Solid', type: 'solid', colors: ['#6366f1', '#000000'] },
  {
    id: 'linear-vertical',
    name: 'Vertical',
    type: 'linear',
    angle: 0,
    colors: ['#f43f5e', '#8b5cf6'],
  },
  {
    id: 'linear-horizontal',
    name: 'Horizontal',
    type: 'linear',
    angle: 90,
    colors: ['#22c55e', '#eab308'],
  },
  {
    id: 'radial',
    name: 'Radial',
    type: 'radial',
    colors: ['#60a5fa', '#1e3a8a'],
  },
];

const { patterns } = usePatterns();

const patternColorSchemes: Record<string, string[]> = {
  'dots': ['#fef3c7', '#f59e0b'],
  'lines': ['#dbeafe', '#3b82f6'],
  'checkers': ['#fce7f3', '#ec4899'],
  'circles': ['#e0e7ff', '#818cf8'],
  'tic-tac-toe': ['#d1fae5', '#10b981'],
  'waves': ['#cffafe', '#06b6d4'],
  'zigzag': ['#fce4ec', '#f43f5e'],
  'grid': ['#e5e7eb', '#6b7280'],
  'crosses': ['#fed7aa', '#f97316'],
  'diagonal-lines': ['#ddd6fe', '#8b5cf6'],
};

const patternPresets = computed<Preset[]>(() => {
  if (!patterns.value) return [];
  return patterns.value.map((p) => ({
    id: `pattern-${p.id}`,
    name: p.name,
    type: 'pattern',
    patternId: p.id,
    colors: patternColorSchemes[p.id] || ['#f3f4f6', '#9ca3af'],
  }));
});

const allPresets = computed(() => [...basePresets, ...patternPresets.value]);

function isSelected(preset: Preset) {
  if (backgroundType.value !== preset.type) return false;
  if (preset.type === 'linear') return backgroundGradientAngle.value === preset.angle;
  if (preset.type === 'pattern') return activePattern.value === preset.patternId;
  return true;
}

function applyPreset(preset: Preset) {
  backgroundType.value = preset.type;
  backgroundColors.value = [...preset.colors];
  if (preset.angle !== undefined) {
    backgroundGradientAngle.value = preset.angle;
  }
  if (preset.patternId) {
    activePattern.value = preset.patternId;
  }
}

function getPreviewStyle(preset: Preset) {
  const isPresetSelected = isSelected(preset);
  const c1 = isPresetSelected ? backgroundColors.value[0] : preset.colors[0];
  const c2 = isPresetSelected ? backgroundColors.value[1] : preset.colors[1];

  if (preset.type === 'solid') {
    return { backgroundColor: c1 };
  } else if (preset.type === 'linear') {
    return {
      background: `linear-gradient(${preset.angle}deg, ${c1}, ${c2})`,
    };
  } else if (preset.type === 'radial') {
    return {
      background: `radial-gradient(circle, ${c1}, ${c2})`,
    };
  } else if (preset.type === 'pattern' && preset.patternId && c2) {
    const backgroundImage = getPatternSvg(preset.patternId, c2, 20);
    return {
      backgroundColor: c1,
      backgroundImage,
    };
  }
  return {};
}
</script>

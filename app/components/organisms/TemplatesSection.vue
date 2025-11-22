<template>
  <div class="py-4">
    <h3 class="text-sm font-medium text-gray-900 mb-3">Templates</h3>
    <div class="grid grid-cols-2 gap-2">
      <button
        v-for="template in templates"
        :key="template.id"
        class="aspect-square rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 overflow-hidden relative hover:border-primary-500 transition-colors"
        @click="applyTemplate(template)"
      >
        <div class="size-full flex items-center justify-center" :style="getTemplateStyle(template)">
          <span :style="getTextStyle(template)">{{ getTemplateInitials(template.name) }}</span>
        </div>
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
          <span class="text-xs text-white font-medium">{{ template.name }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAvatarStore } from '../../../stores/avatar';
import { getPatternSvg } from '../../../utils/patterns';
import type { AvatarTemplate, BackgroundStyle } from '../../types/avatar';

const store = useAvatarStore();

const templates: AvatarTemplate[] = [
  {
    id: 'modern-green',
    name: 'Modern Green',
    textColor: '#ffffff',
    font: 'Arial',
    fontWeight: '700',
    sizePercentage: 45,
    shape: 'circle',
    backgroundType: 'linear',
    backgroundColors: ['#10b981', '#059669'],
    backgroundGradientAngle: 0,
  },
  {
    id: 'vibrant-purple',
    name: 'Purple Vibe',
    textColor: '#ffffff',
    font: 'Arial',
    fontWeight: '600',
    sizePercentage: 40,
    shape: 'circle',
    backgroundType: 'linear',
    backgroundColors: ['#8b5cf6', '#6366f1'],
    backgroundGradientAngle: 90,
  },
  {
    id: 'ocean-wave',
    name: 'Ocean',
    textColor: '#1e40af',
    font: 'Arial',
    fontWeight: '600',
    sizePercentage: 42,
    shape: 'circle',
    backgroundType: 'pattern',
    backgroundColors: ['#dbeafe', '#3b82f6'],
    activePattern: 'waves',
  },
  {
    id: 'minimal-dots',
    name: 'Minimal',
    textColor: '#1f2937',
    font: 'Arial',
    fontWeight: '500',
    sizePercentage: 38,
    shape: 'circle',
    backgroundType: 'pattern',
    backgroundColors: ['#f3f4f6', '#9ca3af'],
    activePattern: 'dots',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    textColor: '#ffffff',
    font: 'Arial',
    fontWeight: '700',
    sizePercentage: 44,
    shape: 'circle',
    backgroundType: 'radial',
    backgroundColors: ['#f97316', '#dc2626'],
  },
  {
    id: 'corporate',
    name: 'Corporate',
    textColor: '#ffffff',
    font: 'Arial',
    fontWeight: '600',
    sizePercentage: 40,
    shape: 'square',
    backgroundType: 'solid',
    backgroundColors: ['#1e3a8a', '#000000'],
  },
];

function applyTemplate(template: AvatarTemplate) {
  store.textColor = template.textColor;
  store.font = template.font;
  store.fontWeight = template.fontWeight;
  store.sizePercentage = template.sizePercentage;
  store.shape = template.shape;
  store.backgroundType = template.backgroundType;
  store.backgroundColors = [...template.backgroundColors];
  
  if (template.backgroundGradientAngle !== undefined) {
    store.backgroundGradientAngle = template.backgroundGradientAngle;
  }
  
  if (template.activePattern !== undefined) {
    store.activePattern = template.activePattern;
  }
}

function getTemplateStyle(template: AvatarTemplate): BackgroundStyle {
  if (template.backgroundType === 'solid') {
    return { backgroundColor: template.backgroundColors[0] };
  } else if (template.backgroundType === 'linear') {
    const angle = template.backgroundGradientAngle || 0;
    return {
      background: `linear-gradient(${angle}deg, ${template.backgroundColors[0]}, ${template.backgroundColors[1]})`,
    };
  } else if (template.backgroundType === 'radial') {
    return {
      background: `radial-gradient(circle, ${template.backgroundColors[0]}, ${template.backgroundColors[1]})`,
    };
  } else if (template.backgroundType === 'pattern' && template.activePattern) {
    const backgroundImage = getPatternSvg(template.activePattern, template.backgroundColors[1], 20);
    return {
      backgroundColor: template.backgroundColors[0],
      backgroundImage,
    };
  }
  return {};
}

function getTextStyle(template: AvatarTemplate) {
  return {
    color: template.textColor,
    fontFamily: template.font,
    fontWeight: template.fontWeight,
    fontSize: '32px',
  };
}

function getTemplateInitials(name: string): string {
  const words = name.split(' ');
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}
</script>

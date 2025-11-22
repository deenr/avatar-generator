<template>
  <button
    :class="[
      'px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2',
      variantClasses[variant],
      sizeClasses[size],
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
});

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const variantClasses = {
  primary: 'bg-emerald-500 text-white hover:bg-emerald-600',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  outline: 'border-2 border-gray-200 text-gray-700 hover:border-emerald-500 hover:text-emerald-500',
  ghost: 'text-gray-600 hover:bg-gray-100',
};

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg px-6 py-3',
};
</script>

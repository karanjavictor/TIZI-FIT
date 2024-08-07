<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        required: true
    }
})
</script>
<template>
    <div v-if="show" class="fixed inset-0 flex justify-center items-center h-screen bg-white space-x-4 opacity-80">
      <div class="p-6 text-center md:p-12">
        <div class="w-12 h-12 border-t-2 items-center mx-auto border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
</template>
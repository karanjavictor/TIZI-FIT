<script setup>
import Workouts from '@/components/Workouts.vue'
</script>
<template>
    <Workouts />
    <section class="container mx-auto p-4 block  mt-10 space-y-4 mb-20">
        <h1 class="text-3xl font-bold">Recommended Fitness Plans</h1>
        <div class="flex flex-col md:flex-row flex-1 justify-between">
            <div class="relative space-y-4 p-6 shadow-lg rounded md:w-1/2 lg:w-1/4 cursor-pointer hover:shadow-2xl">
                <img src="/images/2150404901.jpg" alt="" class="object-fit">
                <p class="flex items-center justify-start">90 day plan</p>
                <button class="p-2 bg-blue-700 text-white rounded hover:bg-blue-500">Start plan</button>
                <span class="absolute flex right-0 top-0 bg-rose-100 p-2 space-x-2 rounded opacity-90">
                    <small>Lifestyle Verified</small>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>
            </div>
            <div class="relative space-y-4 p-6 shadow-lg rounded md:w-1/2 lg:w-1/4 cursor-pointer hover:shadow-2xl">
                <img src="/images/2150404901.jpg" alt="" class="object-fit">
                <p class="flex items-center justify-start">30 day plan</p>
                <button class="p-2 bg-blue-700 text-white rounded hover:bg-blue-500">Start plan</button>
                <span class="absolute flex right-0 top-0 bg-sky-100 p-2 space-x-2 rounded opacity-90">
                    <small class="text-xs">Nutritionist Verified</small>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>
            </div>
            <div class="relative space-y-4 p-6 shadow-lg rounded md:w-1/2 lg:w-1/4 cursor-pointer hover:shadow-2xl">
                <img src="/images/2150404901.jpg" alt="" class="object-fit">
                <p class="flex items-center justify-start">Crossfit</p>
                <button class="p-2 bg-blue-700 text-white rounded hover:bg-blue-500">Start plan</button>
                <span class="absolute flex right-0 top-0 bg-lime-100 p-2 space-x-2 rounded opacity-90">
                    <small>Expert Verified</small>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>
            </div>
        </div>
    </section>
</template>
<script setup>
import MealPlans from '@/components/MealPlans.vue'
import Videos from '@/components/Videos.vue'
</script>
<template>
    <section class="container mx-auto p-4 block  mt-10 space-y-4 mb-20">
        <div class="block relative">
            <div class="flex flex-col lg:flex-row space-x-4 p-4">
                <img src="/images/2150404901.jpg" alt="" class="object-fit lg:w-1/2">
                <div class="block p-4">
                    <div class="block space-y-2">
                        <h2 class="text-lime-500">Day 1</h2>
                        <h1 class="text-xl font-bold underline">WARM UP</h1>
                        <p>5 rounds of:</p>
                        <ol class="px-6">
                            <li class="list-item list-disc">10 Burpees, 15 Kettlebell Swings, 20 Air Squats, 25 Sit-Ups
                            </li>
                        </ol>
                        <h1 class="text-xl font-bold underline">WORKOUT OF THE DAY</h1>
                        <p>5 rounds of:</p>
                        <ol class="px-6">
                            <li class="list-item list-disc">10 Burpees, 15 Kettlebell Swings, 20 Air Squats, 25 Sit-Ups
                            </li>
                        </ol>
                        <h1 class="text-xl font-bold underline">COOLDOWN</h1>
                        <p>5 rounds of:</p>
                        <ol class="px-6">
                            <li class="list-item list-disc">10 Burpees, 15 Kettlebell Swings, 20 Air Squats, 25 Sit-Ups
                            </li>
                        </ol>
                        <div class="flex justify-center items-center">
                            <button class="p-2 border rounded text-white mt-10 bg-blue-700 w-3/4 md:w-1/2 hover:bg-blue-500">Mark As Completed</button>
                        </div>
                    </div>

                </div>
            </div>
            <MealPlans />
            <Videos />
            <span class="absolute left-2 top-2 flex items-center justify-center z-50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-20 text-black bg-blue-300 opacity-80 rounded-full border hover:ring">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </span>
            <span class="absolute right-2 top-2 flex items-center justify-center z-50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-20 text-black bg-blue-300 opacity-80 rounded-full border hover:ring">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </div>
    </section>

</template>
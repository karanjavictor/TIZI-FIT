<script setup>
import MealPlans from '@/components/MealPlans.vue'</script>
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
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                        </ol>
                        <h1 class="text-xl font-bold underline">WORKOUT OF THE DAY</h1>
                        <p>5 rounds of:</p>
                        <ol class="px-6">
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                        </ol>
                        <h1 class="text-xl font-bold underline">COOLDOWN</h1>
                        <p>5 rounds of:</p>
                        <ol class="px-6">
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                            <li class="list-item list-disc">1-minute box jumps</li>
                        </ol>
                    </div>

                </div>
            </div>
            <MealPlans />
            <span class="absolute left-2 top-2 flex items-center justify-center z-50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 text-black bg-blue-200 opacity-80 rounded-full border">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </span>
            <span class="absolute right-2 top-2 flex items-center justify-center z-50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 text-black bg-blue-200 opacity-80 rounded-full border">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </div>
    </section>

</template>
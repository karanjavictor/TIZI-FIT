<script setup></script>
<template>
    <nav class="relative flex justify-around items-center mx-auto p-6 border-2">
        <img src="" alt="LOGO">
        <div class="hidden space-x-4 px-10 md:flex">
            <router-link to="/login" class="p-2 hover:text-blue-500">Home</router-link>
            <router-link to="" class="p-2 hover:text-blue-500 active:text-blue-500">Plans</router-link>
            <router-link to="" class="p-2 hover:text-blue-500 active:text-blue-500">Nutrition</router-link>
            <router-link to="/login" class="border py-2 px-4 rounded bg-blue-700 text-white">Login</router-link>
        </div>
    </nav>
</template>
<script setup></script>
<template>
    <h1 class="p-4 text-center text-lg underline font-bold mt-4">VIDEO GALLERY</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start box-border p-0 md:p-2 lg:p-4">
        <div class="rounded p-2">
            <div class="w-full rounded">
                <video src="/videos/fitness01.mp4" controls muted autoplay></video>
                <h3 class="p-4">01. video title goes here</h3>
            </div>
        </div>
        <div class="video-list rounded h-[520px] overflow-y-scroll">
            <div class="flex items-center gap-4 m-2 p-4 rounded border cursor-pointer shadow hover:bg-gray-100">
                <video class="w-1/4 rounded" src="/videos/fitness01.mp4" muted></video>
                <h3 class="px-4">01. video title goes here</h3>
            </div>
            <div class="flex items-center gap-4 m-2 p-4 rounded border cursor-pointer shadow hover:bg-gray-100">
                <video class="w-1/4 rounded" src="/videos/fitness01.mp4" muted></video>
                <h3 class="px-4">01. video title goes here</h3>
            </div>
        </div>
    </div>
</template>
<style scoped>
.video-list::-webkit-scrollbar {
    width: 7px;
}
.video-list::-webkit-scrollbar-track{
    background: #ccc;
    border-radius: 5px;  
}
.video-list::-webkit-scrollbar-thumb{
    background: #666;
    border-radius: 50px;
}
</style>
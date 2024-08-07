<script setup>
import Spinner from '../components/Spinner.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const formData = ref({
  email: '',
  password: ''
});
const show = ref(false)
const toggle = ref(false);
const togglePassword = () => {
    toggle.value = !toggle.value;
    return toggle.value;
}

const login = async () => {
  show.value = true;
    try {
    const response = await axios.post('/api/login', formData.value, 
    {
      withCredentials: true
    });
    const { data: { message, name } } = response;
    formData.value.email = '';
    formData.value.password = '';
    toast.fire({icon: "success", title: message});
    router.push({ name: 'home' });
  } catch (error) {
    if (error.response) {
        if(error.response.data.error){
            toast.fire({icon: "error", title: error.response.data.error})
        } else {
            toast.fire({icon: "error", title: error.response.data[0]})
        }
    } else if (error.request) {
      toast.fire({icon: "error", title: "Network error or server not available"})
    } else {
      toast.fire({icon: "error", title: "An error occurred"});
    }
  } finally {
    show.value = false;
  }
}

</script>
<template>
    <div class="flex justify-center items-center m-2 py-6 px-2 md:p-16 md:my-2 md:mx-auto max-w-3xl">
    <form @submit.prevent="login" class="w-full my-0 mx-auto border rounded-md p-6 shadow-xl space-y-6 md:w-4/5">
      <span class="text-xl">LOGIN</span>
      <div class="space-y-2">
        <label for="">Email</label>
        <input type="text" name="email" class="w-full h-10 border-2 px-2" autocomplete="off" v-model="formData.email" placeholder="Email" required />
      </div>
      <div class="space-y-2">
        <label for="">Password</label>
        <div class="relative flex" v-show="!toggle">
            <input type="password" name="password" autocomplete="current-password" v-model="formData.password" placeholder="Password" class="w-full h-10 border-2 px-2" required />
            <span class="absolute right-0 p-2 cursor-pointer" @click="togglePassword">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            </span>
        </div>
        <div class="relative flex" v-show="toggle">
            <input type="text" v-model="formData.password" placeholder="Password" class="w-full h-10 border-2 px-2" required />
            <span class="absolute right-0 p-2 cursor-pointer" @click="togglePassword">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </span>
        </div>
      </div>
      <button type="submit"
        class="flex justify-center items-center border rounded p-5 w-full bg-blue-600 text-white hover:bg-blue-500">LOGIN</button>
      <p>Don't have an account? <router-link to="/register"
          class="text-blue-600 hover:text-blue-500">Register</router-link></p>
    </form>
  </div>
  <Spinner :show="show" />
</template>
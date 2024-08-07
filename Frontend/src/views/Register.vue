<script setup>
import Spinner from '../components/Spinner.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter();
const formData = ref({
  email: ''
})
const show = ref(false);
const sendEmail = async () => {
  try {
    show.value = true;
    const response = await axios.post('/api/register', formData.value, 
    {
      withCredentials: true
    });
    const { data: { message } } = response;
    formData.value.email = '';
    toast.fire({icon: "success", title: message})
  } catch (error) {
    if (error.response) {
      toast.fire({icon: "error", title: error.response.data.error})
    } else if (error.request) {
      toast.fire({icon: "error", title: 'Network error or server not available'})
    } else {
      toast.fire({icon: "error", title: 'An error occurred'})
    }
  } finally {
    show.value = false;
  }
}
</script>
<template>
    <div class="flex justify-center items-center m-2 py-6 px-2 md:p-16 md:my-2 md:mx-auto max-w-3xl">
    <form @submit.prevent="sendEmail" class="w-full my-0 mx-auto border rounded-md p-6 shadow-xl space-y-6 md:w-4/5">
      <span class="text-xl">Sign Up</span>
      <div class="space-y-2">
        <label for="">Email</label>
        <input type="text" name="email" class="w-full h-10 border-2 px-2" v-model="formData.email" placeholder="Email" required />
      </div>
      <button type="submit"
        class="flex justify-center items-center border rounded p-5 w-full bg-blue-600 text-white hover:bg-blue-500">Send Email</button>
        <p class="flex justify-end">Already have an account? <router-link to="/login"
            class="pl-2 text-blue-600 hover:text-blue-500 underline">Sign In</router-link></p>
    </form>
  </div>
  <Spinner :show="show" />
</template>
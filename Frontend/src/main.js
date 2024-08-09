import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swal from 'sweetalert2'

const app = createApp(App)
window.Swal = Swal
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
})

app.use(router)
window.toast = toast
app.mount('#app')

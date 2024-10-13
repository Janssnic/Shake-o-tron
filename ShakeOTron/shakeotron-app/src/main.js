import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from "primevue/button"
import Aura from '@primevue/themes/aura';
import SelectButton from 'primevue/selectbutton';


const app = createApp(App);

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.dark',
            cssLayer: false
        }
    }
 });
app.component('PrimeButton', Button);
app.component('SelectButton', SelectButton);
app.mount('#app')
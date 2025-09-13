import { createApp } from 'vue'
import Application from '@/Application.vue'
import Router from '@/router'

createApp(Application)
.use(Router)
.mount('body')

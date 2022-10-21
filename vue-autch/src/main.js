import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD648e3h21IvZB_ZK_wQu3ymd1TcQGE6k8",
    authDomain: "my-vue-logiin.firebaseapp.com",
    projectId: "my-vue-logiin",
    storageBucket: "my-vue-logiin.appspot.com",
    messagingSenderId: "64792290310",
    appId: "1:64792290310:web:37cd337b35658b1bec4f87"
  };


firebase.initializeApp(firebaseConfig);
  
createApp(App).use(router).mount('#app')

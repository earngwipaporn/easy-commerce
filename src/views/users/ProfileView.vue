<script setup>
import { reactive, onMounted } from 'vue'
import UserLayout from '@/layouts/UserLayout.vue'

import { useProfileStore } from '@/stores/user/profile'

const profileStore = useProfileStore()

const userData = reactive({
    imageUrl: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1699494531~exp=1699495131~hmac=d539de6fba62aefde9d730d3bd60abeb489772e9bdcce56d08063e052d8cc800',
    name: '',
    email: ''
})

const handleFileUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            userData.imageUrl = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const updateProfile = () => {
    profileStore.users.imageUrl = userData.imageUrl
    profileStore.users.name = userData.name
    profileStore.users.email = userData.email

    localStorage.setItem('profile-data', JSON.stringify(profileStore.users))
}

onMounted (() => {
    const savedProfileData = localStorage.getItem('profile-data')
    
    if (savedProfileData) {
        const userProfile = JSON.parse(savedProfileData)
        userData.imageUrl = userProfile.imageUrl
        userData.name = userProfile.name
        userData.email = userProfile.email
    }
})
</script>

<template>
    <UserLayout>
        <div class="max-w-2xl mx-auto border border-base-200 shadow-xl my-10 p-6">
            <div>
                <h1 class="text-2xl font-bold">Your Profile</h1>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <div class="avatar w-24 h-24">
                    <img class="rounded-full"
                        :src="userData.imageUrl">
                </div>
                <div>
                    <input type="file" @change="handleFileUpload">
                </div>
                <div class="form-control w-full">
                    <label class="label">Email</label>
                    <input v-model="userData.email" class="input input-bordered" type="text" placeholder="Type here">
                    <label class="label">Name</label>
                    <input v-model="userData.name" class="input input-bordered" type="text" placeholder="Type here">
                    <button class="btn btn-neutral mt-6" @click="updateProfile">UPDATE PROFILE</button>
                </div>
            </div>

        </div>
    </UserLayout>
</template>
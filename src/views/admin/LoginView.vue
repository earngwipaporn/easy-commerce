<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="h-screen flex items-center">
    <div class="flex-1 max-w-3xl shadow-xl mx-auto p-8">
        <div class="flex flex-col items-center">
            <h1 class="font-bold text-3xl text-center">Login</h1>
            <div class="form-control w-full">
                <label class="label">Email id</label>
                <input type="text" class="input input-bordered w-full" placeholder="Your email">
                <label class="label">Password</label>
                <input type="password" class="input input-bordered w-full" placeholder="Your password">
            </div>
            <RouterLink :to="{name: 'admin-dashboard'}" class="btn btn-neutral w-full mt-6">Login</RouterLink>
        </div>
    </div>        
    </div>

</template>
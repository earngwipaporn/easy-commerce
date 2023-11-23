<script setup>
import { reactive, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import { useCartStore } from '@/stores/user/cart';

const cartStore = useCartStore()

const formData = [
    {
        name: 'Email address',
        field: 'email'
    },
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Address',
        field: 'address'
    },
    {
        name: 'Note',
        field: 'note'
    }
]

const userFormData = reactive({
    email: '',
    name: '',
    address: '',
    note: ''
})

const router = useRouter()

const payment = () => {
    cartStore.placeorder(userFormData)
    router.push({name:'success'})
}
</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">Checkout</h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200">
                <div class="m-4 p-2">
                    <div v-for="form in formData" class="form-control w-full">
                        <label class="label">
                            <span class="label-text">{{ form.name }}</span>
                        </label>
                        <input v-if="form.name!=='Address'" v-model="userFormData[form.field]" class="input input-border" type="text" placeholder="Type here">
                        <textarea v-else="form.name!=='Address'" v-model="userFormData[form.field]" class="textarea textarea-bordered" type="text" placeholder="Type here"></textarea>
                    </div>
                    <button class="btn btn-neutral w-full mt-6" @click="payment">Check out</button>
                </div>
            </section>
            <section class="flex-auto w-32 bg-slate-200">
                <div class="m-4 p-2">
                    <div v-for="item in cartStore.items" class="flex mb-4 bg-base-100">
                        <div class="flex-1">
                            <div class="w-full">
                                <img class="p-2 w-1/2"
                                    :src="item.imageUrl">
                            </div>
                        </div>
                        <div class="flex-1 relative">
                            <div>
                                <div><b>{{ item.name }}</b></div>
                                <div><b>quantity:</b> {{ item.quantity }}</div>
                                <RouterLink :to="{name:'cart'}"><div class="absolute bottom-0 underline font-bold">Edit</div></RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div>
                        <div class="text-xl font-bold mb-4">Order Summary</div>
                        <div class="flex">
                            <div class="flex-auto">
                                <div class="mb-2"><b>Total price</b></div>
                                <div class="mb-2"><b>Delivery fee</b></div>
                            </div>
                            <div class="flex-auto text-right">
                                <div class="mb-2">{{ cartStore.summaryPrice }}</div>
                                <div class="mb-2">0</div>
                            </div>
                        </div>

                    </div>
                    <div class="divider"></div>
                    <div class="flex">
                        <div class="flex-auto">
                            <div class=""><b>Overall price</b></div>
                        </div>
                        <div class="flex-auto text-right">
                            <div class="">{{ cartStore.summaryPrice }}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </UserLayout>
</template>
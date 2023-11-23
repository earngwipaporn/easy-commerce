<script setup>
import { ref, onMounted } from 'vue'

import UserLayout from '@/layouts/UserLayout.vue'
import { useCartStore } from '@/stores/user/cart';

const cartStore = useCartStore()
const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
})
</script>

<template>
    <UserLayout>
        <div class="max-w-2xl mx-auto border border-base-200 shadow-xl my-10 p-6">
            <div>
                <h1 class="text-2xl font-bold pb-2">Your Order is successful!</h1>
                <div>
                    <p>Hi! {{ orderData.name }}</p>
                    <p>prepare to receive your product</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-4 gap-2 m-4">
                <div>
                    <div class="font-bold">Order date</div>
                    <div>{{ orderData.createdData }}</div>
                </div>
                <div>
                    <div class="font-bold">Order Number</div>
                    <div>{{ orderData.orderNumber }}</div>
                </div>
                <div>
                    <div class="font-bold">Payment Method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold text-right">Address</div>
                    <div class="text-right">{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 m-4 items-center">
                <img class="w-full" :src=" product.imageUrl">
                <div class="font-bold">{{ product.name }}</div>
                <div>{{ product.quantity }}</div>
                <div class="text-right">{{ product.price }}</div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2 m-4">
                <div>
                    <div class="font-bold">Total Price</div>
                    <div class="font-bold">Delivery Fee</div>
                </div>
                <div class="text-right">
                    <div>{{ orderData.totalPrice }}</div>
                    <div>0</div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2 m-4">
                <div class="right">
                    <div class="font-bold">Overall Price</div>
                </div> 
                <div class="text-right">
                    {{ orderData.totalPrice }}
                </div> 
            </div>
            <div class="divider"></div>
            <div class="m-4 text-center">-Thank you for your support-</div>
        </div>
    </UserLayout>
</template>
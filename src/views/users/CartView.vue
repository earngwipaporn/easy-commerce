<script setup>
import { RouterLink } from 'vue-router' 
import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}
</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
        <div class="flex">
            <div class="flex-auto w-64 bg-base-200 p-4">
                <div v-if="cartStore.items.length === 0">Cart is empty</div>
                <div v-else class="flex" v-for="(item, index) in cartStore.items">
                    <div class="flex-1 ">
                        <img class="w-full p-10"
                            :src='item.imageUrl'>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div class="relative grid grid-cols-2 m-4">
                                    <div>
                                        <div class="font-bold">{{ item.name }}</div>
                                        <div>{{ item.about }}</div>
                                        <div>{{ item.price }}</div>
                                    </div>
                                    <div>
                                        <select v-model="item.quantity" @change="changeQuantity($event, index)" class="p-2 w-1/2">
                                            <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
                                        </select>
                                    </div>
                                    <div class="absolute top-0 right-0">
                                        <Close @click="cartStore.removeItemInCart(index)"></Close>
                                    </div>
                                </div>
                            </div>
                            <div class="flex font-bold">
                                In-stock
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="text-xl flex-auto w-64 bg-slate-200 p-4">
                <div class="text-xl  font-bold">Order Summary</div>
                <div class="my-4 divide-y divide-slate-500">
                    <div class="flex justify-between py-2">
                        <div>total product price</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>delivery fee</div>
                        <div>0</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>total price</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                </div>
                <RouterLink :to="{name:'checkout'}"><div><button class="btn btn-neutral w-full">Checkout</button></div></RouterLink>
            </div>
        </div>
    </UserLayout>
</template>
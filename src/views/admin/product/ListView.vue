<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { useAdminProductStore } from '@/stores/admin/product.js'

import AdminLayout from '@/layouts/AdminLayout.vue'
import Edit from '@/components/icons/Edit.vue'
import Trash from '@/components/icons/Trash.vue'
import Table from '@/components/Table.vue'

const adminProductStore = useAdminProductStore()

const removeProduct = (index) => {
    adminProductStore.removeProduct(index)
}
onMounted(() => {
    adminProductStore.loadProduct()
})

</script>

<template>
    <AdminLayout>
        <div class="flex items-center justify-between my-4">
            <div class="text-3xl font-bold">Product</div>
            <RouterLink :to="{ name: 'admin-products-create' }">
                <button class="btn btn-neutral">Add New</button>
            </RouterLink>
        </div>
        <Table
            :headers="['Name', 'Image', 'Price', 'Quantity', 'Status', 'Updated At', '']">
            <tr v-for="(product, index) in adminProductStore.list">
                <th>{{ product.name }}</th>
                <td><img :src="product.imageUrl" class="w-12"></td>
                <td>{{ product.price }}</td>
                <td>{{ product.remainQuantity }}/{{ product.quantity }}</td>
                <td>
                    <div class="badge" :class="product.status === 'open' ? 'badge-success' : 'badge-error'">{{
                        product.status }}</div>
                </td>
                <td>{{ product.updatedAt }}</td>
                <td>
                    <div class="flex gap-2">
                        <RouterLink :to="{ name: 'admin-products-update', params: { id: index } }" class="btn btn-ghost">
                            <Edit></Edit>
                        </RouterLink>
                        <div @click="removeProduct(index)" class="btn btn-ghost">
                            <Trash></Trash>
                        </div>
                    </div>

                </td>
            </tr>
        </Table>
    </AdminLayout>
</template>
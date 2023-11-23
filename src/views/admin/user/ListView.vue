<script setup>
import { RouterLink } from 'vue-router';

import { useAdminUserStore } from '@/stores/admin/user'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Table from '@/components/Table.vue'

const adminUserStore = useAdminUserStore()

const changeStatus = (index) => {
    let selectedUser = adminUserStore.list[index]
    selectedUser.status = selectedUser.status === 'active' ? 'inactive' : 'active'
    adminUserStore.updateUser(selectedUser)
}
</script>

<template>
    <AdminLayout>
        <div class="text-3xl font-bold my-4">User</div>
        <Table
            :headers="['Name', 'Role', 'Status', 'Updated At']">
            <tr v-for="(user, index) in adminUserStore.list">
                <td>{{ user.fullname }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.status }}</td>
                <td>{{ user.updatedAt }}</td>
                <td>
                    <div class="flex gap-2">
                        <RouterLink :to="{name:'admin-users-update', params: {id: index}}" class="btn">Edit</RouterLink>
                        <button class="btn" @click="changeStatus(index)">{{ user.status === 'active' ? 'Diasble' : 'Enable'}}</button>
                    </div>
                </td>
            </tr>
        </Table>
    </AdminLayout>
</template>
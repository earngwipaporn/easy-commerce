<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue'

import { useAdminUserStore } from '@/stores/admin/user'
import { useEventStore } from '@/stores/event'

const adminUserStore = useAdminUserStore()
const eventStore = useEventStore()

const route = useRoute()
const router = useRouter()

const userIndex = ref(-1)
const userData = reactive({
    name: '',
    role: '',
    status: ''
})

const formData = [
    {
        name: 'Name',
        field: 'fullname',
        type: 'text'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        dropdownList: ['admin', 'moderator', 'user']
    },    {
        name: 'Status',
        field: 'status',
        type: 'select',
        dropdownList: ['active', 'inactive']

    }
]

onMounted (() => {
    if (route.params.id) {
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.getUser(userIndex.value)

        userData.fullname = selectedUser.fullname
        userData.role = selectedUser.role
        userData.status = selectedUser.status
        console.log(userData)
    }
})
const updateUser = () => {
    adminUserStore.updateUser(userIndex.value, userData)
    router.push({name: 'admin-users-list'})
    
    eventStore.popupMessage('info','Update user success')
}
</script>

<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-3xl font-bold">Edit</div>
            <div class="divider"></div>
            <div class="grid grid-cols-1 gap-2">
                <div v-for="form in formData" class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <input 
                        v-if="form.type === 'text'" type="text" 
                        class="input input-bordered w-full"
                        v-model="userData[form.field]">
                    <select 
                        v-if="form.type === 'select'"
                        type="text"
                        class="input input-bordered w-full"
                        v-model="userData[form.field]">
                        <option v-for="item in form.dropdownList">{{item }}</option>
                    </select>
                </div>
            </div>
            <div class="flex mt-4 justify-end">
            <button class="btn btn-ghost">Back</button>
            <button class="btn btn-neutral" @click="updateUser()">Update</button>
        </div>
        </div>
    </AdminLayout>
</template>
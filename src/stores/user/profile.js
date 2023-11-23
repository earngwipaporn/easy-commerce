import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
    state: () => ({
        users: {
            imageUrl: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1699494531~exp=1699495131~hmac=d539de6fba62aefde9d730d3bd60abeb489772e9bdcce56d08063e052d8cc800',
            name: '',
            email: ''
        }
    })
})
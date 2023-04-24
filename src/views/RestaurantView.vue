<script setup lang="ts">
import { ref } from 'vue';
import type { Restaurant } from '@/helpers';
  
const recommendedStatusList = ['Not Recommended', 'Want to Try', 'Recommended', 'Must Try']

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({
  name: 'Restaurant Name',
  address: 'Restaurant Address, 000',
  status: 'Want to Try'
})

function addRestaurant() {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    address: newRestaurant.value.address,
    status: newRestaurant.value.status,
    dishes: []
  })
}
</script>

<template>
  <main>
    <pre>{{ newRestaurant }}</pre>
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant-name"> Restaurant Name </label>
        <input id="restaurant-name" v-model="newRestaurant.name" type="text">
      </div>
      <div>
        <label for="restaurant-address"> Restaurant Address</label>
        <input id="restaurant-address" v-model="newRestaurant.address" type="text">
      </div>
      <div>
        <label for="restaurant-status"> Restaurant Status</label>
        <select name="restaurant-status" v-model="newRestaurant.status" id="restaurant-status">
          <option v-for="status in recommendedStatusList" :value="status" :key="status">
            {{ status }}
          </option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="{name, address, status} in restaurantList" :key="name">
        {{ name }} - {{ address }} <br />
        {{ status }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
li {
  list-style: none;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

interface Restaurant {
  name?: string,
  address?: string,
  status?: RestaurantStatus,
  dishes?: Dish[]
}

type Dish = ''

type RestaurantStatus = 
  'Not Recommended' |
  'Want to Try' |
  'Recommended' |
  'Must Try'

const statusList = ['Do not Recommended', 'Want to Try', 'Recommended', 'Must Try']

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({})

function addRestaurant() {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    address: '',
    status: newRestaurant.value.status,
    dishes: []
  })
}
</script>

<template>
  <main>
    <pre> {{ newRestaurant }} </pre>
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
          <option v-for="status in statusList" :value="status" :key="status">
            {{ status }}
          </option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.name">
        {{ restaurant.name }}
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type Dish, recommendedStatusList } from '@/helpers'

const dishList = ref<Dish[]>([])

const newDish = ref<Dish>({
  name: 'Dish Name',  
  diet: 'Normal',
  status: 'Want to Try'
})

function addDish () {
  dishList.value.push({
    name: newDish.value.name,
    status: newDish.value.status,
    
  })
}
</script>

<template>
  <main>
    <pre>{{ newDish }}</pre>
    <form @submit.prevent="addDish">
      <div>
        <label for="dish-name">Dish Name </label>
        <input id="dish-name" v-model="newDish.name" type="text">
      </div>
      <div>
        <label for="dish-diet">Dish diet</label>
        <input id="dish-diet" v-model="newDish.diet" type="text">
      </div>
      <div>
        <label for="dish-status">Dish Status</label>
        <select name="dish-status" v-model="newDish.status" id="dish-status">
          <option v-for="status in recommendedStatusList" :value="status" :key="status">
            {{ status }}
          </option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="{name, diet, status} in dishList" :key="name">
        {{ name }} - {{ diet }} <br />
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

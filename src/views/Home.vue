<template>
  <h1 class="display-3 text-primary text-center fw-bold">Welcome to Home view!</h1>
  <div></div>
  <hr />
  <div class="d-flex gap-3">
    <button :class="['btn btn-outline-primary']" @click="increment">Increase time</button>
    <button :class="['btn btn-outline-danger']" @click="decrement">Decrease time</button>
    <button :class="['btn btn-outline-secondary']" @click="reset">Reset time</button>
  </div>
  <br />
  <p class="lead fw-bold">{{ count }}</p>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const counterStore = useCounterStore()
const { count, doubleCount, iSEven } = storeToRefs(counterStore)
const { increment, decrement, reset } = counterStore
</script>

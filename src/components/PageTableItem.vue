<template>
  <tbody>
    <tr v-for="ask in items" :key="ask.price">
      <td>{{ ask[0] }}</td>
      <td>{{ ask[1] }}</td>
      <td>
        <span :class="{'our-order': ask.isOurOrder}">{{ ask.isOurOrder ? 'Да' : 'Нет' }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style>

</style>
<template>
  <div class="container">
    <h1 class="list-title">담긴 상품 목록</h1>
    <CartList />
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import CartList from '~/components/CartList.vue'
export default {
  components: {CartList}
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>

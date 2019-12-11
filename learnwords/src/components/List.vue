<template>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1> Filtet product From List Component</h1>
        <input type="text" class="form-control mb-md-3" v-model="filterProduct">
        <div class="card">
          <div class="card-bod">
            <ul>
              <li v-for="(item,index) in filterProducts" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import { productMixin } from "../mixins/productMixin.js"

export default {
    mixins:[productMixin]
}
</script>

<style lang="" scoped>

</style>
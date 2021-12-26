<template>
    <div id="hotProducts">
<!--      <div v-for="item in list" :key="item.product_id">-->
      <div class="hotProduct">
<!--      <router-link :to="{ path: '/products/details', query: {productID:item.product_id} }">-->
<!--        <img :src="$target +item.product_picture" alt />-->
        <img src="../assets/img.png" style="height: 200px"/>
<!--        <h2>{{item.product_name}}</h2>-->
        <h2>iqoo8</h2>
<!--        <h3>{{item.product_title}}</h3>-->
        <h3>120hz高刷</h3>
        <p>
<!--          <span>￥{{item.product_selling_price}}</span>-->
          <span>￥2000</span>
        </p>
<!--      </router-link>-->
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
      <div class="hotProduct">
        <img src="../assets/img.png" style="height: 200px"/>
        <h2>iqoo8</h2>
        <h3>120hz高刷</h3>
        <p>
          <span>￥2000</span>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: "HotProduct",
  props:'list',
}
</script>

<style scoped>
#hotProducts{
  display: inline-block;
  width: 1225px;
}
.hotProduct{
  width: 285px;
  float: left;
  margin: 0 10px;
  text-align: center;
}
</style>
<template>
  <div id="productList" class="productList">
    <ul>
      <li v-for="item in productList" :key="item.productId">
        <el-popover placement="top">
          <p>确定删除吗？</p>
          <div style="text-align: right; margin: 10px 0 0">
            <el-button type="primary" size="mini" @click="deleteProduct(item.productId)">确定</el-button>
          </div>
          <i class="el-icon-close delete" slot="reference" v-show="isDelete"></i>
        </el-popover>
        <router-link :to="{ path: '/products/details', query: {productID:item.productId} }">
          <img :src="item.productImage"  alt />
          <h2>{{item.productName}}</h2>
<!--          <h3>该商品有{{item.commentCount}}评价</h3>-->
          <h3><i class="iconfont icon-dianpu"></i>{{item.storeName}}</h3>
          <p>
            <span>{{item.productPrice}}元</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props:['productList','isDelete'],
  methods:{
    deleteProduct(val){
      this.postRequest("/product/deleteProduct",val).then(resp => {
          if(resp.data.status == 'success'){
            for (let i = 0; i < this.productList.length; i++) {
              const temp = this.productList[i];
              if (temp.productId == val) {
                this.productList.splice(i, 1);
              }
            }
            this.$message.success("商品删除成功");
          }else {
            this.$message.error("商品删除失败");
          }
      })
      .catch(err => {
        return Promise.reject(err);
      });
    }
  }
}
</script>

<style scoped >
.productList ul li {
  z-index: 1;
  float: left;
  width: 234px;
  height: 280px;
  padding: 10px 0;
  margin: 0 0 14.5px 13.7px;
  background-color: white;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  position: relative;
}
.productList ul li:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.productList ul li img {
  display: block;
  width: 160px;
  height: 160px;
  background: url(../assets/images/placeholder.png) no-repeat 50%;
  margin: 0 auto;
}
.productList ul li h2 {
  margin: 25px 10px 0;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.productList ul li h3 {
  margin: 5px 10px;
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #b0b0b0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.productList ul li p {
  margin: 10px 10px 10px;
  text-align: center;
  color: #ff6700;
}
.productList ul li .delete {
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}
.productList ul li:hover .delete {
  display: block
}
.productList ul li .delete:hover {
  color: #ff6700;
}
</style>
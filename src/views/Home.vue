<template>
  <div class="home">
    <div class="Imgroll">
      <el-carousel indicator-position="inside" >
        <el-carousel-item v-for="(item, index) in imgUrls" :key="index">
          <img ref="img" :src="item.imageUrl" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--热销商品-->

    <h3>热销商品</h3>
    <div class="main">
      <div class="product-lists">
        <!--这个不能为list不然会有冲突，bug-->
        <ProductList
          :productList="hotList"
          v-if="hotList.length > 0"
        ></ProductList>
        <div v-else class="none-product">
          <span style="margin-left: 20px">暂无热销商品。。。</span>
        </div>
      </div>
      <!-- 分页END -->
    </div>
  </div>
</template>

<script>
import { GlobalMixin } from "../utils/globalMixin";
export default {
  name: "Home",
  mixins: [GlobalMixin],
  data() {
    return {
      imgUrls: [], //轮播图片
      hotList: "", //热门商品列表
    };
  },
  activated() {
    this.getImages();
    this.getHotList();
  },
  methods: {
    getImages() {
      this.getImgUrl().then((res) => {
        this.imgUrls = res;
      });
    },

    // 数据请求服务，一般是返回的一个promise对象，  是一个异步处理的解决方案，
    getImgUrl() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = [];
          //遍历图片
          for (let index = 1; index < 8; index++) {
            const obj = {};
            obj.imageUrl = require(`../assets/images/image/${index}.jpg`);
            data.push(obj);
          }
          resolve(data);
          reject();
        }, 100);
      });
    },
    getHotList() {
      this.postRequest("/product/getHotList", {}).then((resp) => {
        this.hotList = resp.data.hotList;
      });
    },
  },
};
</script>

<style>
@media screen and (max-width: 750px) {
  .el-menu-demo el-menu-item {
    padding: 50px;
    display: inline-block;
  }
  #rr,
  #ra,
  #re {
    float: right;
  }
  .Imgroll {
    width: 100%;
    height: 200px;
    text-align: center;
    margin: 0 auto;
  }
  .Imgroll img{
    width: 100%;
    height: 200px;
  }
  .home .main {
    margin: 0 auto;
    width: 100%;
  }
  .home .main .product-lists {
    min-height: 650px;
    padding-top: 14.5px;
    margin-left: -13.7px;
    overflow: auto;
  }
}

@media screen and (min-width: 750px) {
  .el-menu-demo el-menu-item {
    padding: 50px;
    display: inline-block;
  }
  #rr,
  #ra,
  #re {
    float: right;
  }
  .Imgroll {
    max-width: 700px;
    height: 500px;
    text-align: center;
    margin: 0 auto;
  }
  .Imgroll img{
    height: 500px;
  }
  .home .main {
    margin: 0 auto;
    max-width: 1225px;
  }
  .home .main .product-lists {
    min-height: 650px;
    padding-top: 14.5px;
    margin-left: -13.7px;
    overflow: auto;
  }
}
</style>

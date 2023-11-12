<template>
  <div class="common-mall">
    <el-table :data="malldata">
      <el-table-column
        width:125
        v-for="item in dataheader"
        :key="item.label"
        :label="item.label"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataheader: [
        {
          prop: "id",
          label: "编号"
        },
        {
          prop: "name",
          label: "商品名称"
        },
        {
          prop: "price",
          label: "商品价格"
        },
        {
          prop: "num",
          label: "商品数量"
        },
        {
          prop: "time",
          label: "创建时间"
        }
      ],
      malldata: [
        {
          id: "1",
          name: "大众",
          price: "500000",
          num: "3",
          time: "2020-5-7"
        },
        {
          id: "2",
          name: "奥迪",
          price: "450000",
          num: "7",
          time: "2021-12-4"
        },
        {
          id: "3",
          name: "宝马",
          price: "400000",
          num: "4",
          time: "2022-3-7"
        },
        {
          id: "4",
          name: "奔驰",
          price: "430000",
          num: "5",
          time: "2022-1-4"
        },
        {
          id: "5",
          name: "奇瑞",
          price: "40000",
          num: "3",
          time: "2021-7-6"
        },
        {
          id: "6",
          name: "奥拓",
          price: "300000",
          num: "3",
          time: "2021-8-16"
        },
        {
          id: "7",
          name: "保时捷",
          price: "3000000",
          num: "4",
          time: "2020-4-19"
        },
        {
          id: "8",
          name: "玛莎拉蒂",
          price: "5000000",
          num: "1",
          time: "2022-1-23"
        },
        {
          id: "9",
          name: "凯迪拉克",
          price: "2000000",
          num: "7",
          time: "2020-7-4"
        },
        {
          id: "10",
          name: "桑塔纳",
          price: "4000000",
          num: "5",
          time: "2021-10-11"
        }
      ]
    };
  },
  props: {
  },
  methods: {
    handleClick() {},
    deleteClick(scope) {
      this.malldata = this.malldata.filter((item)=>{
          return item.id !==scope.id
      } );
      
    }
    
  }
};
</script>

<style>
</style>
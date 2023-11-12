<template>
  <div>
 <el-form ref="form" label-width="100px" :model="form" :inline="inline" :rules="formRules">
      <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label" :prop="item.model">
          <el-input v-if="item.type==='input'" :placeholder="'请输入'+item.label" v-model="form[item.model]">
          </el-input>
          <el-switch v-if="item.type ==='switch'" v-model="form[item.model]">
          </el-switch>
          <el-select v-if="item.type ==='select'" placeholder="请选择" v-model="form[item.model]">
            <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
           <el-date-picker v-if="item.type ==='date'" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form[item.model]">
          </el-date-picker>
      </el-form-item>
      <el-form-item><slot></slot></el-form-item>
  </el-form>
  </div>
 
</template>

<script>
export default {
  props:{
    formLabel:Array,
    form:Object,
    inline:Boolean
  },
  data () {
    return{
      formRules: {
        name: [{ required: true, message: '请填写姓名', trigger:'blur'}],
        age: [{ required: true, message: '请填写年龄', trigger:'blur'}],
        sexLabel: [{ required: true, message: '请选择性别', trigger:'change'}],
        addr:[{ required: true, message: '请填写地址', trigger:'blur'}]
      }
    }
  },
  created(){
  }
}
</script>

<style>

</style>
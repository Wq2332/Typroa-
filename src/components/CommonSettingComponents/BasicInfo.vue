<template>
	<div>
		<el-form :model="basicInfoForm" ref="basicInfoForm" :rules="basicInfoFormRules">
			<el-row :gutter="20" v-for="(item,index) in formItemList" :key="index" style="margin-top:20px">
				<el-col :span="6" :offset="8">
					<el-form-item :label="item.label" :prop="item.model" label-width="100px">
						<el-input
							v-if="item.model!=='country'&&item.model!=='region'&&item.model!=='introduce'"
							v-model="basicInfoForm[item.model]"
							:placeholder="item.placeholder"
               type=""
               :rows="2"
						></el-input>
            <el-input
							v-if="item.model=='introduce'"
							v-model="basicInfoForm[item.model]"
							:placeholder="item.placeholder"
                type="textarea"
                :rows="2"
						></el-input>
						<el-select
							v-model="basicInfoForm[item.model]"
							:placeholder="item.placeholder"
							v-if="item.model=='country'"
              style="width:288.25px"
						>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.country_name_cn"
								:value="item.country_code"
							></el-option>
						</el-select>
						<el-cascader v-model="basicInfoForm[item.model]" :placeholder="item.placeholder" :options="regions" v-if="item.model=='region'"  style="width:288.25px"></el-cascader>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="20" style="margin-top:20px">
				<el-col :span="6" :offset="8">
					<el-form-item label-width="100px">
						<el-button type="primary" @click="saveInfo">保存</el-button>
						<el-button @click="resetInfo">重置</el-button>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script>
import { provice, geolocation } from '@/utils/country.js'
export default {
	data() {
		return {
			options: [],
			regions: [],
			formItemList: [
				{
					label: '邮箱',
					model: 'email',
					placeholder: '请输入您的邮箱'
				},
				{
					label: '昵称',
					model: 'name',
					placeholder: '请输入您的昵称'
				},
				{
					label: '国家/地区',
					model: 'country',
					placeholder: '请选择'
				},
				{
					label: '所在区域',
					model: 'region',
					placeholder: '请选择'
				},
				{
					label: '具体地址',
					model: 'addr',
					placeholder: '请输入您的地址'
				},
				{
					label: '个人简介',
					model: 'introduce',
					placeholder: '请输入您的个人简介，最多不超过200字。'
				}
			],
			basicInfoForm: {
				email: '',
				name: '',
				country: '',
				region: '',
				addr: '',
				introduce: ''
			},
			basicInfoFormRules: {
				email: [{ required: true, message: '请填写邮箱', trigger: 'blur' }],
				name: [{ required: true, message: '请填写昵称', trigger: 'blur' }],
				country: [
					{ required: true, message: '请选择国家/地区', trigger: 'change' }
				],
				region: [
					{ required: true, message: '请填写所在区域', trigger: 'change' }
				],
			
			}
		}
  },
  methods: {
    saveInfo () {
      this.$refs.basicInfoForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    resetInfo () {
       this.$refs.basicInfoForm.resetFields()
    }
  },
	created() {
		this.options = geolocation
		this.regions = provice
	}
}
</script>

<style>
</style>
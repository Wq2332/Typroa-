<template>
	<div class="manage">
		<el-dialog :title="operateType ==='add' ? '新增用户': '更新用户'" :visible.sync="isShow">
			<common-form :formLabel="opertateFormLabel" :form="operateForm" :inline="true" ref="form"></common-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="backInfo">取消</el-button>
				<el-button type="primary" @click="confirm">确定</el-button>
			</div>
		</el-dialog>
		<div class="manage-header">
			<el-button type="primary" @click="addUser" style="height:40px">新增</el-button>
			<common-form :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
				<el-button type="primary" @click="getsearch(searchForm.keyword)">搜索</el-button>
			</common-form>
		</div>
		<common-table
			:tableData="tableData"
			:tableLabel="tableLabel"
			:config="config"
			@changePage="change()"
			@edit="editUser"
			@del="delUser"
		></common-table>
	</div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '@/components/CommonTable.vue'
// import {getUser} from '@/api/data.js'
import axios from 'axios'

export default {
	components: { CommonForm, CommonTable },
	data() {
		return {
			operateType: 'add',
			isShow: false,
			opertateFormLabel: [
				{
					model: 'name',
					label: '姓名',
					type: 'input'
				},
				{
					model: 'age',
					label: '年龄',
					type: 'input'
				},
				{
					model: 'sexLabel',
					label: '性别',
					type: 'select',
					opts: [
						{
							label: '男',
							value: 1
						},
						{
							label: '女',
							value: 0
						}
					]
				},

				{
					model: 'addr',
					label: '地址',
					type: 'input'
				},
				{
					model: 'birth',
					label: '出生日期',
					type: 'date'
				}
			],
			operateForm: {
				name: '',
				addr: '',
				age: '',
				birth: '',
				sexLabel: ''
			},
			formLabel: [
				{
					model: 'keyword',
					label: '',
					type: 'input'
				}
			],
			searchForm: {
				keyword: ''
			},
			tableData: [
				{
					name: '张三',
					age: 25,
					sexLabel: '男',
					birth: '2023-6-25',
					addr: '江苏省南京市玄武区'
				}
			],
			tableLabel: [
				{
					prop: 'name',
					label: '姓名'
				},
				{
					prop: 'age',
					label: '年龄'
				},
				{
					prop: 'sexLabel',
					label: '性别'
				},
				{
					prop: 'birth',
					label: '出生日期',
					width: 200
				},
				{
					prop: 'addr',
					label: '地址',
					width: 320
				}
			],
			config: {
				page: 1,
				total: 30
			}
		}
	},
	methods: {
		confirm() {
			if (this.operateType === 'edit') {
				//   this.$http.post("/user/edit", this.operateForm).then(res => {
				//     console.log(res);
				//     this.isShow = false;
				//     this.getList();
				//   });
				// } else {
				//   this.$http.post("/user/add", this.operateForm).then(res => {
				//     console.log(res);
				//     this.isShow = false;
				//     this.getList();
				//   });
				console.log(this.operateForm)
      } else if (this.operateType === 'add') {
				this.$refs.form.$refs.form.validate(valid => {
					if (!!valid) {
						this.isShow = false
						this.tableData.push(this.operateForm)
					} else {
						console.log('error submit!!')
						return false
					}
				})
			}
    },
    backInfo () {
      this.$refs.form.$refs.form.clearValidate()
      this.isShow=false
    },
		addUser() {
			this.isShow = true
			this.operateType = 'add'
			this.operateForm = {
				name: '',
				addr: '',
				age: '',
				birth: '',
				sex: ''
			}
		},
		getList(name = '') {
			//  this.config.loading = true
			//      name ? (this.config.page =1) : ''
			//  getUser({
			//      page:this.config.page,
			//      name
			//  }).then(res=>{
			//      this.tableData =res.list.map(item=>{
			//          item.sexLabel = item.sex ===0 ? '女' : '男'
			//          return item
			//  })
			// console.log(this.tableData);
			//  this.config.total = res.count
			//  this.config.loading = false
			//  })
		},
		getsearch(val) {
			if (!!val) {
				const result = this.tableData.filter(item => {
					if (item.name === val) {
						return item
					}
				})
				this.tableData = result
			}
		},
		editUser(row) {
			this.isShow = true
			this.operateType = 'edit'
			this.operateForm = row
		},
		delUser(row) {
			this.$confirm('此操作将永久删除该组件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					this.tableData = this.tableData.filter(item => {
						return item.name != row.name
					})
					console.log(this.tableData)
				})
				.catch(() => {})
		},
		change() {
			axios.get('/user/changeUser').then(res => {
				console.log(res.data)
				this.tableData = res.data.changeList.map(item => {
					item.sexLabel = item.sex === 0 ? '女' : '男'
					return item
				})
			})
		}
	},
	created() {
		this.getList()
	}
}
</script>

<style lang="less" scoped>
.manage-header {
	display: flex;
	justify-content: space-between;
}
</style>
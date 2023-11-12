<template>
	<div>
		<div class="backStyle">
			<div>
				<div class="fontStyle">xxx后台管理系统</div>
				<el-form
					:model="form"
					status-icon
					:rules="rules"
					ref="form"
					label-width="100px"
					class="login-container"
				>
					<h3 class="login_title">系统登录</h3>
					<el-form-item label="用户名" label-width="80px" prop="username" class="username">
						<el-input type="input" v-model="form.username" auto-complete="off" placeholder="请输入账户"></el-input>
					</el-form-item>
					<el-form-item label="密码" label-width="80px" prop="password">
						<el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item class="login_submit" style="">
						<el-button type="primary" @click="login" class="login_submit">登录</el-button>
            <el-button  @click="reset" class="login_reset">重置</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
// import {getMenu} from '@/api/data.js'
export default {
	name: 'login',
	data() {
		return {
			form: {
				username: '',
				password: ''
			},
			rules: {
				username: [
					{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					},
					{
						min: 3,
						message: '用户名长度不能小于3位',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		login() {
			if (
				!localStorage.getItem('user') &&
				this.form.username == 'admin' &&
				this.form.password == '123456'
			) {
				localStorage.setItem('user', JSON.stringify(this.form))
				this.$router.replace('/home')
			} else if (
				this.form.username == 'admin' &&
				this.form.password == '123456'
			) {
				this.$router.replace('/home')
			}
		},
    reset(){ 
      this.form.username = ''
      this.form.password = ''
      this.$refs.form.clearValidate()
    }
	}
}
</script>

<style lang="less" scoped>
.login-container {
	border-radius: 15px;
	background-clip: padding-box;
	// margin: 180px auto;
	width: 350px;
	padding: 35px 35px 15px 35px;
	background-color: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #cac6c6;
}
.login_title {
	margin: 0px auto 40px auto;
	text-align: center;
	color: #505458;
}
.login_submit {
	margin: 10px auto 0px auto;
  /deep/ .el-form-item__content{
    margin-left: 20px !important;
    display: flex;
  }
}

.login_reset {
	margin: 10px auto 0px auto;
}
.backStyle {
	display: flex;
	justify-content: center;
	padding-top: 240px;
   background: url("../../assets/images/background.jpg") center center no-repeat;
    width: 100%;
  min-height: 100vh;
 
  background-size: 100% 100%;
}
.fontStyle {
	font-family: SourceHanSansCN-Bold;
	font-size: 40px;
	margin-bottom: 30px;
	color: #fff;
	letter-spacing: 5px;
	text-align: center;
	font-weight: 700;
	text-shadow: 18px 10px 5px #ef7d1b;
}
</style>
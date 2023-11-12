<template>
	<div>
		<el-row class="home" :gutter="20">
			<el-col :span="24" style="margin-top:20px;">
				<el-card shadow="always" style="height:130px">
					<div class="userImg">
						<!-- <img :src=userImg style="height: 80px;width:80px"> -->
						<div class="block">
							<el-avatar :size="80" :src="userImg"></el-avatar>
						</div>
						<div style="margin-left: 100px;width:700px">
							<el-form :model="userForm" ref="userForm">
								<el-row>
									<el-col :span="8">
										<el-form-item label="用户名 :">
											<span>{{ userForm.userName }}</span>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="实名认证 :">
											<el-tag type="success" size="small">{{userForm.realName}}</el-tag>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="账号ID :">
											<span>{{userForm.ID}}</span>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="8">
										<el-form-item label="手机号码 :">
											<span>{{ userForm.phone }}</span>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="注册时间 :">
											<span>{{ userForm.createTime }}</span>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row style="margin-top:20px">
			<el-col>
				<!-- <el-card style="height:600px">

				</el-card>-->
				<el-tabs type="border-card" style="padding-top: 20px;padding-left:20px;height:660px" @tab-click="handleClick">
					<el-tab-pane label="用户管理">
						<basic-info ref="basicInfo"></basic-info>
					</el-tab-pane>
					<el-tab-pane label="配置管理">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理">
            <safty-setting></safty-setting>
          </el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import BasicInfo from '@/components/CommonSettingComponents/BasicInfo.vue'
import SaftySetting from '@/components/CommonSettingComponents/SaftySetting.vue'
export default {
	data() {
		return {
			userImg: require('@/assets/images/logo.jpg'),
			userForm: {
				userName: '王立群',
				realName: '已认证',
				ID: '15012312300',
				phone: '15012540000',
				createTime: '2013-05-10 12:10:00'
			}
		}
	},
  components: { BasicInfo,SaftySetting },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
      if (tab.index=='0') {
        this.$refs.basicInfo.$refs.basicInfoForm.clearValidate()
      }
    }
  },
	created() {
		this.userForm.phone =
			this.userForm.phone.substring(0, 3) +
			'****' +
			this.userForm.phone.substring(7)
	}
}
</script>

<style lang="less" scoped>
.userImg {
	border-bottom: 0px solid #ccc;
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	margin-bottom: 20px;
}
/deep/ .el-form-item {
	margin-bottom: 0px;
}
/deep/ .el-tabs--border-card > .el-tabs__header {
	background-color: #fff;
	border-bottom: 0px solid #e4e7ed;
}
/deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
	color: #409eff;
	background-color: #f2f3f4;
	border-color: #dcdfe6;
	margin: 0 6px;
	padding: 5px 0;
	padding-right: 16px;
	padding-left: 16px;
	font-size: 14px;
	// background-color: transparent;
	border-radius: 32px;
	line-height: 2;
}
/deep/.el-tabs--border-card > .el-tabs__header .el-tabs__item {
	transition: all 0s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
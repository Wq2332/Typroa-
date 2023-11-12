<template>
	<div>
		<el-row :gutter="12">
			<el-col :span="24">
				<el-card shadow="never" style="border:0px;">
					<div class="clearfix">
						<span>企业实名认证</span>
						<el-button style="float: right; padding: 3px 0" type="text">修改认证主体</el-button>
					</div>
					<el-descriptions style="margin-top:10px">
						<el-descriptions-item label="账号类型">企业账号</el-descriptions-item>
						<el-descriptions-item label="认证状态">
							<el-tag size="small" type="success">已认证</el-tag>
						</el-descriptions-item>
						<el-descriptions-item label="认证时间">2018-10-22 14:53:12</el-descriptions-item>
						<el-descriptions-item label="法人姓名">李**</el-descriptions-item>
						<el-descriptions-item label="法人证件类型">中国身份证</el-descriptions-item>
						<el-descriptions-item label="法人认证号码">130************123</el-descriptions-item>
						<el-descriptions-item label="企业名称">低调有实力的企业</el-descriptions-item>
						<el-descriptions-item label="企业证件类型">企业营业执照</el-descriptions-item>
						<el-descriptions-item label="组织机构代码">7*******9</el-descriptions-item>
					</el-descriptions>
				</el-card>
			</el-col>
		</el-row>

		<el-row :gutter="12" style="margin-top:30px">
			<el-col :span="24">
				<el-card shadow="never" style="border:0px;">
					<div class="clearfix">
						<span>认证记录</span>
						<!-- <el-button style="float: right; padding: 3px 0" type="text">修改认证主体</el-button> -->
					</div>
					<el-table
						:data="tableData"
						style="width: 100%;margin-top:20px"
						:header-cell-style="{background:'#e5e6eb',color:'#000000'}"
					>
						<el-table-column prop="type" label="认证类型" width="180"></el-table-column>
						<el-table-column prop="content" label="认证内容"></el-table-column>
						<el-table-column prop="status" label="当前状态" width="180">
							<template slot-scope="scope">
								<span class="columnStyle" :style="{'backgroundColor':tableData[scope.$index].bgColor}"></span>
								<span>{{ tableData[scope.$index].status }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button @click="lookInfo(scope.row)" type="text">查看</el-button>
								<el-button type="text">撤回</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
					<el-pagination layout="prev, pager, next" :total="500" style="margin-top:20px;float:right"></el-pagination>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
				{
					type: '企业证件认证',
					content: '企业实名认证，法人姓名：李**',
					status: '已通过',
					createTime: '2021-02-28 10:30:50',
					bgColor: 'rgb(0,180,42)'
				},
				{
					type: '企业证件认证',
					content: '企业实名认证，法人姓名：李**',
					status: '审核中',
					createTime: '2020-05-13 08:00:00',
					bgColor: 'rgb(52,145,250)'
				}
			]
		}
	},
	methods: {
		lookInfo() {}
	},
	created() {}
}
</script>

<style lang="less" scoped>
// @Reviewed:#e92322;
@reviewing: rgb(52, 145, 250);
@success: rgb(0, 180, 42);
/deep/.el-descriptions__body {
	background-color: rgb(247, 248, 250);
	padding: 10px;
}
/deep/.el-card__body,
.el-main {
	padding-top: 0px;
}

/deep/ .columnStyle {
	display: inline-block;
	margin-right: 4px;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: rgb(52, 145, 250);
}
</style>
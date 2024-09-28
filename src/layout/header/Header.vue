<template>
  <el-row class="row-bg" justify="space-between">
    <el-col :span="4">
        <el-select
            :teleported="false"
            v-model="company"
            :placeholder= "selectCompany"
            default-first-option
            size="large"
            style="width: 250px"
            @change=change
            >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
    </el-select>
    </el-col>
    <el-col :span="2" class="right-menu">
      <el-badge :value="200" :max="99" class="item">
        <el-icon size="35" color= "rgb(255, 255, 255)">
          <BellFilled />
        </el-icon>
      </el-badge>
      <el-divider direction="vertical" />
        <div class="avatar-container">
          <el-dropdown
            @command="handleCommand($event)"
            class="right-menu-item hover-effect"
            trigger="click"
          >
            <div class="avatar-wrapper">
              <el-avatar :icon="UserFilled" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <router-link to="/user/profile">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                </router-link>
                <el-dropdown-item command="setLayout">
                  <span>账号设置</span>
                </el-dropdown-item>
                <el-dropdown-item divided command="logout">
                  <span>退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
const selectCompany = ref("请选择公司");
const options = [
  {
    value: 1,
    label: '方林',
  },
  {
    value: 2,
    label: '爱林',
  },
  {
    value: 3,
    label: '宜家',
  },
  {
    value: 4,
    label: '正林伟业',
  },
  {
    value: 5,
    label: '恩林房翻新',
  },
];
const company = ref(options[0].label);
const change =  (val: any) => {

}

// TODO: 处理下拉选项操作
function handleCommand(command) {
	switch (command) {
		case "setLayout":
			// setLayout();
			break;
		case "logout":
			// logout();
			break;
		default:
			break;
	}
}

</script>

<style lang="scss" scoped>
::v-deep.el-row{
    height: inherit;
}

.right-menu{
  display: flex !important;
  justify-content: center;
  align-items: center;
}

::v-deep.el-badge{
  --el-badge-font-size: 10px;
  --el-badge-size: 16px;
}

.item{
  margin-right: 24px;
  cursor: pointer;
}

::v-deep(.el-select__wrapper) {
  background-color: var(--fl-color-common-yellow);
  border-radius: 0;
  box-shadow: none;
  box-sizing: unset;
  min-height: 64px;
  font-size: 24px;
  font-weight: 400;
}

::v-deep(.el-select__placeholder){
  display: inherit;
  justify-content: center;
}

.avatar-container {
			margin-left: 16px;

			.avatar-wrapper {
				position: relative;

				.user-avatar {
					cursor: pointer;
					width: 40px;
					height: 40px;
					border-radius: 10px;
				}

				i {
					cursor: pointer;
					position: absolute;
					right: -20px;
					top: 25px;
					font-size: 12px;
				}
			}
		}
</style>
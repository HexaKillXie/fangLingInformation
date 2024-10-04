<template>
   <div class="header-left-wrapper">
      <div class="company-select-wrapper">
        <el-select
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
      </div>
      <div class="header-right-wrapper">
        <div class="right-menu-item">
          <el-badge :value="200" :max="99" class="item">
            <el-icon size="40" color= "rgb(255, 255, 255)">
              <BellFilled />
            </el-icon>
          </el-badge>
        </div>
        <div class="right-menu-item">
          <el-divider direction="vertical" />
        </div>
        <div class="right-menu-item"></div>
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
                <el-dropdown-item command="userCenter">
                  <span>个人中心</span>
                </el-dropdown-item>
                <el-dropdown-item command="setAccount">
                  <span>账号设置</span>
                </el-dropdown-item>
                <el-dropdown-item divided command="logout">
                  <span>退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
   </div>

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
function handleCommand(command: any) {
	switch (command) {
    case "userCenter":
			// setLayout();
			break;
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
  &.is-transparent {
    color: var(--el-text-color-primary);
  }
}


.avatar-container {
			margin-left: 16px;
      margin-right: 24px;
      display: inherit;
      cursor: pointer;

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

    .header-left-wrapper {
      overflow: hidden;
      position: relative;

      .company-select-wrapper {
        float: left;
      }
    }

    .header-right-wrapper {
      float: right;
		  display: flex;
      height: 80px;

      .right-menu-item{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.hover-effect {
				cursor: pointer;
				transition: background 0.3s;

				&:hover {
					background: rgba(0, 0, 0, 0.025);
				}
			}
    }
</style>
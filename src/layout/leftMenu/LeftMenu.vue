<template>
      <el-scrollbar wrap-class="scrollbar-wrapper">
			<el-menu
				:default-active="activeMenu"
				:collapse="isCollapse"

				:unique-opened="true"
				:collapse-transition="false"
				mode="vertical"
				active-text-color="#ffd04b"
        		background-color="#545c64"
        		text-color="#fff"
        		@open="handleOpen"
        		@close="handleClose"
				:style="{ '--el-menu-bg-color': menubg }"
			>
				<menu-item
					v-for="(route, index) in sidebarRouters"
					:key="route.path + index"
					:item="route"
					:base-path="route.path"
					/>
				</el-menu>
			</el-scrollbar>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import MenuItem from "./MenuItem.vue";
import data from './menuList.json';
import Layout from "../index.vue";
import ParentView from "../../components/ParentView/index.vue";
import { computed } from "vue";

const menubg = '#000000';
// 匹配views里面所有的.vue文件
const modules = import.meta.glob("./../../views/**/*.vue");
const route = useRoute();
const menuListData = data;
const sidebarRouters = menuListData.data;
const isCollapse = false;
const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
}

// const sidebarRouters = filterAsyncRouter(sRouters);
// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap: any[], lastRouter = false, type = false) {
	return asyncRouterMap.filter((route) => {
		if (type && route.children) {
			route.children = filterChildren(route.children);
		}
		if (route.component) {
			// Layout ParentView 组件特殊处理
			if (route.component === "Layout") {
				route.component = Layout;
			} else if (route.component === "ParentView") {
				route.component = ParentView;
			} else {
				route.component = loadView(route.component);
			}
		}
		if (route.children != null && route.children && route.children.length) {
			route.children = filterAsyncRouter(route.children, route, type);
		} else {
			delete route["children"];
			delete route["redirect"];
		}
		return true;
	});
}

function filterChildren(childrenMap: any[], lastRouter?: any) {
	var children: any[] = [];
	childrenMap.forEach((el, index) => {
		if (el.children && el.children.length) {
			if (el.component === "ParentView" && !lastRouter) {
				el.children.forEach((c: any) => {
					c.path = el.path + "/" + c.path;
					if (c.children && c.children.length) {
						children = children.concat(
							filterChildren(c.children, c)
						);
						return;
					}
					children.push(c);
				});
				return;
			}
		}
		if (lastRouter) {
			el.path = lastRouter.path + "/" + el.path;
		}
		children = children.concat(el);
	});
	return children;
}
function loadView(view: any)  {
	let res;
	for (const path in modules) {
		const dir = path.split("views/")[1].split(".vue")[0];
		if (dir === view) {
			res = () => modules[path]();
		}
	}
	console.log(res)
	return res;
};

const activeMenu = computed(() => {
	const { meta, path } = route;
	// if set path, the sidebar will highlight the path you set
	if (meta.activeMenu) {
		return meta.activeMenu;
	}
	return path;
});
</script>

<style scoped lang="scss">
::v-deep.el-menu {
	border-right:none;
}

</style>
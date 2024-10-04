<template>
    <div class="common-layout">
        <el-container>
            <el-header height="80px" style="background-color: var(--fl-color-dark-gray)">
                <v-header />
            </el-header>
            <el-container>
                <el-aside width="250px" class="menu-container">
                    <v-menu />
                </el-aside>
                <el-main>
                    Main
                    <!-- TODO：面包屑占位 -->
                    <router-view v-slot="{ Component }">
                        <transition>
                            <component :is="Component" ref="mainContent"/>
                        </transition>
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
  </div>
</template>

<script setup lang="ts" name="IndexLayout">
import { ElBreadcrumb } from 'element-plus';
import vHeader from './header/Header.vue';
import vMenu from './leftMenu/LeftMenu.vue'

</script>
<style lang="scss" scoped>

::v-deep.el-header{
    --el-header-padding: 0;
}
::v-deep.el-container {
    height: inherit;
}
.common-layout {
    height: inherit;
}

.menu-container {
    background-color: #000000;
}
</style>
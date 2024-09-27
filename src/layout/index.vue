<template>
    <div class="layout-border">
        <v-header />
        <v-menu />
        <div class="main-content">
            <!-- TODO：面包屑占位 -->
            <!-- TODO：路由router-view占位 -->
        </div>
    </div>
</template>

<script setup lang="ts" name="IndexLayout">
import { ElBreadcrumb } from 'element-plus';
import vHeader from './header/Header.vue';
import vMenu from './leftMenu/LeftMenu.vue'

</script>

<template>
    <h3 @click="alertClick()">homepage click</h3>
</template>

<script lang="ts" setup name="homePage">
    // 点击消息
    const alertClick = () => {
       alert('fantastic!')
    };
</script>
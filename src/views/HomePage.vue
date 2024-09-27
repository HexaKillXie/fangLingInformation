<template>
    <h3 @click="alertClick()">homepage click</h3>
</template>
<script lang="ts" setup name="homePage">
    const router = useRouter();
    const messageList = ref([
        {
            type: "mytask",
            name: "我的申请",
            count: 0,
            color: "#409EFF",
            icon: "Promotion",
            linkUrl: "/workbench/workflow/task/myProcess",
        },
        {
            type: "todo",
            name: "待办",
            count: 0,
            color: "#409EFF",
            icon: "Flag",
            linkUrl: "/workbench/workflow/task/todo",
        }
    ]);
    // 点击消息
    const alertClick = () => {
       alert('fantastic!')
    };
</script>
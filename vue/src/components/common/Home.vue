<template>
    <div class="wrapper">
        <v-head></v-head>
        <!-- <v-sidebar></v-sidebar> -->
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
   // import vSidebar from './Sidebar.vue';
    export default {
        components:{
            //vHead, vSidebar
            vHead
        }
    }
</script>
<style scoped>
.content{
    left:460px;
    right:460px;
    top:70px;
    padding-bottom:50px;
    width: 1000px;
    background: none repeat scroll 0 0 #f2f2f2;
}
</style>

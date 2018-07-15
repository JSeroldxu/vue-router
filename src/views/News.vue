<template>
    <div>
      <ul>
        <li v-for="(news,index) in newsArr" :key="index">
          {{news}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "New",
      data(){
        return{
          newsArr:['news001','news002','news003','news004']
        }
      }
    }
</script>

<style scoped>
  li{
    color: black;
  }
</style>

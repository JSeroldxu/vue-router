<template>
    <div>
      <ul>
        <li v-for="(message,index) in messages" :key="message.id">
          <a href="">{{message.title}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Message",
      data(){
          return{
            messages:[]
          }
      },
      mounted(){
          //模拟ajax从后台请求数据
        setTimeout(()=>{
          const messages = [
            {
              id: 1,
              title:'message01'
            },
            {
              id: 2,
              title:'message02'
            },
            {
              id: 3,
              title:'message03'
            },
            {
              id: 4,
              title:'message04'
            }
          ]
          this.messages = messages
        },1000)

      }
    }
</script>

<style scoped>

</style>

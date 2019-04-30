<template>
<div class="cartcontrol">
  <transition name="move">
    <div @click.stop.prevent="decreaseCart" v-show="food.count>0" class="cart-decrease">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
  </transition>
  <div class="cart-count" v-show="food.count> 0">{{food.count}}</div>
  <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
</div>
</template>

<script>
  import Vue from 'vue';
    export default {
      props:{
        food:{
          type:Object
        }
      },
      created(){
        //console.log(this.food)
      },
      methods:{
        addCart(event){
          if(!event._constructed){//防止多次点击
            return;
          }
          if(!this.food.count){
            //this.food.count=1;
            Vue.set(this.food,'count',1);//第一次数据set为1
          }else{
            this.food.count++;
          }
          //this.$emit('cart.add',event.target);
          this.$emit('cart-add', event.target);//小球滚入动画
        },
        decreaseCart(event){
          if(!event._constructed){
            return;
          }
          if(this.food.count){
            this.food.count--;
          }
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0px
    .cart-decrease
      display inline-block
      padding 6px
      transition all 0.4s linear
      .inner
        line-height 24px
        font-size 24px
        color rgb(0,160,220)
        transition all 0.4s linear
      &.move-enter-active, &.move-leave-active
        transform translate3d(0,0,0)
        .inner
          display inline-block
          transform rotate(0)
      &.move-enter, &.move-leave-to
        opacity: 0
        transform translate3d(24px,0,0)
        .inner
          transform rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0,160,220)
    .text-align-all
      display inline-block
</style>

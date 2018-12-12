<template>
   <div>
       <p>进度条</p>
    <div class="mix_echart">
        <IEcharts :option="pro" style="height:100%;width: 100%;"></IEcharts>
    </div>
   </div>
</template>
<script>
     import IEcharts from 'vue-echarts-v3';
     import axios from "axios"
     export default {
         data:function(){
             return{

             }
         },
         mounted() {  
             this.proData()
         },
         methods:{
            proData(){
                //    var timeLineData = ['1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0'];
                //    for(var i =0; i < timeLineData.length; i++){
                //        console.log('i..',i)
                //     //    this.pro.baseOption.timeline.data.push(timeLineData[i])
                //    }
                //      console.log('timeLineData...',this.timeLineData)
                this.pro={
                            baseOption: {
                                timeline: {
                                    loop: false,
                                    axisType: 'category',
                                    show: true,
                                    autoPlay: false,
                                    data:['1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0'],
                                    controlStyle: {
                                        show: false
                                    },
                                    lineStyle: {
                                        width: 15,
                                        color: '#dcdcdc'
                                    },
                                    itemStyle: {
                                        color: '#ececec',
                                        borderColor: '#cbcbcb',
                                        opacity: 0
                                    },
                                    checkpointStyle: {
                                        symbol: 'rect',
                                        symbolSize: [15, 28],
                                        color: '#ececec',
                                        borderWidth: 1,
                                        borderColor: '#cbcbcb'
                                    },
                                    label: {
                                        position: 19
                                    }
                                },
                                title: {
                                    subtext: '',
                                    subtextStyle: {
                                        align: 'center'
                                    }
                                },
                                tooltip: {},
                                legend: {
                                    x: 'right',
                                    data:['货币类', '商品类', '海外类', '权益类', '债券类'],
                                    selectedMode: 'single'
                                },
                                calculable: true,
                                series: [{
                                    type: 'pie',
                                    center: ['50%', '40%'],
                                    radius: '60%'
                                }]
                            },
                            options: []
                        }
                    }
            },
            components:{
                IEcharts
            }
     }
</script>
<style scoped> 
.mix_echart{
        width:560px;
        height:600px
    }
</style>
<template>
    <div ref="chartRef" class="chart-container"></div>
</template>
  
<script setup>
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 使用相關模組
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

import { onMounted, ref } from 'vue';

const chartRef = ref(null);

onMounted(() => {
    if (chartRef.value) {
        const myChart = echarts.init(chartRef.value);
        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        };
        myChart.setOption(option);
    }
});
</script>
  
<style>
/* CSS 样式 */
.chart-container {
    width: calc(100%-18%);
    height: 250px;
    margin-top: 0;
    padding-top: 0;
}
</style>
  


<!-- <template>
    <MyEchart :options="options" style="height: 300px"></MyEchart>
</template>
  
<script setup>
import { reactive } from 'vue'
import MyEchart from '@/components/echarts/MyEchart.vue'

const options = reactive({
    title: {
        text: '访问来源',
        subtext: 'Fake Data',
        left: 'left'
    },
    tooltip: {
        trigger: 'item'
    },

    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})
</script> -->

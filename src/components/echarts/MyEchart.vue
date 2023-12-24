<template>
    <div ref="chartRef" class="my-chart"></div>
</template>
  
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import echarts from './echarts.js'

const chartRef = ref()
let chart = null

const resizeHandler = () => {
    chart?.resize()
}

onMounted(() => {
    setTimeout(() => {
        initChart()
    }, 20)

    window.addEventListener('resize', resizeHandler)
})

const initChart = () => {
    chart = echarts.init(chartRef.value)
    chart.setOption({
        // 將選項寫在這裡
    })
}

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
    chart?.dispose()
})
</script>
  
<style scoped></style>
  
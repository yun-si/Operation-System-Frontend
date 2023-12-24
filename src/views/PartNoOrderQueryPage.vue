<template>
    <el-main>
        <!--上方的進度圖-->
        <el-card class="box-card is-plain">
            <template #header>
                <div class="card-header">
                    <span>訂單編號: {{ order_data.id }}</span>
                    <span>交貨日期: {{ order_data.lead_time }}</span>
                    <!-- <el-button class="button" text>Operation button</el-button> -->
                </div>
            </template>
            <!--card body-->
            <div class="demo-progress">
                <template v-for="step in step_data">
                    <el-progress type="dashboard" :percentage="step.percentage" :stroke-width="10"
                        :status="step.percentage === 100 ? 'success' : ''">
                        <template v-if="step.percentage < 100">
                            <span class="percentage-value">{{ step.percentage }}%</span>
                            <span class="percentage-label">{{ step.process }}</span>
                        </template>
                        <template  v-if="step.percentage === 100">
                            <el-button type="success" :icon="Check" circle />
                        </template>
                    </el-progress>
                </template>
            </div>
        </el-card>
        <!--下方的表格-->
        <div class="table_part">
            <el-table ref="singleTableRef" :data="tableData" highlight-current-row style="width: 100%"
                @current-change="handleCurrentChange">
                <el-table-column type="index" width="50" />
                <el-table-column property="order_number" label="訂單編號" width="120" />
                <el-table-column property="material_name" label="原物料名稱" width="120" />
                <el-table-column property="amount" label="訂單總額" />
                <el-table-column property="order_date" label="訂購日期" />
                <el-table-column property="lead_time" label="交貨日期" />
                <el-table-column property="progress" label="訂單進度" />
            </el-table>
            <!-- <div style="padding: 0.5% 2%;">
                <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
                <el-button @click="setCurrent()">Clear selection</el-button>
            </div> -->
        </div>
    </el-main>
</template>
  

<script setup>
import { ref } from "vue"
import { ElTable, ElCard } from 'element-plus'
import { Check } from '@element-plus/icons-vue'

const order_data = ref({
    id: "103301",
    lead_time: "2023-12-02"
})

const step_data = ref([
    {
        process: "建模",
        percentage: 100
    },
    {
        process: "製造",
        percentage: 70
    },
    {
        process: "運送",
        percentage: 0
    }
])

// 表格
const currentRow = ref();
const singleTableRef = ref();

const setCurrent = (row) => {
    singleTableRef.value.setCurrentRow(row);
};

const handleCurrentChange = (val) => {
    currentRow.value = val;
};

const tableData = [
    {
        order_number: '10384',
        material_name: '銅',
        amount: '100',
        order_date: '2023-12-22',
        lead_time: '2024-1-3',
        progress: '未完成'
    }, {
        order_number: '10384',
        material_name: '銅',
        amount: '100',
        order_date: '2023-12-22',
        lead_time: '2024-1-3',
        progress: '未完成'
    }, {
        order_number: '10384',
        material_name: '銅',
        amount: '100',
        order_date: '2023-12-22',
        lead_time: '2024-1-3',
        progress: '未完成'
    }, {
        order_number: '10384',
        material_name: '銅',
        amount: '100',
        order_date: '2023-12-22',
        lead_time: '2024-1-3',
        progress: '未完成'
    }
];


</script>

<style>
.main-part {
    width: calc(100% - 18%);
}

.box-card {
    flex-direction: column;
    background-color: var(--vt-c-white-soft);
    display: flex;
    position: fixed;
    top: 7%;
    left: 18%;
    right: 0;
    width: calc(100% - 18%);
    height: 45%;
    min-height: 250px;
    /* 覆蓋 */
    border-radius: 0;
    margin-bottom: 10px;
}

.card-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 3px 5px;
}

.percentage-value {
    display: block;
    margin-top: 10px;
    font-size: 24px;
}

.percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 14px;
}

.demo-progress {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3%;
    /* 調整 el-progress 之間的間距 */
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.table_part {
    background-color: var(--vt-c-white-soft);
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0%;
    left: 18%;
    right: 0;
    width: calc(100% - 18%);
    height: calc(100% - 7% - 45%);
    /* min-height: 250px */
}
</style>
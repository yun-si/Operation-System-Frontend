<template>

    <!--上方的進度圖-->
    <el-card class="box-card is-plain">
        <template #header>
            <div class="card-header">
                <span>訂單編號: {{ order_data.id }}</span>
                <span>交貨日期: {{ order_data.lead_time }}</span>
                <!-- <el-button class="button" text>Operation button</el-button> -->
            </div>
        </template>
        <el-steps :active="2" align-center>
            <el-step v-for="stage in stage_data" :key="stage.name" :title="stage.name" :description="stage.description" />
        </el-steps>
        <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
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
        <div style="padding: 0.5% 2%;">
            <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
            <el-button @click="setCurrent()">Clear selection</el-button>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue"
import { ElTable, ElCard } from 'element-plus'

const order_data = ref({
    id: "103301",
    lead_time: "2023-12-02"
})

const stage_data = ref([
    {
        name: "Step 1",
        description: "Some description",
        active: "True"
    },
    {
        name: "Step 2",
        description: "Some description",
        active: "False"
    },
    {
        name: "Step 3",
        description: "Some description",
        active: "False"
    },
    {
        name: "Step 4",
        description: "Some description",
        active: "False"
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
  },{
    order_number: '10384',
    material_name: '銅',
    amount: '100',
    order_date: '2023-12-22',
    lead_time: '2024-1-3',
    progress: '未完成'
  },{
    order_number: '10384',
    material_name: '銅',
    amount: '100',
    order_date: '2023-12-22',
    lead_time: '2024-1-3',
    progress: '未完成'
  },{
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
}

.card-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 3px 5px;
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
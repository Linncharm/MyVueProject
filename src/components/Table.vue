<template>
  <el-card shadow="always" style="max-width: 500px; font-weight: bold">
    <template #header>
      <slot name="title"></slot>
    </template>
    <span>This is a table with filter,select,search function</span>
  </el-card>
  <br>
  <el-form id="search">
    Search <el-input type="text" id="search" placeholder="Search..." v-model="searchQuery"></el-input>
  </el-form>
  <div>
    <br>
    <el-select v-model="filterSelect" placeholder="Begin to select" style="margin: 10px;width: 50%">
      <el-option-group label="Choose car option">
        <el-option value="a" label="Show all">Show all</el-option>
        <el-option value="b" label="Only show car = true">Only show car = true</el-option>
        <el-option value="c" label="Only show car = false">Only show car = false</el-option>
      </el-option-group>
      <el-option-group label="Choose wealth option">
        <el-option value="d" label="Select wealth > 50000">Select wealth > 50000</el-option>
        <el-option value="e" label="Select wealth between 30000 and 50000">Select wealth between 30000 and 50000</el-option>
        <el-option value="f" label="Select wealth < 30000">Select wealth <30000</el-option>
      </el-option-group>
      <el-option-group label="Choose strength option">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          {{item.label}}
        </el-option>
      </el-option-group>
    </el-select>
    <el-select
        v-model="filterMultipleSelect"
        placeholder="Begin to select (multiple)"
        style="margin: 10px;width: 50%"
        multiple
    >
      <el-option-group label="Choose car option">
        <el-option value="a" label="Show all (multiple)">Show all (multiple)</el-option>
        <el-option value="b" label="Only show car = true">Only show car = true</el-option>
        <el-option value="c" label="Only show car = false">Only show car = false</el-option>
      </el-option-group>
      <el-option-group label="Choose wealth option">
        <el-option value="d" label="Select wealth > 50000">Select wealth > 50000</el-option>
        <el-option value="e" label="Select wealth between 30000 and 50000">Select wealth between 30000 and 50000</el-option>
        <el-option value="f" label="Select wealth < 30000">Select wealth <30000</el-option>
      </el-option-group>
      <el-option-group label="Choose strength option">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          {{item.label}}
        </el-option>
      </el-option-group>
    </el-select>
<!--    {{console.log('####',filterSelect)}}-->
    <br>
  </div>
  <br>
  <table v-if="filterData.length">
    <thead>
    <tr>
      <th v-for="(col,index) in columns"
          @click="changeSort(col)"
          :key="`${col}-${index}`"
          :class="{active: col == sortValue}"
      >
        {{capitalize(col)}}
        <span class="arrow" :class="sortOrder[col] > 0 ? 'asc' : 'dsc' ">
          </span>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="entry in filterData"
        :key="entry.id"
        v-show="multipleShowRow(entry)&&showRow(entry)">
      <!--  <td v-for="item in entry">-->
      <!--    {{item}}-->
      <!--  </td>-->
      <!--      等价于-->
      <td v-for="item in columns">
        {{entry[item]}}
      </td>
    </tr>
    </tbody>
  </table>
  <el-card v-else>
    <h1>Not match!</h1>
  </el-card>
</template>

<script setup lang="ts">
import {ref,computed,watch} from "vue";
//import {getBindingIdentifiers} from "@babel/types";
//import keys = getBindingIdentifiers.keys;

const options=ref([
  {value:'high',label:'high'},
  {value:'mid-high',label:'mid-high'},
  {value:'mid-low',label:'mid-low'},
  {value:'low',label:'low'},
])
const gridData=[
  {name: 'Linncharm', strength: 57, wealth: 45000, car:true, brand: 'Toyota', price: 25000, tel: 123},
  {name: 'Jack', strength: 62, wealth: 32000, car:true,brand: 'Honda', price: 18000, tel: 123},
  {name: 'Anne', strength: 45, wealth: 53000, car:true,brand: 'Ford', price: 22000, tel: 123},
  {name: 'Brian', strength: 78, wealth: 41000, car:true,brand: 'Tesla', price: 35000, tel: 123},
  {name: 'Jesse', strength: 84, wealth: 59000, car:true,brand: 'BMW', price: 40000, tel: 123},
  {name: 'Zero', strength: 33, wealth: 15000, car:true,brand: 'Nissan', price: 17000, tel: 123},
  {name: 'Karma', strength: 92, wealth: 48000, car:false,brand: 'Audi', price: 33000, tel: 123},
  {name: 'Math', strength: 50, wealth: 23000, car:true,brand: 'Chevrolet', price: 21000, tel: 123},
  {name: 'Handsome', strength: 76, wealth: 68000, car:true,brand: 'Mercedes', price: 45000, tel: 123},
  {name: 'White', strength: 66, wealth: 29000, car:true,brand: 'Volvo', price: 27000, tel: 123},
  {name: 'Black', strength: 44, wealth: 38000, car:true,brand: 'Mazda', price: 20000, tel: 123},
  {name: 'Fring', strength: 59, wealth: 36000, car:false,brand: 'Subaru', price: 24000, tel: 123},
  {name: 'Saul', strength: 88, wealth: 62000, car:true,brand: 'Jaguar', price: 50000, tel: 123},
  {name: 'Kin', strength: 71, wealth: 54000, car:true,brand: 'Hyundai', price: 28000, tel: 123}
]

const searchQuery = ref('')

const columns = ['name', 'strength', 'wealth', 'car','brand','price','tel'];

const filterSelect = ref('a');

const filterMultipleSelect = ref([])

const props = {
  data:gridData,
  columns: columns,
}

//要排序的那一列
const sortValue = ref('')

//const filterValue = ref(props.search)

// ['name':1,'age':1 ... ]
const sortOrder = ref(
    props.columns.reduce((o,key)=>(o[key]=1,o),{})
)
//console.log('sortOrder',sortOrder)
//1.分为过滤的data和排序的data
const filterData = computed(() => {
  let{data} = props

  //排序
  if(sortValue.value){
    data=data.slice().sort(compare)
  }


  //过滤

  if(searchQuery.value){
    searchQuery.value=searchQuery.value.toLowerCase()
    data=data.filter((row)=>{
      return Object.keys(row).some((key)=>{
        return String(row[key]).toLowerCase().indexOf(<string>searchQuery.value) > -1
      })
    })
  }

  //用于sort的对比函数
  //value1=['name':aaa,age:1010 ...]
  function compare(value1, value2){

    const value=sortValue.value; //name,age ...
    // const order = sortOrder[value]  //1 or -1
    const order = sortOrder.value[value]
    value1=value1[value]
    value2=value2[value]

    return (value1===value2 ? 0 : value1 > value2 ? 1 : -1) * order;
  }
  return data
})

//1.将此列转换为倒序  2.排序值等于此值
function changeSort(key) {

  sortValue.value = key
  console.log(sortValue.value)
  sortOrder.value[key] *= -1

}

//首字母大写
function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//?????????????????????????????????????????????????????????????
// function showRow(key){
//   return Object.keys(filterData).some(function(k) {
//     console.log('entry', k);
//     if (filterSelect.value == 'b') {
//       return filterData[k].car == true;
//     } else if (filterSelect.value == 'c') {
//       return filterData[k].car == false;
//     } else {
//       return true;
//     }
//   });
// }

/* 可以有简化写法
function showRow(key: object) {
  if(filterSelect.value=='a'){
    return true
  }else if(filterSelect.value=='b'&&key.car==true){
    return true
  }else if(filterSelect.value=='c'&&key.car==false){
    return true
  }else if(filterSelect.value=='d'&&key.wealth>=50000){
    return true
  }else if(filterSelect.value=='e'&&30000<=key.wealth&&key.wealth<50000){
    return true
  }else if(filterSelect.value=='f'&&key.wealth<30000){
    return true
  }else if(filterSelect.value=='high'&&key.strength>80){
    return true
  }else if(filterSelect.value=='mid-high'&&key.strength>60&&key.strength<=80){
    return true
  }else if(filterSelect.value=='mid-low'&&key.strength>40&&key.strength<=60){
    return true
  }else if(filterSelect.value=='low'&&key.wealth<=40){
    return true
  }
}

*/

function showRow(key) {
  const conditions = {
    //后面是对应的判断函数，返回true或false
    'a': () => true,
    'b': () => key.car === true,
    'c': () => key.car === false,
    'd': () => key.wealth >= 50000,
    'e': () => key.wealth >= 30000 && key.wealth < 50000,
    'f': () => key.wealth < 30000,
    'high': () => key.strength > 80,
    'mid-high': () => key.strength > 60 && key.strength <= 80,
    'mid-low': () => key.strength > 40 && key.strength <= 60,
    'low': () => key.strength <= 40,
  };

  // 直接根据 `filterSelect.value` 选择对应条件执行
  return conditions[filterSelect.value] ? conditions[filterSelect.value]() : false;
}

function multipleShowRow(key){
  //const i = ref(0)
  let i = 0
  const n = filterMultipleSelect.value.length;
  //console.log('111111',n)
  //console.log(filterMultipleSelect.value)
  //console.log(filterMultipleSelect.value[0])
  const conditions = {
    //后面是对应的判断函数，返回true或false
    'a': () => true,
    'b': () => key.car === true,
    'c': () => key.car === false,
    'd': () => key.wealth >= 50000,
    'e': () => key.wealth >= 30000 && key.wealth < 50000,
    'f': () => key.wealth < 30000,
    'high': () => key.strength > 80,
    'mid-high': () => key.strength > 60 && key.strength <= 80,
    'mid-low': () => key.strength > 40 && key.strength <= 60,
    'low': () => key.strength <= 40,
  };
  while(i < n) {   //注意，这里需要i.value
    //console.log('???',filterMultipleSelect.value[i.value])
    if( conditions[filterMultipleSelect.value[i]]() ){
      //注意！！！上面的i也要带value！！！
      i+=1
    }
    //有不符合的返回false，entry不显示
    else {
      return false;
    }
  }
  return true
}


</script>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  background: skyblue;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>

<template>
  <div class="box" :style="{background:`url(${bg})`}">
    <div class="left">
          <div
              class="list
          inline-flex"
      h="30"
      w="30"
      m="2"
      :style="{
      boxShadow: `var(--el-box-shadow-dark)`,
      }" >
            <div> <p>较上日+{{ Store.chinaAdd.localConfirmH5 }}</p> <span>{{ Store.chinaTotal.localConfirm }}</span> <p>本土现有确诊</p>
            </div>
            <div> <p>较上日+{{ Store.chinaAdd.nowConfirm }}</p> <span>{{ Store.chinaTotal.localConfirm }}</span> <p>现有确诊</p>
            </div>
            <div> <p>较上日+{{ Store.chinaAdd.confirm }}</p> <span>{{ Store.chinaTotal.confirm }}</span> <p>累积确诊</p>
            </div>
            <div> <p>较上日+{{ Store.chinaAdd.noInfect }}</p> <span>{{ Store.chinaTotal.noInfect }}</span> <p>无症状感染者</p>
            </div>
            <div> <p>较上日+{{ Store.chinaAdd.importedCase }}</p> <span>{{ Store.chinaTotal.importedCase }}</span> <p>境外输入</p>
            </div>
            <div> <p>较上日+{{ Store.chinaAdd.dead }}</p> <span>{{ Store.chinaTotal.dead }}</span> <p>累计死亡</p>
            </div>
          </div>


      <div class="rounded  inline-flex"
      h="30"
      w="30"
      m="2"
      :style="{
      boxShadow: `var(--el-box-shadow-dark)`}">


      </div>

      <div class="Line inline-flex"
           h="30"
           w="30"
           m="2"
           :style="{
      boxShadow: `var(--el-box-shadow-dark)`}">



      </div>


    </div>



    <div class="center" id="china">
    </div>
    <div class="right">

        <Transition name="custom-classes" leave-active-class="animate__animated animate__backOutRight" enter-active-class="animate__animated animate__backInRight">

      <el-table v-show="flag" :data="Store.item" style="width: 100%">
        <el-table-column prop="name" label="地区"  />
        <el-table-column prop="today.confirm" label="新增确诊" />
        <el-table-column prop="total.confirm" label="累计确诊" />
        <el-table-column prop="total.heal" label="治愈" />
        <el-table-column prop="total.dead" label="死亡" />
      </el-table>


        </Transition>


    </div>
  </div>

</template>


<style lang="scss">
@import "@/assets/base.css";
//背景图两种引入方法
// 首先，public 中一般存放的是 服务器上，及引入之后会提供一个链接，和index.html同级别
// assets中的资源和js，css,jpg，会打包到assets下的目录，绝对路径的基本
// (1)直接使用@assets/xxx.jpg 导入给css
// (2)使用import导入到js中当作变量，再放在templates中的样式中



.box
{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 400px auto 400px;
  overflow: hidden;
  // 使用BFC

  .left{
    .list{
      margin: 20px 0 0 20px;
      height: 300px;
      //border: 5px solid #C6D0D3FF;
      display: grid;
      grid-template-columns: repeat(3,auto);
      grid-template-rows: repeat(2,auto);
      background-color: transparent;
      background-origin: content-box;
      text-align: center;
      grid-gap: 10px 10px;
      div{
        color: white;
        background-color: rgba(26,187,236,0);
        span{
          color: #0c3653;
          font-size: 24px;
        }
      }
    }
    .rounded
    {
     margin:  20px 0 0 20px;
      //width: 100%;
      height: 380px;
      background-color: transparent;
    }
    .Line
    {
      margin:  20px 0 0 20px;
      //width: 100%;
      height: 400px;
      background-color: transparent;
    }
  }
  .center{
    //background: #8d2476;
  }
  .right
  {
    margin: 20px 20px;
    div
    {
      background-color: transparent;
      div{

        background-color: transparent;
      }

    }
    table{
      background-color: transparent;
    }
    tr{
      background-color: transparent;
    }
    td{
      background-color: transparent;
    }




  }
}

</style>




<script setup lang="ts">
import bg from "@/assets/11.jpg"
import {useMapStore} from "@/stores";
import {nextTick, onBeforeMount, onMounted, ref, type Ref} from "vue";
import {geoCoordMap }from "@/assets/geoMap"
import  "animate.css"


//1.映入Echarts
import * as  echarts from "echarts" //echarts 5.xx的引入方式

// 5.引入chian.js
import "@/assets/china"
import type {RootDiseaseh5ShelfAreaTreeChildrenChildren} from "@/stores/MapdataType";

// 6.给div设置宽高


let flag: Ref = ref(true) ;

let Store=useMapStore();

let data: { name: string; value: number[]; children: RootDiseaseh5ShelfAreaTreeChildrenChildren[] }[]=[];

// 将Echarts的初始化封装到函数中
const initEcharts=()=>
{


  const cities=Store.mapData?.diseaseh5Shelf?.areaTree[0].children;

  Store.item=cities?.[1].children

  // 1.1获得城市名字,构造需要的数据，感染数为数组最后拼接

 cities?.map(item=>{
   data.push({
       name: item.name,
       value: geoCoordMap?.[item.name]?.concat(item.total.nowConfirm),
       children: item.children
     })
  })
  console.log("原始数据",Store.mapData,"传入的data",data)


  // 2基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.querySelector('#china') as HTMLDivElement);
  // 3.配置数据
  // 指定图表的配置项和数据

  // 数据来源https://www.isqqw.com/echartsdetail?id=15158

  let option = {
    // backgroundColor: "black",
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "120%",
      itemStyle: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
      },
      emphasis: {// 和itemStyle是平级的
        areaColor: "#0f5d9d",
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },

    series: [
      {
        type: "map",
        //选择方式，下面是多选
        // selectedMode: "multiple",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "120%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },

        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: false,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        // name: 'Top 5', 不要这个名字
        type: 'scatter',
        coordinateSystem: 'geo',
        //修改角标，就是选择就会有一一个标
        symbol:"pin", // 气泡
        symbolSize:[45,45],// 宽。高
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        label: {

          show: true, // 数字开关
          color:"#fff",
          //添加一个函数
          formatter(value:any)
          {
            // console.log("添加的值",value)
            return value.data.value[2];// 返回值表示数据
          }
        },
        itemStyle: {

          color: '#D8BC37', //标志颜色

        },
        data: data,
      },
    ],
  };

  // 4.选择展示图像
  myChart.setOption(option)

  // 点击事件
  myChart.on("click",(e:any)=>{
    console.log("点击方法",e,"=>>",Store.item,"e",e)
    // 存储当前点击的省的数据
    Store.item=e.data.children;
    flag.value=!flag.value;

  })

}




// 封装圆角环形图
let initRounded=()=>
{
  // 构造数据
  // let Data=
  console.log("圆角环形图",Store.cityDetail)



  type EChartsOption = echarts.EChartsOption;

  let chartDom = document.querySelector('.rounded') as HTMLDivElement;
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    tooltip: {
      trigger: 'item'
    },
    // legend: {  1.去掉小块
    //   top: '5%',
    //   left: 'center'
    // },
    series: [
      {
        name: '今日累积确诊人数环形图',
        type: 'pie',
        radius: ['30%', '70%'],
        // avoidLabelOverlap: false, 5.字体超出
        itemStyle: {
          borderRadius: 4,//2.修改圆角大小
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true, // 3.显示线
      // position: 'center'      // 四周显示
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12', //4字体调小
            // fontWeight: 'bold'
          }
        },
        // labelLine: { 展示线
        //   show: false
        // },
        data:Store.cityDetail.map((item)=>({
          value: item.nowConfirm, name: item.city
        }))

      }
    ]
  };

  option && myChart.setOption(option);
}

// 封装折线图

let initLine=()=>
{

  console.log("折线图数据",Store.cityDetail,Store.cityDetail.map(v=>v.city),Store.cityDetail.map(v=>v.nowConfirm),)
  let chartDom = <HTMLDivElement>document.querySelector('.Line');
  let myChart = echarts.init(chartDom);
  let option;

  option = {
    xAxis: {
      type: 'category',
      data: Store.cityDetail.map(v=>v.city)
          //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: // 2添加标尺
        {
          trigger: "axis"
        }
    ,
    label: // 1添加数值
        {
          show:true
        },
    series: [
      {
        data: Store.cityDetail.map(v=>v.nowConfirm),
        //[820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };

  option && myChart.setOption(option);

}

onMounted(async () => {
  await Store.getData();
  initEcharts();
  initRounded();
  initLine();
})


</script>



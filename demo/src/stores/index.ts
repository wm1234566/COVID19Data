import {defineStore} from 'pinia'
import {result} from "@/stores/getData"
// 1.用 json2ts生成类型声明的ts文件
// 2. 用import type导入根类型,将类型赋值给相应的对象
// 注意:import type 是用来协助进行类型检查和声明的，在运行时是完全不存在的。
// 4.数据中需要省的经纬度数据，在assets下面的geoMap.ts中
import type {
    Root,
    RootDiseaseh5ShelfAreaTreeChildrenChildren,
    RootDiseaseh5ShelfChinaAdd,
    RootDiseaseh5ShelfChinaTotal,
    RootStatisGradeCityDetail,
} from "./MapdataType"

// @ts-ignore
// @ts-ignore
export const useMapStore = defineStore("Store", {
    state: () => ({
            //这里注意：key：value而不是类型，<Root>{}是类型断言，表示{}是Root类型的
            mapData:<Root>{}  ,// 存储总数据
            item:<RootDiseaseh5ShelfAreaTreeChildrenChildren[]>[],
            chinaAdd:<RootDiseaseh5ShelfChinaAdd>{},
            chinaTotal:<RootDiseaseh5ShelfChinaTotal>{},
            cityDetail:<RootStatisGradeCityDetail[]>{}

        }
    ),

    getters: {},
    actions: {
        async getData() {
            let res = await result()
            console.log("获取到数据", res)
            this.mapData = res
            this.chinaAdd=this.mapData.diseaseh5Shelf.chinaAdd;
            this.chinaTotal=this.mapData.diseaseh5Shelf.chinaTotal;
            this.cityDetail=this.mapData.statisGradeCityDetail.slice(0,10);// 获取前10个
        }
    }


})


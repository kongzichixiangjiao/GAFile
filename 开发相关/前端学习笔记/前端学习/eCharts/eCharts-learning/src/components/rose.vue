<template>
  <div id="main"></div>
</template>

<script>
export default {
  mounted() {
    console.log(this.axios);

    this.axios.get("../../static/echarts.config.json").then(res => {
      // 引入 ECharts 主模块
      var echarts = require("echarts/lib/echarts");
      // 引入柱状图
      require("echarts/lib/chart/pie");
      // 引入提示框和标题组件
      require("echarts/lib/component/legend");
      require("echarts/lib/component/toolbox");
      require("echarts/lib/component/tooltip");

      require("echarts/lib/component/title");
      echarts.registerTheme("customerTheme", res.data);

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(
        document.getElementById("main"),
        "customerTheme"
      );

      let option = {
        // 设置玫瑰颜色 也可以再json配置
        color: [
          "#ff0000",
          "#00ff00",
          "#0000ff",
          "#d0648a",
          "#f58db2",
          "#f2b3c9"
        ],
        title: {
          text: "玫瑰图",
          subtext: "测试玫瑰图",
          left: "center"
        },
        legend: {
          left: "center",
          top: "bottom",
          data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            "rose6",
            "rose7",
            "rose8"
          ]
        },
        tooltip: {
          trigger: "item",
          // formatter展示是否才触发
          formatter: function(params) {
            // do some thing
            console.log(params);
            let result =
              "自定义：" +
              `<div style="background-color: #ff0000" class="echarts-formatter">` +
              params.name +
              `</div>`;
            console.log(result);
            /*
            borderColor: "#dbdbdb"
            color: "#00ff00"
            componentIndex: 1
            componentSubType: "pie"
            componentType: "series"
            data: {value: 40, name: "rose8"}
            dataIndex: 7
            dataType: undefined
            dimensionNames: ["value"]
            encode: {value: Array(1)}
            marker: "<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#00ff00;"></span>"
            name: "rose8"
            percent: 22.22
            seriesId: "面积模式0"
            seriesIndex: 1
            seriesName: "面积模式"
            seriesType: "pie"
            value: 40
            */

            return result;
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [90, 120],
            center: ["20%", "30%"],
            // roseType: "radius", // 不设置是一个圆环
            label: {
              show: false,
              color: "#ff0000"
            },
            // label渐变到emphasis
            emphasis: {
              label: {
                show: true,
                color: "#0000ff"
              }
            },
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
              { value: 35, name: "rose6" },
              { value: 30, name: "rose7" },
              { value: 40, name: "rose8" }
            ]
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["60%", "60%"],
            roseType: "area",
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center"
                },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            },
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
              { value: 35, name: "rose6" },
              { value: 30, name: "rose7" },
              { value: 40, name: "rose8" }
            ]
          }
        ]
      };

      // 绘制
      myChart.setOption(option);
    });
  }
};
</script>

<style>
#main {
  width: 700px;
  height: 600px;
  background-color: #e4e4e4;
}
.echarts-formatter {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
</style>

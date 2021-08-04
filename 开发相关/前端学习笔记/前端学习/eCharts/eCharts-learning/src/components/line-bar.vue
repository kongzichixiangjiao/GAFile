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
      require("echarts/lib/chart/bar");
      require("echarts/lib/chart/line");
      // 引入提示框和标题组件
      require("echarts/lib/component/tooltip");
      require("echarts/lib/component/legend");
      require("echarts/lib/component/toolbox");
      require("echarts/lib/component/markLine");
      require("echarts/lib/component/dataZoom");

      require("echarts/lib/component/title");
      echarts.registerTheme("customerTheme", res.data);

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(
        document.getElementById("main"),
        "customerTheme"
      );

      let option = {
        title: {
          text: "折线图堆叠"
        },
        // tooltip 鼠标放上 x轴y轴出现对应的值
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              // 设置背景色和颜色
              backgroundColor: "#6a7985",
              color: "#ff0000"
            }
          }
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告"]
        },
        grid: {
          left: "3%",
          right: "15%",
          bottom: "3%",
          top: "16%",
          containLabel: true
        },
        toolbox: {
          show: true,
          feature: {
            // 区域缩放
            dataZoom: {
              yAxisIndex: "none"
            },
            // 数据视图
            dataView: { readOnly: false },
            // 视图切换
            magicType: { type: ["line", "bar"] },
            // 刷新
            restore: {},
            // 保存图片
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 230,
            // handleIcon: "", // 设置滑动的icon 设置为空串dataZoom失效
            handleSize: "80%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        xAxis: {
          name: "星期",
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: {
            interval: 0,
            rotate: 40 // 设置斜体
          }
        },

        yAxis: {
          name: "总值是多少",
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            // lineStyle可以在json文件配置
            lineStyle: {
              color: "green",
              width: 5
            },
            areaStyle: {}, // 折线下方是否填充颜色
            smooth: true, // 是否平滑
            label: {
              normal: {
                show: true,
                position: "top",
                color: "#000" // 设置曲线结点上方的颜色
              }
            },
            markLine: {
              symbol: ["roundRect", "diamond"], // 设置标线顶部是否有样式 前面是开始点，后面是结尾点 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' 也可以通过 'image://url' 设置为图片
              label: { show: true, color: "#ff0000", size: 30 }, // 设置表现上面的字体
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
              lineStyle: {
                width: 2,
                type: "solid"
              }
            }
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            areaStyle: {},
            smooth: false // 是否平滑 可以true false 也可以使用小数
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
            areaStyle: {}
          }
        ]
      };

      myChart.on("updateAxisPointer", function(event) {
        // 监听updateAxisPointer事件
        console.log(event);
      });
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
</style>

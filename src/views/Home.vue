<template>
  <div class="home">
    <div class="broser_box">
      <ul class="row" v-for="(item, index) in project" :key="index">
        <template v-for="(ele, idx) in item.itemData">
          <li :class="['row_item', ele]" :key="idx">
            {{ ele.nodeState }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
let project = [
  {
    itemName: "XX项目1",
    itemData: [
      {
        nodeName: "项目立项",
        nodeState: "已完成",
        index: "1",
      },
      {
        nodeName: "设计输入评审",
        nodeState: "执行中",
        index: "2",
      },
      {
        nodeName: "设计与开发",
        nodeState: "未开始",
        index: "3",
      },
      {
        nodeName: "方案定义",
        nodeState: "未开始",
        index: "4",
      },
      {
        nodeName: "开发测试",
        nodeState: "未开始",
        index: "5",
      },
      {
        nodeName: "部署上线",
        nodeState: "未开始",
        index: "6",
      },
      {
        nodeName: "上线支持与结项",
        nodeState: "未开始",
        index: "7",
      },
    ],
    itemID: "11111111111111111",
    url: "wwwwww",
  },
  {
    itemName: "XX项目2",
    itemData: [
      {
        nodeName: "项目立项",
        nodeState: "已完成",
        index: "1",
      },
      {
        nodeName: "设计输入评审",
        nodeState: "已完成",
        index: "2",
      },
      {
        nodeName: "设计与开发",
        nodeState: "已完成",
        index: "3",
      },
      {
        nodeName: "方案定义",
        nodeState: "已完成",
        index: "4",
      },
      {
        nodeName: "开发测试",
        nodeState: "执行中",
        index: "5",
      },
      {
        nodeName: "部署上线",
        nodeState: "未开始",
        index: "6",
      },
      {
        nodeName: "上线支持与结项",
        nodeState: "未开始",
        index: "7",
      },
    ],
    itemID: "22222222222222",
    url: "ssssssssss",
  },
  {
    itemName: "XX项目3",
    itemData: [
      {
        nodeName: "项目立项",
        nodeState: "已完成",
        index: "1",
      },
      {
        nodeName: "设计输入评审",
        nodeState: "已完成",
        index: "2",
      },
      {
        nodeName: "设计与开发",
        nodeState: "已完成",
        index: "3",
      },
      {
        nodeName: "方案定义",
        nodeState: "已完成",
        index: "4",
      },
      {
        nodeName: "开发测试",
        nodeState: "执行中",
        index: "5",
      },
      {
        nodeName: "部署上线",
        nodeState: "未开始",
        index: "6",
      },
    ],
  },
];
export default {
  name: "Home",
  components: {},
  data() {
    return {
      project,
    };
  },
  mounted() {
    axios.get("/api");
  },
};
</script>

<style scoped>
.broser_box {
  width: 1000px;
  height: 400px;
  margin: 100px auto;
}
.row {
  height: 100px;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.row_item {
  width: 250px;
  height: 100%;
  float: left;
}
</style>

<template>
  <div id="container">
    <div id="sidebar">
      <span @mousedown="dragRow">Row</span>
      <span @mousedown="dragCol">Col</span>
      <span @mousedown="dragButton">Button</span>
    </div>
    <div id="editpanel" data-accept-type="row">
      <div data-accept-type="col" v-bind:data-col="i" class="row" v-for="(row, i) of rows" v-bind:key="row">
        <div data-accept-type="btn" v-bind:data-col="j" class="col" v-for="(col, j) of rows.cols" v-bind:key="col">
          <button v-for="ele of col.children" v-bind:key="ele">{{ ele.content }}</button>
        </div>
      </div>
    </div>
    <div id="dragable" :style="{ left: drag.x + 'px', top: drag.y + 'px' }" v-if="drag.isDragging">{{ drag.type }}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drag: {
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      x: 10,
      y: 100,
      type: 'none',
      isDragging: false,
    },
    rows: [
      {},
      {},
      {},
      {},
      {},
      {
        type: 'row',
        height: 300,
        cols: [
          {
            type: 'col',
            width: 100,
            children: [
              {
                type: 'btn',
                content: '按钮',
              },
            ],
          },
        ],
      },
    ],
  }),
  // components: {},
  methods: {
    dragStart(type) {
      this.drag.type = type
      this.drag.isDragging = true
      let move = (e) => {
        this.drag.x = e.clientX + 10
        this.drag.y = e.clientY + 10
      }
      let up = (e) => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
        this.drag.isDragging = false
        let areaElement = document.elementFromPoint(e.clientX, e.clientY)
        let current = areaElement
        while (current && current.dataset['acceptType'] != type) {
          current = current.parent
        }
        if (type == 'row') {
          this.rows.push({ cols: [] })
        }
        if (type == 'col') {
          this.rows[current.dataset['row']].cols.push({ children: [] })
        }
        if (type == 'btn') {
          this.rows[current.dataset['row']].cols[current.dataset['col']].children.push({ content: 'btn' })
        }
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    dragRow() {
      this.dragStart('row')
    },
    dragCol() {
      this.dragStart('col')
    },
    dragButton() {
      this.dragStart('btn')
    },
  },
}
</script>

<style>
#container {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: aquamarine;
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
}
#sidebar {
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
  border: solid 1px black;
  user-select: none;
}
#editpanel {
  flex: 1;
}
.row {
  width: 100%;
  min-height: 300px;
  background-color: beige;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
}
.col {
  height: 200px;
  background-color: green;
  min-width: 200px;
  margin: 10px;
}
#dragable{
  box-sizing: border-box;
  border: solid 1px black;
  width: 60px;
  height: 60px;
  position:absolute;
}
</style>

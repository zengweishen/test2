webpackJsonp([29],{F842:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("INCx"),r=i.n(a),n=(i("7+uW"),i("X2Oc")),s=i("diDo"),o={name:"curd",components:{},data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-6048e5),t.$emit("pick",[i,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-2592e6),t.$emit("pick",[i,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-7776e6),t.$emit("pick",[i,e])}}]},time_range:[0,Date.parse(new Date+864e5)],app_list_url:"/api/vullog/list",is_report_visible:!1,is_solution_visible:!1,cronPopover:!1,cron:"",rank:0,links:[],task_type:"立即任务",url:"",form_errors:[],cur_entity:{},add_url:"/api/vullog/add",list_url:"/api/extension/log/list",del_url:"/api/vullog/del",role_list_url:"/api/role/select",del_list:new URLSearchParams,tableData:[],select_word:"",cur_page:1,page_size:10,total:0,multipleSelection:[],editVisible:!1,createVisible:!1,vul_id:null,form:{self_rank:"1",layer:10},role_options:[{value:"__",label:"--"}],static_config:s.b}},created:function(){this.getData()},updated:function(){this.$desensitive()},computed:{colortype:function(){return this.form.self_rank>=0&&this.form.self_rank<6?"success":this.form.self_rank<11?"":this.form.self_rank<16?"danger":this.form.self_rank<=20?"warning":void 0},risklevel:function(){return this.form.self_rank>=0&&this.form.self_rank<6?"低危":this.form.self_rank<11?"中危":this.form.self_rank<16?"高危":this.form.self_rank<=20?"严重":void 0}},filters:{getDateDiff_timestamp:function(t){return Object(n.e)(t)},formatDate:function(t){var e=new Date(r()(1e3*t));return Object(n.c)(e,"yyyy-MM-dd HH:mm:ss")},statusFilter:function(t){return{0:"info",1:"success","-1":"danger"}[t]},statusNameFilter:function(t,e){return s.b[e][t]}},methods:{filterTitle:function(t){this.vul_id=t,this.getData()},statusColor:function(t){return Object(n.g)(t)},pocChange:function(t,e){this.form.vul_poc_html=e},$imgAdd:function(t,e){var i=this,a=new FormData;a.append("image",e),this.$axios({url:"/api/image/upload",method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}}).then(function(e){i.$refs.poc_editor.$img2Url(t,"api/"+e.data.path)})},handleSelect:function(t){this.form.app_id=t.id},querySearchAsync:function(t,e){this.$axios.get(this.app_list_url,{params:{search:t}}).then(function(t){var i=new Array;t.data.result.map(function(t){i.push({value:t.appname,id:t.id})}),e(i)})},handleClose:function(t){this.$confirm("数据还未提交，确认关闭？").then(function(e){t()}).catch(function(t){})},getRoleList:function(){var t=this;this.$axios.get(this.role_list_url,{params:{type:0}}).then(function(e){t.role_options=e.data.result})},sortChange:function(t,e,i){this.sortcolumn=t.prop,this.sortorder=t.order,this.getData()},viewUser:function(){this.cur_entity.id?this.$router.push({name:"viewvulndetail",params:this.cur_entity}):this.$message.info("请选择数据")},checkForm:function(){if(this.form.username&&this.form.password&&this.form.repassword&&null!=this.form.enable&&this.form.password==this.form.repassword)return!0;this.form_errors=[],this.form.username||this.form_errors.push("请输入用户名"),this.form.password||this.form_errors.push("请输入密码"),this.form.repassword||this.form_errors.push("请输入重复密码"),this.form.repassword&&this.form.repassword&&this.form.username!==this.form.repassword&&this.form_errors.push("两次密码输入不一致"),this.form.enable||this.form_errors.push("请选择状态")},doCreate:function(t){var e=this;this.$axios.post(this.add_url,Object(n.h)(this.form)).then(function(t){1==t.data.status?(e.$message.success("操作成功"),e.getData()):e.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg),e.createVisible=!1,e.editVisible=!1})},getData:function(){var t=this;this.$axios.get(this.list_url,{params:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder,start:this.time_range?this.time_range[0]/1e3:null,end:this.time_range?this.time_range[1]/1e3:null,vul_id:this.vul_id}}).then(function(e){t.tableData=e.data.result,t.total=e.data.total})},handleSizeChange:function(t){this.page_size=t,this.getData()},handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleCurrentChangeRow:function(t){this.cur_entity=t},search:function(){this.getData()},handleEdit:function(t,e){this.form_errors=[],this.editVisible=!0,this.form=e,delete this.form.create_time,this.form.enable=1==e.enable?"1":"0"},handleSelectionChange:function(t){this.multipleSelection=t},dataDel:function(t){var e=this,i=null;if(t)i=t;else{if(this.multipleSelection.length<=0)return void this.$message.info("未选择任何数据");this.del_list=this.multipleSelection.map(function(t){return t.id}),i=this.del_list}this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.del_url,Object(n.h)({id:i})).then(function(t){t.data.status>=1?(e.getData(),e.$message.success("删除成功")):e.$message.error("删除失败, 错误码: "+t.data.status)})}).catch(function(){})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),t._v(" 扩展\n      ")]),t._v(" "),i("el-breadcrumb-item",[t._v("执行日志")])],1)],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-input",{staticClass:"handle-input",attrs:{size:"mini",placeholder:"请输入关键词"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{size:"mini"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),t._v(" "),i("el-date-picker",{attrs:{type:"datetimerange","value-format":"timestamp","picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"mini",align:"right"},model:{value:t.time_range,callback:function(e){t.time_range=e},expression:"time_range"}}),t._v(" "),i("div",{staticStyle:{float:"right"}})],1),t._v(" "),i("el-table",{attrs:{data:t.tableData,border:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange,"current-change":t.handleCurrentChangeRow,"sort-change":t.sortChange}},[i("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"30"}}),t._v(" "),i("el-table-column",{attrs:{prop:"app_name",label:"应用","min-width":"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"op_username",label:"操作人","min-width":"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"insight_sensitive"},[t._v("["+t._s(e.row.op_username)+"]")])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:" 时间","min-width":"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{attrs:{effect:"light",content:t._f("formatDate")(e.row.create_time),placement:"right"}},[i("span",[t._v(t._s(t._f("getDateDiff_timestamp")(e.row.create_time)))])])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"title",label:"名称","min-width":"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"is_auto",label:"类型","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"primary-title"},[t._v(t._s(e.row.is_auto?"手动操作":"计划任务"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"content",label:"内容","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[i("div",{domProps:{innerHTML:t._s(e.row.content)}},[t._v("["+t._s(e.row.content)+"]")])])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"current-page":t.cur_page,"page-sizes":[10,20,50,100],"page-size":t.page_size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.cur_page=e},"update:current-page":function(e){t.cur_page=e},"update:pageSize":function(e){t.page_size=e},"update:page-size":function(e){t.page_size=e},"update:total":function(e){t.total=e}}})],1)],1)])},staticRenderFns:[]};var c=i("VU/8")(o,l,!1,function(t){i("hPCl")},"data-v-2c519e13",null);e.default=c.exports},hPCl:function(t,e){}});
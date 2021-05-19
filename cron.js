<template>
    <div class="cron">
      <el-tabs v-model="activeName" @tab-click="tabchang" type="border-card">
        <el-tab-pane label="秒" name="s">
          <div title="秒">
            <div class="line">
              <input type="radio" checked="checked" name="second" @click="everyTime($event)" />
              每秒 允许的通配符[, - * /]
            </div>
            <div class="line">
              <input type="radio" name="second" @click="cycle($event)" /> 周期从
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:58" value="1" id="secondStart_0" />
              -
              <input class="numberspinner" style="width: 60px;" data-options="min:2,max:59" value="2" id="secondEnd_0" />
              秒
            </div>
            <div class="line">
              <input type="radio" name="second" @click="startOn($event)" /> 从
              <input class="numberspinner" style="width: 60px;" data-options="min:0,max:59" value="0" id="secondStart_1" />
              秒开始,每
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:59" value="1" id="secondEnd_1" />
              秒执行一次
            </div>
            <div class="line"><input type="radio" name="second" id="sencond_appoint" /> 指定</div>
            <div class="imp secondList">
              <input type="checkbox" value="0" />00 <input type="checkbox" value="1" />01
              <input type="checkbox" value="2" />02 <input type="checkbox" value="3" />03
              <input type="checkbox" value="4" />04 <input type="checkbox" value="5" />05
              <input type="checkbox" value="6" />06 <input type="checkbox" value="7" />07
              <input type="checkbox" value="8" />08 <input type="checkbox" value="9" />09
            </div>
            <div class="imp secondList">
              <input type="checkbox" value="10" />10 <input type="checkbox" value="11" />11
              <input type="checkbox" value="12" />12 <input type="checkbox" value="13" />13
              <input type="checkbox" value="14" />14 <input type="checkbox" value="15" />15
              <input type="checkbox" value="16" />16 <input type="checkbox" value="17" />17
              <input type="checkbox" value="18" />18 <input type="checkbox" value="19" />19
            </div>
            <div class="imp secondList">
              <input type="checkbox" value="20" />20 <input type="checkbox" value="21" />21
              <input type="checkbox" value="22" />22 <input type="checkbox" value="23" />23
              <input type="checkbox" value="24" />24 <input type="checkbox" value="25" />25
              <input type="checkbox" value="26" />26 <input type="checkbox" value="27" />27
              <input type="checkbox" value="28" />28 <input type="checkbox" value="29" />29
            </div>
            <div class="imp secondList">
              <input type="checkbox" value="30" />30 <input type="checkbox" value="31" />31
              <input type="checkbox" value="32" />32 <input type="checkbox" value="33" />33
              <input type="checkbox" value="34" />34 <input type="checkbox" value="35" />35
              <input type="checkbox" value="36" />36 <input type="checkbox" value="37" />37
              <input type="checkbox" value="38" />38 <input type="checkbox" value="39" />39
            </div>
            <div class="imp secondList">
              <input type="checkbox" value="40" />40 <input type="checkbox" value="41" />41
              <input type="checkbox" value="42" />42 <input type="checkbox" value="43" />43
              <input type="checkbox" value="44" />44 <input type="checkbox" value="45" />45
              <input type="checkbox" value="46" />46 <input type="checkbox" value="47" />47
              <input type="checkbox" value="48" />48 <input type="checkbox" value="49" />49
            </div>
            <div class="imp secondList">
              <input type="checkbox" value="50" />50 <input type="checkbox" value="51" />51
              <input type="checkbox" value="52" />52 <input type="checkbox" value="53" />53
              <input type="checkbox" value="54" />54 <input type="checkbox" value="55" />55
              <input type="checkbox" value="56" />56 <input type="checkbox" value="57" />57
              <input type="checkbox" value="58" />58 <input type="checkbox" value="59" />59
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="分" name="m">
          <div title="分钟">
            <div class="line">
              <input type="radio" checked="checked" name="min" @click="everyTime($event)" /> 分钟
              允许的通配符[, - * /]
            </div>
            <div class="line">
              <input type="radio" name="min" @click="cycle($event)" /> 周期从
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:58" value="1" id="minStart_0" />
              -
              <input class="numberspinner" style="width: 60px;" data-options="min:2,max:59" value="2" id="minEnd_0" />
              分钟
            </div>
            <div class="line">
              <input type="radio" name="min" @click="startOn($event)" /> 从
              <input class="numberspinner" style="width: 60px;" data-options="min:0,max:59" value="0" id="minStart_1" />
              分钟开始,每
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:59" value="1" id="minEnd_1" />
              分钟执行一次
            </div>
            <div class="line"><input type="radio" name="min" id="min_appoint" /> 指定</div>
            <div class="imp minList">
              <input type="checkbox" value="0" />00 <input type="checkbox" value="1" />01
              <input type="checkbox" value="2" />02 <input type="checkbox" value="3" />03
              <input type="checkbox" value="4" />04 <input type="checkbox" value="5" />05
              <input type="checkbox" value="6" />06 <input type="checkbox" value="7" />07
              <input type="checkbox" value="8" />08 <input type="checkbox" value="9" />09
            </div>
            <div class="imp minList">
              <input type="checkbox" value="10" />10 <input type="checkbox" value="11" />11
              <input type="checkbox" value="12" />12 <input type="checkbox" value="13" />13
              <input type="checkbox" value="14" />14 <input type="checkbox" value="15" />15
              <input type="checkbox" value="16" />16 <input type="checkbox" value="17" />17
              <input type="checkbox" value="18" />18 <input type="checkbox" value="19" />19
            </div>
            <div class="imp minList">
              <input type="checkbox" value="20" />20 <input type="checkbox" value="21" />21
              <input type="checkbox" value="22" />22 <input type="checkbox" value="23" />23
              <input type="checkbox" value="24" />24 <input type="checkbox" value="25" />25
              <input type="checkbox" value="26" />26 <input type="checkbox" value="27" />27
              <input type="checkbox" value="28" />28 <input type="checkbox" value="29" />29
            </div>
            <div class="imp minList">
              <input type="checkbox" value="30" />30 <input type="checkbox" value="31" />31
              <input type="checkbox" value="32" />32 <input type="checkbox" value="33" />33
              <input type="checkbox" value="34" />34 <input type="checkbox" value="35" />35
              <input type="checkbox" value="36" />36 <input type="checkbox" value="37" />37
              <input type="checkbox" value="38" />38 <input type="checkbox" value="39" />39
            </div>
            <div class="imp minList">
              <input type="checkbox" value="40" />40 <input type="checkbox" value="41" />41
              <input type="checkbox" value="42" />42 <input type="checkbox" value="43" />43
              <input type="checkbox" value="44" />44 <input type="checkbox" value="45" />45
              <input type="checkbox" value="46" />46 <input type="checkbox" value="47" />47
              <input type="checkbox" value="48" />48 <input type="checkbox" value="49" />49
            </div>
            <div class="imp minList">
              <input type="checkbox" value="50" />50 <input type="checkbox" value="51" />51
              <input type="checkbox" value="52" />52 <input type="checkbox" value="53" />53
              <input type="checkbox" value="54" />54 <input type="checkbox" value="55" />55
              <input type="checkbox" value="56" />56 <input type="checkbox" value="57" />57
              <input type="checkbox" value="58" />58 <input type="checkbox" value="59" />59
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="时" name="h">
          <div title="小时">
            <div class="line">
              <input type="radio" checked="checked" name="hour" @click="everyTime($event)" /> 小时
              允许的通配符[, - * /]
            </div>
            <div class="line">
              <input type="radio" name="hour" @click="cycle($event)" /> 周期从
              <input class="numberspinner" style="width: 60px;" data-options="min:0,max:23" value="0" id="hourStart_0" />
              -
              <input class="numberspinner" style="width: 60px;" data-options="min:2,max:23" value="2" id="hourEnd_1" />
              小时
            </div>
            <div class="line">
              <input type="radio" name="hour" @click="startOn($event)" /> 从
              <input class="numberspinner" style="width: 60px;" data-options="min:0,max:23" value="0" id="hourStart_1" />
              小时开始,每
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:23" value="1" id="hourEnd_1" />
              小时执行一次
            </div>
            <div class="line"><input type="radio" name="hour" id="hour_appoint" /> 指定</div>
            <div class="imp hourList">
              AM: <input type="checkbox" value="0" />00 <input type="checkbox" value="1" />01
              <input type="checkbox" value="2" />02 <input type="checkbox" value="3" />03
              <input type="checkbox" value="4" />04 <input type="checkbox" value="5" />05
              <input type="checkbox" value="6" />06 <input type="checkbox" value="7" />07
              <input type="checkbox" value="8" />08 <input type="checkbox" value="9" />09
              <input type="checkbox" value="10" />10 <input type="checkbox" value="11" />11
            </div>
            <div class="imp hourList">
              PM: <input type="checkbox" value="12" />12 <input type="checkbox" value="13" />13
              <input type="checkbox" value="14" />14 <input type="checkbox" value="15" />15
              <input type="checkbox" value="16" />16 <input type="checkbox" value="17" />17
              <input type="checkbox" value="18" />18 <input type="checkbox" value="19" />19
              <input type="checkbox" value="20" />20 <input type="checkbox" value="21" />21
              <input type="checkbox" value="22" />22 <input type="checkbox" value="23" />23
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="日" name="d">
          <div title="日">
            <div class="line">
              <input type="radio" checked="checked" name="day" @click="everyTime($event)" /> 日
              允许的通配符[, - * / L W]
            </div>
            <!-- <div class="line">
              <input type="radio" name="day" @click="unAppoint($event)" /> 不指定
            </div> -->
            <div class="line">
              <input type="radio" name="day" @click="cycle($event)" /> 周期从
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:31" value="1" id="dayStart_0" />
              -
              <input class="numberspinner" style="width: 60px;" data-options="min:2,max:31" value="2" id="dayEnd_0" />
              日
            </div>
            <div class="line">
              <input type="radio" name="day" @click="startOn($event)" /> 从
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:31" value="1" id="dayStart_1" />
              日开始,每
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:31" value="1" id="dayEnd_1" />
              天执行一次
            </div>
            <div class="line">
              <input type="radio" name="day" @click="workDay($event)" /> 每月
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:31" value="1" id="dayStart_2" />
              号最近的那个工作日
            </div>
            <div class="line">
              <input type="radio" name="day" @click="lastDay($event)" /> 每月最后一天
            </div>
            <div class="line"><input type="radio" name="day" id="day_appoint" /> 指定</div>
            <div class="imp dayList">
              <input type="checkbox" value="1" />1 <input type="checkbox" value="2" />2
              <input type="checkbox" value="3" />3 <input type="checkbox" value="4" />4
              <input type="checkbox" value="5" />5 <input type="checkbox" value="6" />6
              <input type="checkbox" value="7" />7 <input type="checkbox" value="8" />8
              <input type="checkbox" value="9" />9 <input type="checkbox" value="10" />10
              <input type="checkbox" value="11" />11 <input type="checkbox" value="12" />12
              <input type="checkbox" value="13" />13 <input type="checkbox" value="14" />14
              <input type="checkbox" value="15" />15 <input type="checkbox" value="16" />16
            </div>
            <div class="imp dayList">
              <input type="checkbox" value="17" />17 <input type="checkbox" value="18" />18
              <input type="checkbox" value="19" />19 <input type="checkbox" value="20" />20
              <input type="checkbox" value="21" />21 <input type="checkbox" value="22" />22
              <input type="checkbox" value="23" />23 <input type="checkbox" value="24" />24
              <input type="checkbox" value="25" />25 <input type="checkbox" value="26" />26
              <input type="checkbox" value="27" />27 <input type="checkbox" value="28" />28
              <input type="checkbox" value="29" />29 <input type="checkbox" value="30" />30
              <input type="checkbox" value="31" />31
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="月" name="month">
          <div title="月">
            <div class="line">
              <input type="radio" checked="checked" name="mouth" @click="everyTime($event)" /> 月
              允许的通配符[, - * /]
            </div>
            <!-- <div class="line">
              <input type="radio" name="mouth" @click="unAppoint($event)" /> 不指定
            </div> -->
            <div class="line">
              <input type="radio" name="mouth" @click="cycle($event)" /> 周期从
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:12" value="1" id="mouthStart_0" />
              -
              <input class="numberspinner" style="width: 60px;" data-options="min:2,max:12" value="2" id="mouthEnd_0" />
              月
            </div>
            <div class="line">
              <input type="radio" name="mouth" @click="startOn($event)" /> 从
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:12" value="1" id="mouthStart_1" />
              日开始,每
              <input class="numberspinner" style="width: 60px;" data-options="min:1,max:12" value="1" id="mouthEnd_1" />
              月执行一次
            </div>
            <div class="line"><input type="radio" name="mouth" id="mouth_appoint" /> 指定</div>
            <div class="imp mouthList">
              <input type="checkbox" value="1" />1 <input type="checkbox" value="2" />2
              <input type="checkbox" value="3" />3 <input type="checkbox" value="4" />4
              <input type="checkbox" value="5" />5 <input type="checkbox" value="6" />6
              <input type="checkbox" value="7" />7 <input type="checkbox" value="8" />8
              <input type="checkbox" value="9" />9 <input type="checkbox" value="10" />10
              <input type="checkbox" value="11" />11 <input type="checkbox" value="12" />12
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="周" name="week">
          <div title="周">
            <div class="line">
              <input type="radio" checked="checked" name="week" @click="everyTime($event)" /> 周
              允许的通配符[, - * / L #]
            </div>
            <!-- <div class="line">
              <input type="radio" name="week" @click="unAppoint($event)" /> 不指定
            </div> -->
            <div class="line">
              <input type="radio" name="week" @click="startOn($event)" /> 周期 从星期<input class="numberspinner" style="width: 60px;" data-options="min:1,max:7" id="weekStart_0" value="1" />
              -
              <input class="numberspinner" style="width: 60px;" data-options="min:2,max:7" value="2" id="weekEnd_0" />
            </div>
            <div class="line">
              <input type="radio" name="week" @click="weekOfDay($event)" /> 第<input class="numberspinner" style="width: 60px;" data-options="min:1,max:4" value="1" id="weekStart_1" />
              周 的星期<input class="numberspinner" style="width: 60px;" data-options="min:1,max:7" id="weekEnd_1" value="1" />
            </div>
            <div class="line">
              <input type="radio" name="week" @click="lastWeek($event)" /> 本月最后一个星期<input class="numberspinner" style="width: 60px;" data-options="min:1,max:7" id="weekStart_2" value="1" />
            </div>
            <div class="line"><input type="radio" name="week" id="week_appoint" /> 指定</div>
            <div class="imp weekList">
              <input type="checkbox" value="1" />1 <input type="checkbox" value="2" />2
              <input type="checkbox" value="3" />3 <input type="checkbox" value="4" />4
              <input type="checkbox" value="5" />5 <input type="checkbox" value="6" />6
              <input type="checkbox" value="7" />7
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="年" name="year">
          <div title="年">
            <!-- <div class="line">
              <input type="radio" checked="checked" name="year" @click="unAppoint($event)" />
              不指定 允许的通配符[, - * /] 非必填
            </div> -->
            <div class="line">
              <input type="radio" name="year" @click="everyTime($event)" /> 每年
            </div>
            <div class="line">
              <input type="radio" name="year" @click="cycle($event)" />周期 从
              <input class="numberspinner" style="width: 90px;" data-options="min:2013,max:3000" id="yearStart_0" value="2013" />
              -
              <input class="numberspinner" style="width: 90px;" data-options="min:2014,max:3000" id="yearEnd_0" value="2014" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <fieldset class="fieldset">
        <legend style="margin-left:10px;"><span class="legend">表达式</span></legend>
        <table>
          <tbody>
            <tr>
              <td class="tdtitle">表达式字段：</td>
              <td>
                <input type="text" disabled name="v_second" class="col" value="*" readonly="readonly" />
                <span>秒</span>
              </td>
              <td>
                <input type="text" disabled name="v_min" class="col" value="*" readonly="readonly" />
                <span>分钟</span>
              </td>
              <td>
                <input type="text" disabled name="v_hour" class="col" value="*" readonly="readonly" />
                <span>小时</span>
              </td>
              <td>
                <input type="text" disabled name="v_day" class="col" value="*" readonly="readonly" />
                <span>日</span>
              </td>
              <td>
                <input type="text" disabled name="v_mouth" class="col" value="*" readonly="readonly" />
                <span>月</span>
              </td>
              <td>
                <input type="text" disabled name="v_week" class="col" value="?" readonly="readonly" />
                <span>周</span>
              </td>
              <td>
                <input type="text" disabled name="v_year" class="col" readonly="readonly" /><span>年</span>
              </td>
            </tr>
            <tr>
              <td class="tdtitle">Cron 表达式：</td>
              <td colspan="6" style="width:900px" class="colspanbtn">
                <input type="text" name="cron" style="width: 100%" value="* * * * * ?" id="cron" />
                <div class="sx-button-states" @click="onGetCron">反解析到UI</div>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <div class="runTitle">最近10次运行时间</div>
      <ul class="dataList mini-scroll">
        <template v-if="cronList.length>0">
          <li v-for="item of cronList" :key="item">{{item}}</li>
        </template>

        <li v-else>暂时没有获取到数据</li>
      </ul>
    </div>
</template>
<script>
import $ from 'jquery';
import { getCron } from '../../api/api';

export default {
  data() {
    return {
      activeName: 's',
      currentIndex: 0,
      dialogFormVisible: true,
      cronList: [],
      cronVal: '',
    };
  },
  // watch: {
  //   dialogFormVisible(val) {
  //     if (val) {
  //       this.activeName = 's';
  //       this.currentIndex = 0;
  //       this.$nextTick(() => {
  //         this.btnFan();
  //         this.initdata();
  //       });
  //     }
  //   },
  // },
  created() {
    this.activeName = 's';
    this.currentIndex = 0;
    this.$nextTick(() => {
      if (sessionStorage.getItem('cronVal')) {
        $('#cron').val(sessionStorage.getItem('cronVal'))
      }
      this.btnFan();
      this.initdata();
    });
  },
  methods: {
    async onGetCron() {
      this.cronList = []
      const txt = $('#cron').val();
      const { data } = await getCron({
        CronExpression: txt,
      });
      console.log(data)
      this.cronList = data.data.data;
      sessionStorage.setItem('nextExecuteDate', data.data.data[0])
    },
    ongetcron() {
      const txt = $('#cron').val();
      this.$emit('updata', txt);
    },
    initdata() {
      $(() => {
        // const vals = $("input[name^='v_']");
        const csvals = $("input[name^='v_']");
        const cron = $('#cron');
        csvals.change(() => {
          const item = [];
          // eslint-disable-next-line func-names
          csvals.each(function () {
            item.push(this.value);
          });
          // 当前选中项之前的如果为*，则都设置成0
          // eslint-disable-next-line no-plusplus
          for (let i = this.currentIndex; i >= 1; i--) {
            if (item[i] !== '*' && item[i - 1] === '*') {
              item[i - 1] = '0';
            }
          }
          // // 当前选中项之后的如果不为*则都设置成*
          if (item[this.currentIndex] === '*') {
            // eslint-disable-next-line no-plusplus
            for (let i = this.currentIndex + 1; i < item.length; i++) {
              if (i === 5) {
                item[i] = '?';
              } else {
                item[i] = '*';
              }
            }
          }
          cron.val(item.join(' ')).change();
        });
        cron.change(() => {
          this.btnFan();
          // const that = this;
          // $.ajax({
          //   type: 'get',
          //   url: 'https://api.qqe2.com/cron',
          //   dataType: 'json',
          //   data: {
          //     CronExpression: $('#cron').val(),
          //   },
          //   success(data) {
          //     console.log(data);
          //     if (data.status !== 1) {
          //       that.$message.warning(data.Message);
          //     }
          //   },
          // });
        });
        // console.log($('.numberspinner'));
        // $('.numberspinner').each(() => {
        //   $('.Btn').on('click', () => {});
        // });
        $('.numberspinner').on('blur', (e) => {
          $(e.currentTarget)
            .parent()
            .children()
            .eq(0)
            .click();
        });
        const secondList = $('.secondList').children();
        // eslint-disable-next-line func-names
        $('#sencond_appoint').click(function () {
          if (this.checked) {
            if ($(secondList).filter(':checked').length === 0) {
              $(secondList.eq(0)).attr('checked', true);
            }
            secondList.eq(0).change();
          }
        });

        secondList.change(() => {
          const sencondAppoint = $('#sencond_appoint').prop('checked');
          if (sencondAppoint) {
            const vals = [];
            // eslint-disable-next-line func-names
            secondList.each(function () {
              if (this.checked) {
                vals.push(this.value);
              }
            });
            let val = '?';
            if (vals.length > 0 && vals.length < 59) {
              val = vals.join(',');
            } else if (vals.length === 59) {
              val = '*';
            }
            const item = $('input[name=v_second]');
            item.val(val);
            item.change();
          }
        });

        const minList = $('.minList').children();
        // eslint-disable-next-line func-names
        $('#min_appoint').click(function () {
          if (this.checked) {
            if ($(minList).filter(':checked').length === 0) {
              $(minList.eq(0)).attr('checked', true);
            }
            minList.eq(0).change();
          }
        });

        minList.change(() => {
          const minAppoint = $('#min_appoint').prop('checked');
          if (minAppoint) {
            const vals = [];
            // eslint-disable-next-line func-names
            minList.each(function () {
              if (this.checked) {
                vals.push(this.value);
              }
            });
            let val = '?';
            if (vals.length > 0 && vals.length < 59) {
              val = vals.join(',');
            } else if (vals.length === 59) {
              val = '*';
            }
            const item = $('input[name=v_min]');
            item.val(val);
            item.change();
          }
        });

        const hourList = $('.hourList').children();
        // eslint-disable-next-line func-names
        $('#hour_appoint').click(function () {
          if (this.checked) {
            if ($(hourList).filter(':checked').length === 0) {
              $(hourList.eq(0)).attr('checked', true);
            }
            hourList.eq(0).change();
          }
        });

        hourList.change(() => {
          const hourAppoint = $('#hour_appoint').prop('checked');
          if (hourAppoint) {
            const vals = [];
            // eslint-disable-next-line func-names
            hourList.each(function () {
              if (this.checked) {
                vals.push(this.value);
              }
            });
            let val = '?';
            if (vals.length > 0 && vals.length < 24) {
              val = vals.join(',');
            } else if (vals.length === 24) {
              val = '*';
            }
            const item = $('input[name=v_hour]');
            item.val(val);
            item.change();
          }
        });

        const dayList = $('.dayList').children();
        // eslint-disable-next-line func-names
        $('#day_appoint').click(function () {
          if (this.checked) {
            if ($(dayList).filter(':checked').length === 0) {
              $(dayList.eq(0)).attr('checked', true);
            }
            dayList.eq(0).change();
          }
        });

        dayList.change(() => {
          const dayAppoint = $('#day_appoint').prop('checked');
          if (dayAppoint) {
            const vals = [];
            // eslint-disable-next-line func-names
            dayList.each(function () {
              if (this.checked) {
                vals.push(this.value);
              }
            });
            let val = '?';
            if (vals.length > 0 && vals.length < 31) {
              val = vals.join(',');
            } else if (vals.length === 31) {
              val = '*';
            }
            const item = $('input[name=v_day]');
            item.val(val);
            item.change();
          }
        });

        const mouthList = $('.mouthList').children();
        // eslint-disable-next-line func-names
        $('#mouth_appoint').click(function () {
          if (this.checked) {
            if ($(mouthList).filter(':checked').length === 0) {
              $(mouthList.eq(0)).attr('checked', true);
            }
            mouthList.eq(0).change();
          }
        });

        mouthList.change(() => {
          const mouthAppoint = $('#mouth_appoint').prop('checked');
          if (mouthAppoint) {
            const vals = [];
            // eslint-disable-next-line func-names
            mouthList.each(function () {
              if (this.checked) {
                vals.push(this.value);
              }
            });
            let val = '?';
            if (vals.length > 0 && vals.length < 12) {
              val = vals.join(',');
            } else if (vals.length === 12) {
              val = '*';
            }
            const item = $('input[name=v_mouth]');
            item.val(val);
            item.change();
          }
        });

        const weekList = $('.weekList').children();
        // eslint-disable-next-line func-names
        $('#week_appoint').click(function () {
          if (this.checked) {
            if ($(weekList).filter(':checked').length === 0) {
              $(weekList.eq(0)).attr('checked', true);
            }
            weekList.eq(0).change();
          }
        });

        weekList.change(() => {
          const weekAppoint = $('#week_appoint').prop('checked');
          if (weekAppoint) {
            const vals = [];
            // eslint-disable-next-line func-names
            weekList.each(function () {
              if (this.checked) {
                vals.push(this.value);
              }
            });
            let val = '?';
            if (vals.length > 0 && vals.length < 7) {
              val = vals.join(',');
            } else if (vals.length === 7) {
              val = '*';
            }
            const item = $('input[name=v_week]');
            item.val(val);
            item.change();
          }
        });
      });
    },
    btnFan() {
      // 获取参数中表达式的值
      // let txt = ''
      // const cronval = sessionStorage.getItem('cronVal')
      // console.log(cronval)
      // if (cronval) {
      //   txt = cronval;
      // } else {
      //   txt = $('#cron').val();
      // }
      const txt = $('#cron').val();
      this.cronVal = txt;
      sessionStorage.setItem('cronVal', txt)
      if (txt) {
        const regs = txt.split(' ');
        $('input[name=v_second]').val(regs[0]);
        $('input[name=v_min]').val(regs[1]);
        $('input[name=v_hour]').val(regs[2]);
        $('input[name=v_day]').val(regs[3]);
        $('input[name=v_mouth]').val(regs[4]);
        $('input[name=v_week]').val(regs[5]);
        console.log(regs[0]);
        this.initObj(regs[0], 'second');
        this.initObj(regs[1], 'min');
        this.initObj(regs[2], 'hour');
        this.initDay(regs[3]);
        this.initMonth(regs[4]);
        this.initWeek(regs[5]);

        if (regs.length > 6) {
          $('input[name=v_year]').val(regs[6]);
          this.initYear(regs[6]);
        }
      }
    },
    initObj(strVal, strid) {
      let ary = null;
      const objRadio = $(`input[name='${strid}'`);
      if (strVal === '*') {
        objRadio.eq(0).attr('checked', 'checked');
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(1).attr('checked', 'checked');

        $(`#${strid}Start_0`).val(ary[0])('setValue', ary[0]);
        $(`#${strid}End_0`).val(ary[1]);
      } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(2).attr('checked', 'checked');
        $(`#${strid}Start_1`).val(ary[0]);
        $(`#${strid}End_1`).val(ary[1]);
      } else {
        objRadio.eq(3).attr('checked', 'checked');
        if (strVal !== '?') {
          ary = strVal.split(',');
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < ary.length; i++) {
            $(`.${strid}List input[value='${ary[i]}']`).attr('checked', 'checked');
          }
        }
      }
    },
    initDay(strVal) {
      let ary = null;
      const objRadio = $("input[name='day'");
      if (strVal === '*') {
        objRadio.eq(0).attr('checked', 'checked');
      } else if (strVal === '?') {
        objRadio.eq(1).attr('checked', 'checked');
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr('checked', 'checked');
        $('#dayStart_0').val(ary[0]);
        $('#dayEnd_0').val(ary[1]);
      } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(3).attr('checked', 'checked');
        $('#dayStart_1').val(ary[0]);
        $('#dayEnd_1').val(ary[1]);
      } else if (strVal.split('W').length > 1) {
        ary = strVal.split('W');
        objRadio.eq(4).attr('checked', 'checked');
        $('#dayStart_2').val(ary[0]);
      } else if (strVal === 'L') {
        objRadio.eq(5).attr('checked', 'checked');
      } else {
        objRadio.eq(6).attr('checked', 'checked');
        ary = strVal.split(',');
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ary.length; i++) {
          $(`.dayList input[value='${ary[i]}']`).attr('checked', 'checked');
        }
      }
    },
    initMonth(strVal) {
      let ary = null;
      const objRadio = $("input[name='mouth'");
      if (strVal === '*') {
        objRadio.eq(0).attr('checked', 'checked');
      } else if (strVal === '?') {
        objRadio.eq(1).attr('checked', 'checked');
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr('checked', 'checked');
        $('#mouthStart_0').val(ary[0]);
        $('#mouthEnd_0').val(ary[1]);
      } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(3).attr('checked', 'checked');
        $('#mouthStart_1').val(ary[0]);
        $('#mouthEnd_1').val(ary[1]);
      } else {
        objRadio.eq(4).attr('checked', 'checked');

        ary = strVal.split(',');
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ary.length; i++) {
          $(`.mouthList input[value='${ary[i]}']`).attr('checked', 'checked');
        }
      }
    },
    initWeek(strVal) {
      let ary = null;
      const objRadio = $("input[name='week'");
      if (strVal === '*') {
        objRadio.eq(0).attr('checked', 'checked');
      } else if (strVal === '?') {
        objRadio.eq(1).attr('checked', 'checked');
      } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(2).attr('checked', 'checked');
        $('#weekStart_0').val(ary[0]);
        $('#weekEnd_0').val(ary[1]);
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(3).attr('checked', 'checked');
        $('#weekStart_1').val(ary[0]);
        $('#weekEnd_1').val(ary[1]);
      } else if (strVal.split('L').length > 1) {
        ary = strVal.split('L');
        objRadio.eq(4).attr('checked', 'checked');
        $('#weekStart_2').val(ary[0]);
      } else {
        objRadio.eq(5).attr('checked', 'checked');
        ary = strVal.split(',');
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ary.length; i++) {
          $(`.weekList input[value='${ary[i]}']`).attr('checked', 'checked');
        }
      }
    },
    initYear(strVal) {
      let ary = null;
      const objRadio = $("input[name='year'");
      if (strVal === '*') {
        objRadio.eq(1).attr('checked', 'checked');
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr('checked', 'checked');
        $('#yearStart_0').val(ary[0]);
        $('#yearEnd_0').val(ary[1]);
      }
    },
    tabchang(val) {
      console.log(val.index);
      this.currentIndex = val.index;
    },
    /**
     * 每周期
     */
    everyTime(dom) {
      const item = $(`input[name=v_${dom.target.name}]`);
      item.val('*');
      item.change();
    },

    /**
     * 不指定
     */
    unAppoint(dom) {
      const { name } = dom.target;
      let val = '?';
      if (name === 'year') {
        val = '';
      }
      const item = $(`input[name=v_${name}]`);
      item.val(val);
      item.change();
    },

    // appoint(dom) {

    // },

    /**
     * 周期
     */
    cycle(dom) {
      console.log(dom.target);
      const { name } = dom.target;
      console.log(
        $(dom.target)
          .parent()
          .find('.numberspinner')
          .eq(0),
      );
      const ns = $(dom.target)
        .parent()
        .find('.numberspinner');
      const start = ns.eq(0).val();
      const end = ns.eq(1).val();
      const item = $(`input[name=v_${name}]`);
      item.val(`${start}-${end}`);
      item.change();
    },

    /**
     * 从开始
     */
    startOn(dom) {
      const { name } = dom.target;
      const ns = $(dom.target)
        .parent()
        .find('.numberspinner');
      const start = ns.eq(0).val();
      const end = ns.eq(1).val();
      const item = $(`input[name=v_${name}]`);
      item.val(`${start}/${end}`);
      item.change();
    },

    lastDay(dom) {
      const item = $(`input[name=v_${dom.target.name}]`);
      item.val('L');
      item.change();
    },

    weekOfDay(dom) {
      const { name } = dom.target;
      const ns = $(dom.target)
        .parent()
        .find('.numberspinner');
      const start = ns.eq(0).val();
      const end = ns.eq(1).val();
      const item = $(`input[name=v_${name}]`);
      item.val(`${start}#${end}`);
      item.change();
    },

    lastWeek(dom) {
      const item = $(`input[name=v_${dom.target.name}]`);
      const ns = $(dom.target)
        .parent()
        .find('.numberspinner');
      const start = ns.eq(0).val();
      item.val(`${start}L`);
      item.change();
    },

    workDay(dom) {
      const { name } = dom.target;
      const ns = $(dom.target)
        .parent()
        .find('.numberspinner');
      const start = ns.eq(0).val();
      const item = $(`input[name=v_${name}]`);
      item.val(`${start}W`);
      item.change();
    },
  },
};
</script>
<style lang="css" scoped>
.cron {
  width: 1090px;
  max-height: 600px;
  opacity: 1;
  background: #ffffff;
  border: 1px solid #cacbcd;
  border-radius: 5px;
}
/* .col {
  width: 108px;
  margin-right: 5px;
} */
.line {
  margin: 10px 0;
}
.imp input {
  margin-left: 20px;
}
.hourList {
  padding-left: 20px;
}
/* .el-tabs__header {
  height: 40px;
  opacity: 1;
  background: #f0f1f1;
  border-radius: 4px;
  box-shadow: 0px -1px 0px 0px #cacbcd inset;
} */
</style>
<style lang="scss" scoped>
/deep/.el-tabs__header {
  .el-tabs__item {
    line-height: 40px;
  }
}
.el-tabs--border-card {
  box-shadow: none;
  border: none;
  border-radius: 5px;
}
.fieldset {
  border: 1px solid #cacbcd;
  border-left: none;
  border-right: none;
  padding: 10px 30px;
}
.legend {
  font-size: 12px;
  margin: 0 10px;
}
tr {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

td {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  width: 120px;
  background: #ffffff;
  margin-right: 10px;
  position: relative;
  // border-radius: 3px;
  // box-shadow: 0px 1px 1px 0px rgba(16, 22, 26, 0.2) inset,
  //   0px 0px 0px 1px rgba(16, 22, 26, 0.15) inset;
  input {
    height: 30px;
    width: 120px;
    padding-left: 10px;
    padding-right: 40px;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #cacbcd;
  }
  span {
    position: absolute;
    border-left: 1px solid rgba(118, 118, 118, 0.3);
    color: #5c7080;
    font-size: 12px;
    width: 40px;
    right: 0px;
    text-align: center;
  }
}
.tdtitle {
  font-size: 14px;
  width: 100px;
}
.colspanbtn {
  display: flex;
}
.sx-button-states {
  flex-shrink: 0;
}
.runTitle {
  height: 30px;
  line-height: 30px;
  padding-left: 30px;
  background: #f7f8f8;
  box-shadow: 0px -1px 0px 0px #cacbcd inset;
}
.dataList {
  height: 110px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 10px 20px;
  color: #5c7080;
  line-height: 20px;
  font-size: 14px;
}
input[type="text"]:focus {
  border: 1px solid #cacbcd;
  outline: none;
}
</style>

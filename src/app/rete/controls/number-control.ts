import { Control } from 'rete';
import Vue from 'vue/dist/vue.esm';

const VueNumControl = Vue.component('num', {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  // template: '<select name="device" :value="value"><option value="device1">device1</option><option value="device2">device2</option><option value="device3">device3</option><option value="device4">device4</option></select>',
  template: '<select name="device" :value="value"><option value="device1" selected>device1</option><option value="device2">device2</option><option value="device3">device3</option><option value="device4">device4</option></select>',

  data() {
    return {
      value: 0,
    };
  },
  methods: {
    change(e) {
      this.value = +e.target.value;
      this.update();
    },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
});

const VueAddControl = Vue.component('num', {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  template: '<select name="Add":value="value"><option value="Temperature">Temperature</option><option value="Current">Current</option><option value="Humidity">Humidity</option><option value="Voltage">Voltage</option></select>',
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    change(e) {
      this.value = +e.target.value;
      this.update();
    },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
});

const VueOptControl = Vue.component('num', {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  template: '<select name="AddOpt":value="value"><option value="=">=</option><option value="<"><</option><option value=">">></option><option value="<="><=</option><option value=">=">>=</option></select>',
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    change(e) {
      this.value = +e.target.value;
      this.update();
    },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
});

const VueValControl = Vue.component('num', {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  // template: '<select name="Add":value="value"><option value="Temperature">Temperature</option><option value="Current">Current</option><option value="Humidity">Humidity</option><option value="Voltage">Voltage</option></select>',
  template: '<input type="text" :readonly="readonly" :value="value" @input="change($event)"/>',
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    change(e) {
      this.value = +e.target.value;
      this.update();
    },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
});

// const VueVerifyControl = Vue.component('num', {
//   props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
//   template: '<button><>',
//   data() {
//     return {
//       value: 0,
//     };
//   },
//   methods: {
//     change(e) {
//       this.value = +e.target.value;
//       this.update();
//     },
//     update() {
//       if (this.ikey) {
//         this.putData(this.ikey, this.value);
//       }
//       this.emitter.trigger('process');
//     }
//   },
//   mounted() {
//     this.value = this.getData(this.ikey);
//   }
// });


const VueAlertControl = Vue.component('num', {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  // template: '<input type="text" :readonly="readonly" :value="value" @input="change($event)"/>',
  template: '<select name="Alert" :value="value"><option value="alert1">alert1</option><option value="alert2">alert2</option><option value="alert3">alert3</option><option value="alert4">alert4</option></select>',

  data() {
    return {
      value: 0,
    };
  },
  methods: {
    change(e) {
      this.value = +e.target.value;
      this.update();
    },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger('process');
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
});





// end  --------------
// devices
export class NumControl extends Control {
  component: any;
  props: any;
  vueContext: any;

  constructor(public emitter, public key, readonly = false) {
    super(key);

    this.component = VueNumControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}
// when then start
export class AddControl extends Control {
  component: any;
  props: any;
  vueContext: any;

  constructor(public emitter, public key, readonly = false) {
    super(key);

    this.component = VueAddControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}
export class OptControl extends Control {
  component: any;
  props: any;
  vueContext: any;

  constructor(public emitter, public key, readonly = false) {
    super(key);

    this.component = VueOptControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}
export class ValControl extends Control {
  component: any;
  props: any;
  vueContext: any;

  constructor(public emitter, public key, readonly = false) {
    super(key);

    this.component = VueValControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}
// export class VrifyControl extends Control {
//   component: any;
//   props: any;
//   vueContext: any;

//   constructor(public emitter, public key, readonly = false) {
//     super(key);

//     this.component = VueVerifyControl;
//     this.props = { emitter, ikey: key, readonly };
//   }

//   setValue(val) {
//     this.vueContext.value = val;
//   }
// }
// ----for when then
export class AlertControl extends Control {
  component: any;
  props: any;
  vueContext: any;

  constructor(public emitter, public key, readonly = false) {
    super(key);

    this.component = VueAlertControl;
    this.props = { emitter, ikey: key, readonly };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}


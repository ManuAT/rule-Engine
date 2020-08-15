import { Component, Output,Input } from 'rete';
import { numSocket } from '../sockets';
import { NumControl,AlertControl } from '../controls/number-control';

export class AlertComponent extends Component {

  constructor() {
    super('Alert');
  }

  async builder(node) {
    const inp1 = new Input('num', 'Alert', numSocket);

    node.addInput(inp1)
    .addControl(new AlertControl(this.editor, 'num'))
    // return node.addControl(new NumControl(this.editor, 'num')).addOutput(out1);
  }

  worker(node, inputs, outputs) {
    // outputs['num'] = node.data.num;
  }
}

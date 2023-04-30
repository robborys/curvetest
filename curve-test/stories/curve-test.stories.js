import { html } from 'lit';
import '../src/curve-test.js';

export default {
  title: 'CurveTest',
  component: 'curve-test',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <curve-test
      style="--curve-test-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </curve-test>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

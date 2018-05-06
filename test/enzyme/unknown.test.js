const React = require('react');
const chai = require('chai');
const expect = chai.expect;
const chaiEnzyme = require('chai-enzyme');
const { shallow } = require('enzyme');
const Unknown = require('../../src/components/unknown');
const ServerType = require('../../src/models/server-type');

chai.use(chaiEnzyme);

describe('<Unknown />', () => {
  describe('#render', () => {
    context('when the set has 1 node', () => {
      const servers = [{ address: '127.0.0.1:27017', type: ServerType.RS_PRIMARY }];
      const component = shallow(<Unknown servers={servers} />);

      it('renders the name', () => {
        const node = component.find('.topology-unknown-name');
        expect(node).to.have.text('Unknown');
      });

      it('renders the unknown icon', () => {
        const node = component.find('.mms-icon-unknown');
        expect(node).to.be.present();
      });

      it('renders the node count', () => {
        const node = component.find('.topology-unknown-nodes');
        expect(node).to.have.text('1 server');
      });

      it('renders the unknown text', () => {
        const node = component.find('.topology-unknown-type-name');
        expect(node).to.have.text('Unknown');
      });
    });

    context('when the set has more than 1 node', () => {
      const servers = [
        { address: '127.0.0.1:27017', type: ServerType.RS_PRIMARY },
        { address: '127.0.0.1:27018', type: ServerType.RS_SECONDARY }
      ];
      const component = shallow(<Unknown servers={servers} />);

      it('renders the name', () => {
        const node = component.find('.topology-unknown-name');
        expect(node).to.have.text('Unknown');
      });

      it('renders the unknown icon', () => {
        const node = component.find('.mms-icon-unknown');
        expect(node).to.be.present();
      });

      it('renders the node count', () => {
        const node = component.find('.topology-unknown-nodes');
        expect(node).to.have.text('2 servers');
      });

      it('renders the unknown text', () => {
        const node = component.find('.topology-unknown-type-name');
        expect(node).to.have.text('Unknown');
      });
    });
  });
});

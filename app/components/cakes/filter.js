import Component from '@glimmer/component';

export default class CakesFilterComponent extends Component {
    get results() {
        let { cakes, query } = this.args;
        if (query) {
            cakes = cakes.filter((cakes) => cakes.title.toLowerCase().includes(query.toLowerCase()));
        }
        return cakes;
    }
}
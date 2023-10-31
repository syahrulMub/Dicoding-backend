const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fighting = (Tiger, Wolf) => {
    if (Tiger.strange > Wolf.strange) {
        Tiger.Growl();
        return;
    }
    if (Wolf.strange > Tiger.strange) {
        Wolf.Uwu();
        return;
    }
}

console.log('tiger and wolf fighting !!!')

const wolf = new Wolf();
const tiger = new Tiger();

fighting(tiger, wolf);
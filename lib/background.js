module.exports = {
  modes: {
    'info': (definition, params) => new Buffer(`Initiated ${definition.name}...`),
    'empty': (definition, params) => new Buffer(0),
    'param': (definition, params) => {
      let specifiedBgParams = definition.bg.value
        .split(/\s+/)
        .filter(param => !!param);
      return !specifiedBgParams.length
        ? params
        : params[specifiedBgParams[0]] || '';
    },
    'params': (definition, params) => params
  },
  defaultMode: 'info',
  generateDefaultValue: function() {
    return {
      mode: this.defaultMode,
      value: ''
    };
  }
};

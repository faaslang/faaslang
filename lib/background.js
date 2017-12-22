module.exports = {
  modes: {
    'info': (definition, params) => new Buffer(`Initiated ${definition.name}...`),
    'empty': (definition, params) => new Buffer(0),
    'value': (definition, params) => {
      let specifiedBgParams = definition.bg.value
        .split(/\s+/)
        .filter(param => !!param);
      let returnedParam = specifiedBgParams.length && params[specifiedBgParams[0]];
      if (!returnedParam) {
        return JSON.stringify('');
      } else if (!isNaN(returnedParam)) {
        return returnedParam;
      } else {
        return returnedParam instanceof Buffer ? returnedParam : JSON.stringify(returnedParam);
      }
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

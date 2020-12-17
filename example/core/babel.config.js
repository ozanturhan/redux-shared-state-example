module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  },
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ]
  ],
  ignore: ['node_modules/**']
}

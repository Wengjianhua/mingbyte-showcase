module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'extend',
          'if',
          'else',
          'for',
          'each',
          'include',
          'function'
        ]
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          'menu_text',
          'menu_active_text',
          'sub_menu_active_text',
          'menu_bg',
          'menu_hover',
          'sub_menu_bg',
          'sub_menu_hover',
          'side_bar_width'
        ]
      }
    ]
  }
}

// css 规则顺序：https://github.com/twitter/recess/blob/29bccc870b7b4ccaa0a138e504caf608a6606b59/lib/lint/strict-property-order.js
// stylelint规则清单：https://cloud.tencent.com/developer/section/1489630

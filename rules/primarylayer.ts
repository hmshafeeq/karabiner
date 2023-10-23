import { KarabinerRules } from "../types";
import { createHyperSubLayers, app, open } from "../utils";
import {
  // rule and layers
  rule,
  layer,
  simlayer,
  hyperLayer,
  modifierLayer,
  duoLayer,
  // from / map()
  map,
  mapConsumerKey,
  mapPointingButton,
  mapSimultaneous,
  mapDoubleTap,
  // to
  toKey,
  toConsumerKey,
  toPointingButton,
  toHyper,
  to$,
  toApp,
  toPaste,
  // conditions
  ifApp,
  ifDevice,
  ifVar,
  // utils
  withCondition,
  withMapper,
  RuleBuilder,
} from 'karabiner.ts'

const ruleIterator = () => [

  // rule(), layer(), simlayer(), hyperLayer(), duoLayer()
  rule('Hyper Key (⌃⌥⇧⌘)').manipulators([
    // Docs: https://evan-liu.github.io/karabiner.ts/ 
    map('caps_lock').toHyper().toIfAlone('escape'),
  ]),

  rule('Super Hyper Key (⌘⌥⌃⇧fn)').manipulators([ 
    map('right_option').toSuperHyper().toIfAlone('right_option'),
  ]),

  rule('Meh Key (⌥⌃⇧)').manipulators([ 
    map('tab').toMeh().toIfAlone('tab')                                         
  ]),
]

const rulesArray = [        
  {
    "description": "Use Delete as Move to Trash",
    "manipulators": [
      {
        "type": "basic",
        "from": {
          "key_code": "delete_forward",
          "modifiers": {
            "optional": ["any"]
          }
        },
        "to": [
          {
            "key_code": "delete_or_backspace",
            "modifiers": ["left_command"]
          }
        ],
        "conditions": [
          {
            "type": "frontmost_application_if",
            "bundle_identifiers": [
              "^com\\.apple\\.finder$"
            ]
          }
        ]
      }
    ]
  }
];

export function primaryRules(): KarabinerRules[] {
  return [
    ...ruleIterator().map(r => r.build() as KarabinerRules),
    ...rulesArray.map(s => s as KarabinerRules)
  ]
}

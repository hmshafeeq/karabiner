import { KarabinerRules, SimpleRules } from "../types";
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
     
]

const rulesArray = [
  
];

export function simpleMods(): SimpleRules[] {
  return [
    ...ruleIterator().map(r => r.build()[0] as SimpleRules),
    ...rulesArray.map(s => s as SimpleRules)
  ]
}

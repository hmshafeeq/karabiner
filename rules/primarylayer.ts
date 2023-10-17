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
        map('⇪').toHyper().toIfAlone('⎋'),
    ]),
]

const rulesArray = [
    {
        description: "RightOptionFN: Right option enables RightOptionFN mode (see: https://geekhack.org/index.php?topic=51069.0 & https://spacelauncherapp.com)",
        manipulators: [
            {
                from: {
                    key_code: "right_option"
                },
                parameters: {
                    "basic.to_if_alone_timeout_milliseconds": 300,
                    "basic.to_if_held_down_threshold_milliseconds": 200
                },
                to_after_key_up: [
                    {
                        set_variable: {
                            name: "optionfn_mode",
                            value: 0
                        }
                    }
                ],
                to_if_alone: [
                    {
                        key_code: "right_option"
                    }
                ],
                to_if_held_down: [
                    {
                        set_variable: {
                            name: "optionfn_mode",
                            value: 1
                        }
                    }
                ],
                type: "basic"
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
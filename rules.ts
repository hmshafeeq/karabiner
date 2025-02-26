import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";
import { primaryRules } from "./rules/primarylayer";
import { hyperRules } from "./rules/hyperlayer";
import { simpleMods } from "./rules/simplemods";

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        ask_for_confirmation_before_quitting: true,
        check_for_updates_on_startup: true,
        show_in_menu_bar: true,
        show_profile_name_in_menu_bar: false,
        unsafe_ui: false
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            "parameters": {
              "basic.simultaneous_threshold_milliseconds": 50,
              "basic.to_delayed_action_delay_milliseconds": 150,
              "basic.to_if_alone_timeout_milliseconds": 300,
              "basic.to_if_held_down_threshold_milliseconds": 200,
              "mouse_motion_to_scroll.speed": 100
            },
            rules: [
              ...primaryRules(),
              ...hyperRules()
            ],
          },
          "simple_modifications": simpleMods(),
          "devices": [
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": true,
                "is_pointing_device": false,
                "product_id": 834,
                "vendor_id": 1452
              },
              "ignore": false,
              "manipulate_caps_lock_led": true,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            },
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": false,
                "is_pointing_device": true,
                "product_id": 834,
                "vendor_id": 1452
              },
              "ignore": true,
              "manipulate_caps_lock_led": false,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            },
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": true,
                "is_pointing_device": false,
                "product_id": 34304,
                "vendor_id": 1452
              },
              "ignore": false,
              "manipulate_caps_lock_led": true,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            },
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": true,
                "is_pointing_device": true,
                "product_id": 45915,
                "vendor_id": 1133
              },
              "ignore": false,
              "manipulate_caps_lock_led": true,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            },
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": false,
                "is_pointing_device": true,
                "product_id": 45108,
                "vendor_id": 1133
              },
              "ignore": true,
              "manipulate_caps_lock_led": false,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            }
          ],
          "fn_function_keys": [
            {
              "from": {
                "key_code": "f1"
              },
              "to": [
                {
                  "consumer_key_code": "display_brightness_decrement"
                }
              ]
            },
            {
              "from": {
                "key_code": "f2"
              },
              "to": [
                {
                  "consumer_key_code": "display_brightness_increment"
                }
              ]
            },
            {
              "from": {
                "key_code": "f3"
              },
              "to": [
                {
                  "apple_vendor_keyboard_key_code": "mission_control"
                }
              ]
            },
            {
              "from": {
                "key_code": "f4"
              },
              "to": [
                {
                  "apple_vendor_keyboard_key_code": "spotlight"
                }
              ]
            },
            {
              "from": {
                "key_code": "f5"
              },
              "to": [
                {
                  "consumer_key_code": "dictation"
                }
              ]
            },
            {
              "from": {
                "key_code": "f6"
              },
              "to": [
                {
                  "key_code": "f6"
                }
              ]
            },
            {
              "from": {
                "key_code": "f7"
              },
              "to": [
                {
                  "consumer_key_code": "rewind"
                }
              ]
            },
            {
              "from": {
                "key_code": "f8"
              },
              "to": [
                {
                  "consumer_key_code": "play_or_pause"
                }
              ]
            },
            {
              "from": {
                "key_code": "f9"
              },
              "to": [
                {
                  "consumer_key_code": "fast_forward"
                }
              ]
            },
            {
              "from": {
                "key_code": "f10"
              },
              "to": [
                {
                  "consumer_key_code": "mute"
                }
              ]
            },
            {
              "from": {
                "key_code": "f11"
              },
              "to": [
                {
                  "consumer_key_code": "volume_decrement"
                }
              ]
            },
            {
              "from": {
                "key_code": "f12"
              },
              "to": [
                {
                  "consumer_key_code": "volume_increment"
                }
              ]
            }
          ],
          "parameters": {
            "delay_milliseconds_before_open_device": 1000
          },
          "selected": true, 
          "virtual_hid_keyboard": {
            "country_code": 0,
            "indicate_sticky_modifier_keys_state": true,
            "mouse_key_xy_scale": 100
          }
        },
        {
          name: "Other",
          complex_modifications: {
            "parameters": {
              "basic.simultaneous_threshold_milliseconds": 50,
              "basic.to_delayed_action_delay_milliseconds": 150,
              "basic.to_if_alone_timeout_milliseconds": 300,
              "basic.to_if_held_down_threshold_milliseconds": 200,
              "mouse_motion_to_scroll.speed": 100
            },
            rules: [],
          },
          "simple_modifications": [],
          "devices": [
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": true,
                "is_pointing_device": false,
                "product_id": 834,
                "vendor_id": 1452
              },
              "ignore": false,
              "manipulate_caps_lock_led": true,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            },
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": false,
                "is_pointing_device": true,
                "product_id": 834,
                "vendor_id": 1452
              },
              "ignore": true,
              "manipulate_caps_lock_led": false,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            },
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": true,
                "is_pointing_device": false,
                "product_id": 34304,
                "vendor_id": 1452
              },
              "ignore": false,
              "manipulate_caps_lock_led": true,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            },
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": true,
                "is_pointing_device": true,
                "product_id": 45915,
                "vendor_id": 1133
              },
              "ignore": false,
              "manipulate_caps_lock_led": true,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            },
            {
              "disable_built_in_keyboard_if_exists": false,
              "fn_function_keys": [],
              "identifiers": {
                "is_keyboard": false,
                "is_pointing_device": true,
                "product_id": 45108,
                "vendor_id": 1133
              },
              "ignore": true,
              "manipulate_caps_lock_led": false,
              "simple_modifications": [],
              "treat_as_built_in_keyboard": false
            }
          ],
          "fn_function_keys": [
            {
              "from": {
                "key_code": "f1"
              },
              "to": [
                {
                  "consumer_key_code": "display_brightness_decrement"
                }
              ]
            },
            {
              "from": {
                "key_code": "f2"
              },
              "to": [
                {
                  "consumer_key_code": "display_brightness_increment"
                }
              ]
            },
            {
              "from": {
                "key_code": "f3"
              },
              "to": [
                {
                  "apple_vendor_keyboard_key_code": "mission_control"
                }
              ]
            },
            {
              "from": {
                "key_code": "f4"
              },
              "to": [
                {
                  "apple_vendor_keyboard_key_code": "spotlight"
                }
              ]
            },
            {
              "from": {
                "key_code": "f5"
              },
              "to": [
                {
                  "consumer_key_code": "dictation"
                }
              ]
            },
            {
              "from": {
                "key_code": "f6"
              },
              "to": [
                {
                  "key_code": "f6"
                }
              ]
            },
            {
              "from": {
                "key_code": "f7"
              },
              "to": [
                {
                  "consumer_key_code": "rewind"
                }
              ]
            },
            {
              "from": {
                "key_code": "f8"
              },
              "to": [
                {
                  "consumer_key_code": "play_or_pause"
                }
              ]
            },
            {
              "from": {
                "key_code": "f9"
              },
              "to": [
                {
                  "consumer_key_code": "fast_forward"
                }
              ]
            },
            {
              "from": {
                "key_code": "f10"
              },
              "to": [
                {
                  "consumer_key_code": "mute"
                }
              ]
            },
            {
              "from": {
                "key_code": "f11"
              },
              "to": [
                {
                  "consumer_key_code": "volume_decrement"
                }
              ]
            },
            {
              "from": {
                "key_code": "f12"
              },
              "to": [
                {
                  "consumer_key_code": "volume_increment"
                }
              ]
            }
          ],
          "parameters": {
            "delay_milliseconds_before_open_device": 1000
          },
          "selected": true, 
          "virtual_hid_keyboard": {
            "country_code": 0,
            "indicate_sticky_modifier_keys_state": true,
            "mouse_key_xy_scale": 100
          }
        },
      ],
    },
    null,
    2
  )
); 

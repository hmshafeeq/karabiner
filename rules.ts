import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)1",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      //      {
      //        type: "basic",
      //        description: "Disable CMD + Tab to force Hyper Key usage",
      //        from: {
      //          key_code: "tab",
      //          modifiers: {
      //            mandatory: ["left_command"],
      //          },
      //        },
      //        to: [
      //          {
      //            key_code: "tab",
      //          },
      //        ],
      //      },
    ],
  },
  ...createHyperSubLayers({
    // o = "Open" applications
    o: {
      g: app("Google Chrome"),
      c: app("Cron"),
      v: app("Visual Studio Code"),
      d: app("Discord"),
      s: app("Slack"),
      e: app("Superhuman"),
      n: app("Notion"),
      t: app("Terminal"),
      // Open todo list managed via *H*ypersonic
      h: open(
        "notion://www.notion.so/stellatehq/7b33b924746647499d906c55f89d5026"
      ),
      z: app("zoom.us"),
      m: app("Mochi"),
      f: app("Figma"),
      r: app("Telegram"),
      // "i"Message
      i: app("Messages"),
      p: app("Spotify"),
      a: app("iA Presenter"),
      w: open("https://web.whatsapp.com"),
      l: open(
        "raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"
      ),
    },

    // w = "Window" via rectangle.app
    w: {
      semicolon: {
        description: "Window: Hide",
        to: [
          {
            key_code: "h",
            modifiers: ["right_command"],
          },
        ],
      },
      y: {
        description: "Window: First Third",
        to: [
          {
            key_code: "left_arrow",
            modifiers: ["right_option", "right_control"],
          },
        ],
      },
      k: {
        description: "Window: Top Half",
        to: [
          {
            key_code: "up_arrow",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      j: {
        description: "Window: Bottom Half",
        to: [
          {
            key_code: "down_arrow",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      o: {
        description: "Window: Last Third",
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["right_option", "right_control"],
          },
        ],
      },
      h: {
        description: "Window: Left Half",
        to: [
          {
            key_code: "left_arrow",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      l: {
        description: "Window: Right Half",
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      f: {
        description: "Window: Full Screen",
        to: [
          {
            key_code: "f",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      u: {
        description: "Window: Previous Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control", "right_shift"],
          },
        ],
      },
      i: {
        description: "Window: Next Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control"],
          },
        ],
      },
      n: {
        description: "Window: Next Window",
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["right_command"],
          },
        ],
      },
      b: {
        description: "Window: Back",
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      // Note: No literal connection. Both f and n are already taken.
      m: {
        description: "Window: Forward",
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      d: {
        description: "Window: Next display",
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["right_control", "right_option", "right_command"],
          },
        ],
      },
    },

    // s = "System"
    s: {
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      e: {
        to: [
          {
            // Emoji picker
            key_code: "spacebar",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      // Turn on Elgato KeyLight
      y: {
        to: [
          {
            shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
          },
        ],
      },
      h: {
        to: [
          {
            shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
          },
        ],
      },
    },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      // Magicmove via homerow.app
      m: {
        to: [{ key_code: "f", modifiers: ["right_control"] }],
      },
      // Scroll mode via homerow.app
      s: {
        to: [{ key_code: "j", modifiers: ["right_control"] }],
      },
      d: {
        to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      },
      u: {
        to: [{ key_code: "page_down" }],
      },
      i: {
        to: [{ key_code: "page_up" }],
      },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    c: {
      p: {
        to: [{ key_code: "play_or_pause" }],
      },
      n: {
        to: [{ key_code: "fastforward" }],
      },
      b: {
        to: [{ key_code: "rewind" }],
      },
    },

    // r = "Raycast"
    r: {
      l: open(
        "raycast://extensions/stellate/mxstbr-commands/create-mxs-is-shortlink"
      ),
      e: open("raycast://extensions/raycast/emoji/search-emoji"),
      c: open("raycast://extensions/raycast/raycast/confetti"),
      a: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
      s: open("raycast://extensions/peduarte/silent-mention/index"),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
      1: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      ),
      2: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      ),
    },
  }),
];

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
            rules,
          },
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
          "simple_modifications": [],
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

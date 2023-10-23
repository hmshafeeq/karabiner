import { KarabinerRules } from "../types";
import { createHyperSubLayers, app, open } from "../utils";

export function hyperRules(): KarabinerRules[] { 
    return [
        ...createHyperSubLayers({
            // o = "Open" applications
            o: {
                g: app("Arc"),
                c: app("Cron"),
                v: app("Visual Studio Code"),
                d: app("DBngin"),
                s: app("Slack"),
                e: app("Superhuman"),
                n: app("Notion"),
                u: app("Terminal"),
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
                p: app("PhpStorm"),
                a: app("iA Presenter"),
                w: open("https://web.whatsapp.com"),        
                l: open(
                    "raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"
                ),
            },
    
            // w = "Window" via rectangle.app
            w: {
                p: open("raycast://extensions/raycast/window-management/left-half"),
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
            //d: {
                j: {
                    to: [{ key_code: "left_arrow" }],
                },
                k: {
                    to: [{ key_code: "down_arrow" }],
                },
                i: {
                    to: [{ key_code: "up_arrow" }],
                },
                l: {
                    to: [{ key_code: "right_arrow" }],
                }, 
           // },
      
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
        })
    ]
}
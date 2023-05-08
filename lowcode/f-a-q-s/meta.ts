
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialFaqList, initialFAQTitle} from "../../src/components/FAQs";

const FAQSMeta: ComponentMetadata = {
  "componentName": "FAQS",
  "title": "FAQS",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.1.0",
    "exportName": "FAQS",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          // todo 目前这个初始值，需要手动填写，看下有没有更好的方法？
          "initialValue": initialFAQTitle
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "FaqList",
            "zh-CN": "FaqList"
          }
        },
        "name": "FaqList",
        "setter": {
          // todo FAQInputSetter 目前这个初始值，需要手动填写，看下有没有更好的方法？
          "componentName": "FAQInputSetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "title",
                          "zh-CN": "title"
                        }
                      },
                      "name": "title",
                      "setter": {
                        "componentName": "StringSetter",
                        "isRequired": true,
                        "initialValue": ""
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "contentList",
                          "zh-CN": "contentList"
                        }
                      },
                      "name": "contentList",
                      "setter": {
                        "componentName": "ArraySetter",
                        "props": {
                          "itemSetter": {
                            "componentName": "StringSetter",
                            "isRequired": false,
                            "initialValue": ""
                          }
                        },
                        "isRequired": true,
                        "initialValue": []
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "isShow",
                          "zh-CN": "isShow"
                        }
                      },
                      "name": "isShow",
                      "setter": {
                        "componentName": "BoolSetter",
                        "isRequired": true,
                        "initialValue": false
                      }
                    }
                  ],
                  "extraSetter": {
                    "componentName": "MixedSetter",
                    "isRequired": false,
                    "props": {}
                  }
                }
              }
            }
          },
          "isRequired": true,
          // todo initialValue 目前这个初始值，需要手动填写，看下有没有更好的方法？
          "initialValue": initialFaqList
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isDark",
            "zh-CN": "isDark"
          }
        },
        "name": "isDark",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "id",
            "zh-CN": "id"
          }
        },
        "name": "id",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "FAQS",
    "screenshot": "",
    "schema": {
      "componentName": "FAQS",
      "props": {}
    }
  }
];

export default {
  ...FAQSMeta,
  snippets
};

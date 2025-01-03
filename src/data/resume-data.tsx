import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "胡成晔",
  location: "杭州融惠数据科技有限公司全栈研发",
  locationLink:"https://www.zhipin.com/gongsi/78e60e736885b2163nB429W5FA~~.html",
  about:
    "懂点 Java ，喜欢写页面的程序员。",
  summary:
    "我叫胡成晔，一个喜欢开源的程序员。 我真的很喜欢将我脑海中的想法变成现实，变成每个人都可以看到的实体。我也是一名开源爱好者和维护者。 <br/>我喜欢开源实现协作和知识共享的方式，我很高兴看到我的工作最终能回馈社区和行业。<br/>除了编程，我还喜欢玩游戏和阅读我完全不知道的领域中的书籍。",
  personalWebsiteUrl: "https://elonehoo.me",
  contact: {
    email: "hi@elonehoo.me",
    tel: "+17605818915",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/elonehoo",
        icon: GitHubIcon,
      },
      
      {
        name: "X",
        url: "https://x.com/elonehoo",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "杭州科技职业技术学院",
      degree: "计算机应用，大专学历",
      start: "2019 年 9 月",
      end: "2022 年 6 月",
    },
  ],
  work: [
    {
      company: "杭州融惠数据科技有限公司",
      link: "https://www.zhipin.com/gongsi/78e60e736885b2163nB429W5FA~~.html",
      badges: ["全职"],
      title: "全栈研发",
      logo: ParabolLogo,
      start: "2021",
      end: "至今",
      description:[
        {
          name: '衢州司法( Vue2.7 + Java )',
          time:'2022年8月-2022年11月',
          content: '在 衢州司法项目 中，根据客户的需求负责了视频庭审的模块，对接 腾讯云所提供的 API 完成了视频通话和语音翻译功能，可以实时存储当前视频数据，方便了客户在视频庭审时的便捷。' + 
          '<br /> ' + 
          '基于 腾讯云 的视频模块的基础上，设计并开发出了视频模块，同时未雨绸缪的增加了插件系统，在后续的视频业务模块的变化中，加快了开发的速度，提高了交付规格。' + 
          '<br />' + 
          '在业务完成后增加了文档说明，给该模块的交接工作增加了便利。'
        },
        {
          name: '模板产品( Vue + Java )',
          time:'2022年11月-2023年1月',
          content: '并且为公司建立了初步的敏捷开发的基础，设计和开发了前端PC模板，在 桐心办 政府项目中运用该模块，在最短的时间内开发出了令客户十分满意的产品。' + 
          '<br />' +
          '根据小程序的一些特性，设计了一套另类的手机模板系统，可以直接在电脑端浏览手机页面，同时兼容更多不同尺寸的设备，减少了对于不同尺寸设备的调试工作，成为公司开发小程序的最佳实践。'
        },
        {
          name: '桐心办( Vue3.0 + Java )',
          time:'2023年1月-2023年10月',
          content: '持续维护着桐庐的桐心办政府项目，负责了自动整理动态数据的整理和用户自定义动态数据的功能，创建了该模块的数据库创建和最终底层 API 的封装，并在后续封装成为独立的插件模块，提供给了相同业务的不同产品。' + 
          '<br />' +
          '面对错综复杂的大量且不规律的数据，设计了一套动态表格系统，可以根据用户的需求随意的修改表格类型、导出的 excel 类型，基于 原子化 CSS 强大功能下，还可以任意用户修改显示的表格样式。'
        },
        {
          name: '桐庐司法( Vue2.7 + Java )',
          time:'2023年11月-2024年1月',
          content: '在大量的大屏数据页面中，为了方便用户对于数据的管理和修改，设计了一套全新的修改方式，在修改模式下，点击大屏元素可以直接修改对应数据。'
        },
        {
          name: '公司下一代模板产品( Vue + Java )',
          time:'2024年2月-2024年4月',
          content: '通过 monorepo 架构将前端进行分模块，让更多模块项目可以享有通用的模块。同时增加了语义化版本更新脚本，同时针对 Serviceless 设计了颠覆的产物模式。' + 
          '<br />' +
          '同时基于后端的接口逻辑，开发了一套组件库，同时编写了完善的文档，同时针对了不同的系统，对于大部分 bug 都编写了 Q&A ，让开发者可以最快的解决问题。根据业务设计了很多布局页面模板。'
        },
        {
          name: '小信助手( Electron + Vue + Java )',
          time:'2024年4月-至今',
          content: '快速开发了桌面应用, 支持完善的 linux 操作系统。可以快速的调用 electron 的下载功能。和快速的调用其他 app 的能力。'
        },
      ]
        
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "Markdown",
    "JavaScript",
    "TypeScript",
    "Java",
    "Go",
    "Python",
    "Swift",
    "Kotlin",
    "Dart",
    "Rust",
    "Vue.js/Nuxt",
    "React/Next",
    "Spring/JavaFX",
    "Flutter",
    "Spring",
    "Hono",
    "Electron",
    "MongoDB",
    "Nginx",
    "MySQL",
    "Serverless",
    "Docker",
    "Android",
    "PWA",
    "AWS",
    "AliCloud",
    "TencentCloud"
  ],
  projects: [
    {
      title: "Destyler",
      techStack: [
        "TypeScript",
        "Vue",
        "React",
        "Preact",
        "Svelte",
        "Solid",
        "Lit",
        "Unstyler"
      ],
      description: "无样式的 Vue 组件库，适用于建造只属于自己的高质量的网络应用程序和设计系统。",
      logo: ConsultlyLogo,
      link: {
        label: "docs",
        href: "http://destyler.org/",
      },
    },
    {
      title: "Vitest",
      techStack: [
        "TypeScript",
        "Vite",
        "Vue",
        "React",
        "Preact",
        "Svelte",
        "Solid",
        "Lit",
      ],
      description: "一个原生支持 Vite 的测试框架。非常快速！",
      logo: ConsultlyLogo,
      link: {
        label: "docs",
        href: "https://cn.vitest.dev/",
      },
    },
    {
      title: "vite-plugin-alias",
      techStack: [
        "TypeScript",
        "Vite",
        "Vue",
        "React",
        "Preact",
        "Svelte",
        "Solid",
        "Lit",
      ],
      description: "Vite 的别名自动生成。",
      logo: ConsultlyLogo,
      link: {
        label: "npm",
        href: "https://www.npmjs.com/package/vite-plugin-alias",
      },
    },
    {
      title: "vite-inspector",
      techStack: [
        "TypeScript",
        "Vite",
        "Vue",
        "React",
        "Preact",
        "Svelte",
        "Solid",
        "Lit",
      ],
      description: "Vite跳转IDE插件",
      logo: ConsultlyLogo,
      link: {
        label: "npm",
        href: "https://www.npmjs.com/package/vite-inspector",
      },
    },
    {
      title: "animated-unocss",
      techStack: [
        "TypeScript",
        "Vite",
        "Vue",
        "React",
        "Preact",
        "Svelte",
        "Solid",
        "Lit",
      ],
      description: "将 Animate.css 与 UnoCSS 一起使用的配置。",
      logo: ConsultlyLogo,
      link: {
        label: "docs",
        href: "https://animated-unocss.elonehoo.me/",
      },
    },
    {
      title: "haul",
      techStack: [
        "TypeScript",
        "Vite",
        "Vue",
        "React",
        "Preact",
        "Svelte",
        "Solid",
        "Lit",
      ],
      description: "便捷且现代的请求发送器，支持多种请求方式且体积非常小。",
      logo: ConsultlyLogo,
      link: {
        label: "docs",
        href: "https://haul.elonehoo.me/",
      },
    },
    {
      title: "vue-hooks-form",
      techStack: [
        "TypeScript",
        "Vite",
        "Vue",
      ],
      description: "用于验证表单的 Vue Composition API。",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/vue-hooks-form/vue-hooks-form",
      },
    },
    {
      title: "Demos",
      techStack: [
        "一些小动画"
      ],
      description: "请访问这个链接 https://elonehoo.me/demos",
      logo: ConsultlyLogo,
      link: {
        label: "more",
        href: "https://elonehoo.me/demos",
      },
    },
    {
      title: "More Projects",
      techStack: [
        "项目集合"
      ],
      description: "更多项目请访问这个链接 https://elonehoo.me/projects",
      logo: ConsultlyLogo,
      link: {
        label: "more",
        href: "https://elonehoo.me/projects",
      },
    },
  ],
} as const;

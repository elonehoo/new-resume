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
    "懂点java，喜欢写页面的程序员。",
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
      end: "2024",
      description:[
        {
          name: '衢州司法(Vue2.7+Java)',
          time:'2022年8月-2022年11月',
          content: '在 衢州司法项目 中，根据客户的需求负责了视频庭审的模块，对接 腾讯云所提供的 API 完成了视频通话和语音翻译功能，可以实时存储当前视频数据，方便了客户在视频庭审时的便捷。'
        },
        {
          name: '模板产品(Vue+Java)',
          time:'2022年11月-2023年1月',
          content: '并且为公司建立了初步的敏捷开发的基础，设计和开发了前端PC模板，在 桐心办 政府项目中运用该模块，在最短的时间内开发出了令客户十分满意的产品。'
        },
        {
          name: '桐心办(Vue3.0+Java)',
          time:'2023年1月-2023年10月',
          content: '持续维护着桐庐的桐心办政府项目，负责了自动整理动态数据的整理和用户自定义动态数据的功能，创建了该模块的数据库创建和最终底层 API 的封装，并在后续封装成为独立的插件模块，提供给了相同业务的不同产品。'
        },
        {
          name: '桐庐司法(Vue2.7+Java)',
          time:'2023年0月-2024年1月',
          content: '在 桐心办 项目结束后，归纳反省，对于手机端的模板进行了重构和重新设计，在 桐庐司法局项目 中使用，将开发时间缩短，且大大增强了扩展性。'
        }
      ]
        
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue/Nuxt",
    "Java/Spring",
    "Go",
    "C#",
    "Node.js",
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
      title: "vue-hooks-form",
      techStack: [
        "TypeScript",
        "Vite",
        "Vue",
      ],
      description: "用于验证表单的 Vue Composition API。",
      logo: ConsultlyLogo,
      link: {
        label: "docs",
        href: "https://form.elonehoo.me/",
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
  ],
} as const;

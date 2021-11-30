import { MenuEntry,} from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'MoondoD',
    icon: 'TicketIcon',
    href: "/Ifo",
    items: [
      {
        label: 'tokenomics',
        href: 'https://drive.google.com/file/d/1oqUHc5SppGUTyE48UGbAT3SZLg5ItZMG/view?usp=sharing',
      },
   ]
  },
  {
    label: 'Mondo',
    icon: 'TicketIcon',
    href: "/Ifo",
    items: [
      {
        label: 'tokenomics',
        href: '',
      },
   ]
  },

 {
    label: 'LaunchZone',
    icon: 'IfoIcon',
    href: "/Ifo",
      },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en',
      },
      
       {
        label: 'Docs',
        href: 'https://moondo-finance.gitbook.io/mondo-finance-docs-v1.0/',
      },      
      
      
     
     
/*      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
*/      
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Buy Mondo',
        href: 'https://pancakeswap.finance',
      },
      {
        label: 'Buy MoondoD',
        href: 'https://pancakeswap.finance/swap?outputCurrency=0x2B46026B785c44996b76d1acc1BFDA0ebA429412',
      },
      
    ],
  },
  {
    label: 'Contracts',
    icon: 'MoreIcon',
    items: [
      {
        label: 'MondoMasterchef',
        href: 'https://bscscan.com/address/0x1f2952769ED1ce42fFe57274fF44D155D74C8e1e',
      },
      {
        label: 'Mondo',
        href: 'https://bscscan.com/token/0x75252c28C49981036d42d12BF6B3934B980820E3',
      },
      {
        label: 'MoondoD',
        href: 'https://bscscan.com/token/0x2B46026B785c44996b76d1acc1BFDA0ebA429412',
      },
      
    ],




  },
   {
    label: 'Audit By Paladin(in process)',
    icon: 'AuditIcon',
    href: 'https://paladinsec.co/',
  },
  {
    label: 'MoondoDAO(soon fork ohm)',
    icon: 'BarnIcon',
    href: '',
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/Mondofinance',
  },


  ]
  const socials = [
    {
      label: "Telegram",
      icon: "TelegramIcon",
      items: [
        {
          label: "English",
          href: "",
        },
        {
          label: "Português",
          href: "",
        },      
        // {
        //   label: "Bahasa Indonesia",
        //   href: "https://t.me/PancakeSwapIndonesia",
        // },
        // {
        //   label: "中文",
        //   href: "https://t.me/PancakeSwap_CN",
        // },
        // {
        //   label: "Tiếng Việt",
        //   href: "https://t.me/PancakeSwapVN",
        // },
        // {
        //   label: "Italiano",
        //   href: "https://t.me/pancakeswap_ita",
        // },
        // {
        //   label: "русский",
        //   href: "https://t.me/pancakeswap_ru",
        // },
        // {
        //   label: "Türkiye",
        //   href: "https://t.me/pancakeswapturkiye",
        // },
        // {
        //   label: "Português",
        //   href: "https://t.me/PancakeSwapPortuguese",
        // },
        // {
        //   label: "Español",
        //   href: "https://t.me/PancakeswapEs",
        // },
        // {
        //   label: "日本語",
        //   href: "https://t.me/pancakeswapjp",
        // },
        // {
        //   label: "Français",
        //   href: "https://t.me/pancakeswapfr",
        // },
        // {
        //  label: "Announcements",
        //  href: "",
       // },
        // {
        //   label: "Whale Alert",
        //   href: "https://t.me/PancakeSwapWhales",
        // },
      ],
    },
    {
      label: "Twitter",
      icon: "TwitterIcon",
      href: "https://twitter.com/",
    },
  ];
  
  export const MENU_HEIGHT = 64;
  export const MENU_ENTRY_HEIGHT = 48;
  export const SIDEBAR_WIDTH_FULL = 240;
  export const SIDEBAR_WIDTH_REDUCED = 56;
  export default config 
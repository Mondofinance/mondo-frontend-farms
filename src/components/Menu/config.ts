import { MenuEntry,} from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'Public Sale',
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
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: '',
      },
      {
        label: 'Docs',
        href: '',
      },      
      {
        label: 'Github',
        href: '',
      },
      
/*      
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
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
        href: '',
      },
      {
        label: 'Buy MondoD',
        href: '',
      },
      
    ],
  },
   {
    label: 'Audit By Certik(soon)',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects',
  },  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/mondo_finance",
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
      href: "https://twitter.com/mondo_finance",
    },
  ];
  
  export const MENU_HEIGHT = 64;
  export const MENU_ENTRY_HEIGHT = 48;
  export const SIDEBAR_WIDTH_FULL = 240;
  export const SIDEBAR_WIDTH_REDUCED = 56;
  export default config 

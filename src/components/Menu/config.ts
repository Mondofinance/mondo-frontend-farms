import { MenuEntry } from '@pancakeswap-libs/uikit'

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
    label: 'Audit By Certik',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects',
  },  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com",
  },
]
export default config

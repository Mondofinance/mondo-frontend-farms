import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  {
    pid: 2,
    risk: 2,
    lpSymbol: 'MONDO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe4798560cc5b76d94e5da14739d04a07bbfe6bbf',
    },
    tokenSymbol: 'PEPR',
    tokenAddresses: {
      97: '',
      56: '0x22592d3206be2c28298b8168234aedef4d50f319',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 

]

export default farms

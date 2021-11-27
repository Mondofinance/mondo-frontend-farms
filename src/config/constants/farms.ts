import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'MoondoD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7a8b7Aae36EDdfF29C85d3D96932DA6B9Baa7de1',
    },
    tokenSymbol: 'ZEFI',
    tokenAddresses: {
      97: '',
      56: '0x2B46026B785c44996b76d1acc1BFDA0ebA429412',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
 
  {
    pid: 1,
    risk: 1,
    lpSymbol: 'Mondo-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x91923f801A9FcC8F11Ae7c4F792CF68cb3151B99',
    },
    tokenSymbol: 'PEPR',
    tokenAddresses: {
      97: '',
      56: '0xF22a5e9a9E9685a7Cb5BB89fd4F1905A11bb2fE4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
 
  {
    pid: 0,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    tokenSymbol: 'bnb',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 2,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },   
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },       
  {
    pid: 7,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },     
  {
    pid: 8,
    risk: 2,
    lpSymbol: 'BTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },     



 // POOLS
 
 
 {
  pid: 9,
  risk: 3,
  isTokenOnly: true,    
  lpSymbol: 'Mondo',
  lpAddresses: {
    97: '',
    56: '0x91923f801A9FcC8F11Ae7c4F792CF68cb3151B99', // Mondo-BUSD LP
  },
  tokenSymbol: 'ZEFI',
  tokenAddresses: {
    97: '',
    56: '0xF22a5e9a9E9685a7Cb5BB89fd4F1905A11bb2fE4',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 10,
  risk: 3,
  isTokenOnly: true,    
  lpSymbol: 'MoondoD',
  lpAddresses: {
    97: '',
    56: '0x7a8b7Aae36EDdfF29C85d3D96932DA6B9Baa7de1', // ZEFI-BUSD LP
  },
  tokenSymbol: 'EGG',
  tokenAddresses: {
    97: '',
    56: '0x2B46026B785c44996b76d1acc1BFDA0ebA429412',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 11,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'XWG',
  lpAddresses: {
    97: '',
    56: '0xb945abF2088591Eae759777aB36c220320363026', // XWG-BUSD LP
  },
  tokenSymbol: 'AUTO',
  tokenAddresses: {
    97: '',
    56: '0x6b23c89196deb721e6fd9726e6c76e4810a464bc',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

 {
  pid: 12,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'ETERNAL',
  lpAddresses: {
    97: '',
    56: '0xc49D3d97F1538Ad5c6BC271b932552c7e8352D37', // ETERNAL-BUSD LP
  },
  tokenSymbol: 'dot-bnb',
  tokenAddresses: {
    97: '',
    56: '0xd44fd09d74cd13838f137b590497595d6b3feea4',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},





]

export default farms
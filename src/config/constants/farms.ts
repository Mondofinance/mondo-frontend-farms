import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 15,
    risk: 1,
    lpSymbol: 'MoondoD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7a8b7Aae36EDdfF29C85d3D96932DA6B9Baa7de1',
    },
    tokenSymbol: 'zefi',
    tokenAddresses: {
      97: '',
      56: '0xdcd2c8cae9d502a7bdda98b0b34f7060bb5cf522',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 16,
    risk: 1,
    lpSymbol: 'MoondoD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe2371E641d7839f5c4E8e1054d21f47DDb165BD3',
    },
    tokenSymbol: 'zefi',
    tokenAddresses: {
      97: '',
      56: '0xdcd2c8cae9d502a7bdda98b0b34f7060bb5cf522',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },   
  {
    pid: 1,
    risk: 1,
    lpSymbol: 'Mondo-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xd5ebe6350e7f7f34b7ef21599431011d48b32fb7',
    },
    tokenSymbol: 'PEPR',
    tokenAddresses: {
      97: '',
      56: '0xe75c860aaa0b263b21082ba38e5ba91742322f92',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 0,
    risk: 1,
    lpSymbol: 'Mondo-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5ef93d72202665df6e934833a64fea75648ce765',
    },
    tokenSymbol: 'PEPR',
    tokenAddresses: {
      97: '',
      56: '0xe75c860aaa0b263b21082ba38e5ba91742322f92',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
 
  {
    pid: 2,
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
    56: '0xd5ebe6350e7f7f34b7ef21599431011d48b32fb7', // Mondo-BUSD LP
  },
  tokenSymbol: 'ZEFI',
  tokenAddresses: {
    97: '',
    56: '0xe75c860aaa0b263b21082ba38e5ba91742322f92',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 17,
  risk: 3,
  isTokenOnly: true,    
  lpSymbol: 'MoondoD',
  lpAddresses: {
    97: '',
    56: '0xe4798560cc5b76d94e5da14739d04a07bbfe6bbf', // ZEFI-BUSD LP
  },
  tokenSymbol: 'EGG',
  tokenAddresses: {
    97: '',
    56: '0xDCd2C8CAE9D502A7BddA98b0B34f7060BB5CF522',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 10,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'WBNB',
  lpAddresses: {
    97: '',
    56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', // bnb-BUSD LP
  },
  tokenSymbol: 'BNB',
  tokenAddresses: {
    97: '',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 11,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'CAKE',
  lpAddresses: {
    97: '',
    56: '0x804678fa97d91B974ec2af3c843270886528a9E6', // CAKE-BUSD LP
  },
  tokenSymbol: 'CAKE',
  tokenAddresses: {
    97: '',
    56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 12,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'USDT',
  lpAddresses: {
    97: '',
    56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00', // usdt-BUSD LP
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
  pid: 13,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'ETH',
  lpAddresses: {
    97: '',
    56: '0x7213a321f1855cf1779f42c0cd85d3d95291d34c', // ETH-busd LP
  },
  tokenSymbol: 'ETH',
  tokenAddresses: {
    97: '',
    56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
}, 


]

export default farms
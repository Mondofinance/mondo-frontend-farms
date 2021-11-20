import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
     sousId: 3,
    tokenName: 'Cake',
    stakingTokenName: QuoteToken.CAKE,
     stakingTokenAddress: '0x22592d3206be2c28298b8168234aedef4d50f319',
     contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa9BabFdA4Aa92245d03bA2832066C734c1b2dec6',
     },
     poolCategory: PoolCategory.CORE,
    projectLink: 'moondo.finance',
     harvest: true,
     tokenPerBlock: '10',
     sortOrder: 1,
     isFinished: false,
     tokenDecimals: 18,
   },
  
  
 
]

export default pools

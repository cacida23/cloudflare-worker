import {Usdt} from '../type/usdt';

const Bids = {
  "BNB": "1839",
  "ETH": "1027"
} as const;

type BidsKey = GetValue<typeof Bids>

export async function handleRequest(): Promise<Response> {
  try {
    const value: {
      [key: string]: string
    } = {};
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=b589e2e5-b041-46f5-8691-b471798888ec&convert=USDT')
    const res = await response.json() as Usdt<BidsKey>
    for(const key in res.data ) {
      const _O = res.data[key as BidsKey];
      await FRIST.put(`${_O.symbol}-${new Date().valueOf()}`, '' + _O.quote.USDT.price)
      value[_O.symbol] = '' + _O.quote.USDT.price
    }
    return new Response(JSON.stringify(value), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch(e) {
    return new Response(JSON.stringify(e))
  }
}

export async function handleEvent() {
  handleRequest();
}
interface IEcons {
  status: {[key: string]: string}
  data: {[coin: string]: ICoin}
}
interface ICoin {
  symbol: string
  quote: {
    USDT: {
      price: number
    }
  }
}

declare const FRIST: any;

export async function handleRequest(request: Request): Promise<Response> {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=b589e2e5-b041-46f5-8691-b471798888ec&convert=USDT')
    const res = await response.json() as IEcons
    const item = {} as {[key: string]: number}
    for(const key in res.data) {
      const _O = res.data[key]
      await FRIST.put(`${_O.symbol}-${new Date().valueOf()}`, _O.quote.USDT.price)
    }
    const list = await FRIST.get();
    console.log(list);
    return new Response(JSON.stringify(list), {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
  } catch(e) {
    return new Response(`request Error`)
  }
  
  
}

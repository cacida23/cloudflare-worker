export interface Usdt<T extends PropertyKey> {
    status: Status;
    data: { [key in T]: Datum };
}

export interface Datum {
    id:                 number;
    name:               string;
    symbol:             string;
    slug:               string;
    num_market_pairs:   number;
    date_added:         Date;
    tags:               string[];
    max_supply:         number | null;
    circulating_supply: number;
    total_supply:       number;
    is_active:          number;
    platform:           null;
    cmc_rank:           number;
    is_fiat:            number;
    last_updated:       Date;
    quote:              Quote;
}

export interface Quote {
    USDT: USDTClass;
}

export interface USDTClass {
    price:                    number;
    volume_24h:               number;
    volume_change_24h:        number;
    percent_change_1h:        number;
    percent_change_24h:       number;
    percent_change_7d:        number;
    percent_change_30d:       number;
    percent_change_60d:       number;
    percent_change_90d:       number;
    market_cap:               number;
    market_cap_dominance:     number;
    fully_diluted_market_cap: number;
    last_updated:             Date;
}

export interface Status {
    timestamp:     Date;
    error_code:    number;
    error_message: null;
    elapsed:       number;
    credit_count:  number;
    notice:        null;
}

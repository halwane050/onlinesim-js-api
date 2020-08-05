import _base from "./_base";
interface User {
    id: number;
    name: string;
    username: string;
    email: string | null;
    apikey: string | null;
    api_access: boolean | string;
    locale: 'ru' | 'en' | 'zh' | 'de';
    number_region: number | null;
    number_country: number | null;
    number_reject: null | Array<string>;
    ugroup: number;
    verify: number;
    block: number;
    payment: {
        balance: number;
        zbalance: number;
        income: number;
        spent: number;
        now: number;
    };
}
export default class GetUser extends _base {
    balance(): Promise<{
        balance: number;
        zbalance: number;
        income: number;
    }>;
    profile(): Promise<User>;
}
export {};
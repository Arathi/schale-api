export interface Item {
    Id: number;
    IsReleased: boolean[];
    Category: string;
    Rarity: string;
    Quality: number;
    Tags: string[];
    ExpiryTime?: number | undefined[];
    Shops: Shop[];
    Craftable: boolean[];
    StageDrop: boolean[];
    Icon: string;
    Name: string;
    Desc: string;
    ExpValue?: number;
    SynthQuality?: number[];
    EventBonus?: number[][];
    ConsumeType?: string;
    ImmediateUse?: boolean;
    Contains?: number[][];
    ContainsCn?: number[][];
    EventBonusGlobal?: number[][];
    EventBonusCn?: number[][];
    ContainsGlobal?: number[][];
}
export interface Shop {
    ShopCategory: string;
    Released: boolean[];
    Amount: number;
    CostType: string;
    CostId: number;
    CostAmount: number;
}

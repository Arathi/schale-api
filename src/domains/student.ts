// https://transform.tools/json-to-typescript
export interface Student {
  Id: number
  IsReleased: boolean[]
  DefaultOrder: number
  PathName: string
  DevName: string
  Name: string
  School: string
  Club: string
  StarGrade: number
  SquadType: string
  TacticRole: string
  Summons: Summon[]
  Position: string
  BulletType: string
  ArmorType: string
  StreetBattleAdaptation: number
  OutdoorBattleAdaptation: number
  IndoorBattleAdaptation: number
  WeaponType: string
  WeaponImg: string
  Cover: boolean
  Equipment: string[]
  CollectionBG: string
  FamilyName: string
  PersonalName: string
  SchoolYear: string
  CharacterAge: string
  Birthday: string
  CharacterSSRNew: string
  ProfileIntroduction: string
  Hobby: string
  CharacterVoice: string
  BirthDay: string
  Illustrator: string
  Designer: string
  CharHeightMetric: string
  CharHeightImperial?: string
  StabilityPoint: number
  AttackPower1: number
  AttackPower100: number
  MaxHP1: number
  MaxHP100: number
  DefensePower1: number
  DefensePower100: number
  HealPower1: number
  HealPower100: number
  DodgePoint: number
  AccuracyPoint: number
  CriticalPoint: number
  CriticalDamageRate: number
  AmmoCount: number
  AmmoCost: number
  Range: number
  RegenCost: number
  Skills: Skill[]
  FavorStatType: string[]
  FavorStatValue: number[][]
  FavorAlts: number[]
  MemoryLobby: number[]
  MemoryLobbyBGM: string
  FurnitureInteraction: number[][][]
  FavorItemTags: string[]
  FavorItemUniqueTags: string[]
  IsLimited: number
  Weapon: Weapon
  Gear: Gear
  SkillExMaterial: number[][]
  SkillExMaterialAmount: number[][]
  SkillMaterial: number[][]
  SkillMaterialAmount: number[][]
}

export interface Summon {
  Id: number
  SourceSkill: string
  InheritCasterStat: string[]
  InheritCasterAmount: number[][]
  ObstacleMaxHP1?: number
  ObstacleMaxHP100?: number
}

export interface Skill {
  SkillType: string
  Effects: Effect[]
  Name?: string
  Desc?: string
  Parameters?: string[][]
  Cost?: number[]
  Duration?: number
  Range?: number
  Radius?: Radius[]
  Icon?: string
  EffectCombine?: string[]
  EffectCombineLabel?: EffectCombineLabel
  InheritScale?: InheritScale
  HideCalculation?: boolean
}

export interface Effect {
  Type: string
  Hits?: number[]
  Scale?: number[]
  Frames?: Frames
  CriticalCheck?: string
  Duration?: string
  Period?: string
  Stat?: string
  Value?: number[][]
  Channel?: number
  HitsParameter?: number
  Chance?: string
  Icon?: string
  SubstituteCondition?: string
  SubstituteScale?: number[]
  HitFrames?: number[]
  StackSame?: number
  IgnoreDef?: number[]
  Restrictions?: Restriction[]
  ZoneHitInterval?: number
  ZoneDuration?: number
  Critical?: number
  HideFormChangeIcon?: boolean
  SourceStat?: string
  ExtraDamageSource?: ExtraDamageSource
}

export interface Frames {
  AttackEnterDuration: number
  AttackStartDuration: number
  AttackEndDuration: number
  AttackBurstRoundOverDelay: number
  AttackIngDuration: number
  AttackReloadDuration: number
  AttackReadyStartDuration?: number
  AttackReadyEndDuration?: number
}

export interface Restriction {
  Property: string
  Operand: string
  Value: any
}

export interface ExtraDamageSource {
  Side: string
  Stat: string
  Multiplier: number[]
  SliderTranslation: string
  SliderStep: number[]
  SliderLabel: number[]
  SliderLabelSuffix: string
  SimulatePerHit: boolean
}

export interface Radius {
  Type: string
  Radius?: number
  Width?: number
  Height?: number
  Degree?: number
  ExcludeRadius?: number
}

export interface EffectCombineLabel {
  Icon?: string[]
  StackLabel?: string[]
  DisableFirst?: boolean
  StackLabelTranslated?: string[]
}

export interface InheritScale {
  Skill: string
  EffectId: number
  Parameter: number
}

export interface Weapon {
  Name: string
  Desc: string
  AdaptationType: string
  AdaptationValue: number
  AttackPower1: number
  AttackPower100: number
  MaxHP1: number
  MaxHP100: number
  HealPower1: number
  HealPower100: number
  StatLevelUpType: string
}

export interface Gear {
  Released?: boolean[]
  StatType?: string[]
  StatValue?: number[][]
  Name?: string
  Desc?: string
  TierUpMaterial?: number[][]
  TierUpMaterialAmount?: number[][]
}

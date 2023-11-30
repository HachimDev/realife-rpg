export interface IexperienceData {
  level: number;
  currentExp: number;
  expToNextLevel: number;
}
export interface IReward {
  gold?: number;
  experience: number;
}
export interface IQuest {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  isDaily: boolean;
  isWeekly: boolean;
  expirationDate: Date;
  type: number;
  rewards: IReward;
}

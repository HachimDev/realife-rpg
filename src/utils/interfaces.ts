export interface IexperienceData {
  level: number;
  currentExp: number;
  expToNextLevel: number;
}

export interface Quest {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  isDaily: boolean;
  isWeekly: boolean;
  expirationDate: Date;
  //   type: 1 | 2 | 3;
  rewards: {
    gold?: number;
    experience: number;
  };
}

export interface CV {
  readonly generalInformation: GeneralInformation;
  readonly employmentHistory: readonly Employment[];
  readonly educationHistory: readonly Education[];
  readonly skills: readonly Skill[];
  readonly footer: string;
}

export interface GeneralInformation {
  readonly name: string;
  readonly professionalTitle: string;
  readonly professionalDescription: string;
  readonly phone: string;
  readonly email: string;
  readonly linkedIn: string;
}

export interface Employment {
  readonly employer: string;
  readonly jobs: readonly Job[];
}

export interface Job {
  readonly startDate: string;
  readonly endDate: string;
  readonly jobTitle: string;
  readonly responsibilities: readonly string[];
}

export interface Education {
  readonly startDate: string;
  readonly endDate: string;
  readonly institution: string;
  readonly major: string;
}

export interface Skill {
  readonly name: string;
  readonly description: string;
}

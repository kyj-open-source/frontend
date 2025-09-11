// export interface Job {
//   id: string;
//   title: string;
//   companyName: string;
//   location: string;
// }

// export interface Resource {
//   id: string;
//   title: string;
//   url: string;
//   type: "ARTICLE" | "VIDEO" | "COURSE";
// }

export interface SearchResults {
  jobs: Job[];
  resources: Resource[];
}

export interface Job {
  id: string;
  title: string;
  companyName: string;
  location: string;
  description: string;
  skills: Skill[];
  isSaved: boolean;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: "ARTICLE" | "VIDEO" | "COURSE";
  description: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
}

// export interface NavItem {
//   title: string;
//   path: string;
// }

// export interface Service {
//   id: string;
//   title: string;
//   description: string;
//   icon: string;
//   isOptional: boolean;
// }

// export interface FAQ {
//   question: string;
//   answer: string;
// }

// export interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }



export interface NavItem {
  title: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  isOptional: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface UserService {
  title: string;
  description: string;
  included: string[];
}

export interface UserGroup {
  id: string;
  title: string;
  tagline: string;
  description: React.ReactNode; // <-- updated from string
  icon: string;
  services: {
    title: string;
    description: string;
    included: string[];
  }[];
}

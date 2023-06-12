import { Image } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface PageInfo extends Base {
  backgroundInformation: string;
  name: string;
  role: string;
  heroImage: Image;
  profilePic: Image;
}

interface Social extends Base {
  title: string;
  url: string;
}

interface Skill extends Base {
  title: string;
  progress: number;
  image: Image;
}

interface Experience extends Base {
  jobTitle: string;
  companyImage: Image;
  company: string;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  technologies: Skill[];
  points: string[];
}

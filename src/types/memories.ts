interface MemorieComponent {
  id: number;
  type: "image" | "text";
  path: Array<MemoriesPath>;
}

interface MemoriesPath {
  id: number;
  pathFile: string;
}

export interface Memories {
  id: number;
  date: string;
  title: string;
  type: "public" | "private";
  component: Array<MemorieComponent>;
}

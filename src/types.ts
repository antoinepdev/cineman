export interface Movie {
  title: string;
  title_es: string[];
  year: number;
  language: ("español latino 🇲🇽" | "español castellano 🇪🇸")[];
  poster: string;
  description: string;
  catalog: string;
}

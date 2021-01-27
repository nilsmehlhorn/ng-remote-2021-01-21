export interface Book {
  isbn: string;
  cover: string;
  title: string;
  author: string;
  abstract: string;
  numPages: number;
  subtitle: string;
  publisher: {
    name: string;
    url: string;
  };
}

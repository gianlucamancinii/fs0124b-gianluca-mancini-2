export interface IUsers {
  id: number
  nickname:string
  email: string
  password: string
}

export interface IMoviesPopular{
  userId: number;
  id: number;
  titolo: string;
  anno: number;
  descrizione: string;
}

export interface  IFavorites{
  userId:number;
  favorites:number[];
}

export interface ILoginData{
  password: string,
  email:string,
 nickname:string
}

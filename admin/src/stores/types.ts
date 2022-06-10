export interface IAuftrag {
  id: string;
  kategorie: string;
  titel: string;
  fach: string;
  beschreibung: string;
  date: Date["toString"];
}
export class Auftrag implements IAuftrag {
  id = "";
  kategorie = "";
  titel = "";
  date = Date;
  beschreibung = "";
  fach = "";
}

import { Hotel} from './hotel';

export interface Forfait {
  id: number;
  hotel: Hotel;
  destination: string;
  villeDepart: string;
  nomHotel: string;
  photo: string;
  nbEtoiles: number;
  forfaitEnVedette: boolean;
  prix: number;
  dateDepart: string;
  dateRetour: string;
  duree: string;
  rabais: number;
}

import ANNONCES, { type Annonce } from "./annonces";

export const getAnnonceById = (id: string | undefined): Annonce | undefined =>
    ANNONCES.find((annonce) => annonce.id === id);

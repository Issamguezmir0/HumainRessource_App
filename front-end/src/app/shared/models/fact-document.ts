export class factDocument {
    _id!: string;
    type!: string;
    client_name!: string;
    description!: string;
    date_creation!: Date;
    devise!: string;
    timbre_fiscal!: Boolean;
    taux_tva!: number;
    documentLink!: string;
    withLink!: Boolean;
    created_by!: {nom: string, prenom: string}
}
export class document_rh {
    _id!: string;
    type!: string;
    dateDemande!: Date;
    dateEnvoi!: Date;
    commentaire!: string;
    titre!: string;
    askedBy!: {nom: string, prenom:string};
    documentLink!: string;
    withEmail!: boolean;
    withLink! : boolean;
}
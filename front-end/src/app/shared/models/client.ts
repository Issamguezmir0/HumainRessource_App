export class Client {
    _id! : string
    client_name!: string
    contact_principal!: string
    raison_sociale! : string
    adresse!: string
    pays!: string
    ville!: string
    code_postal!: string
    numTelephone!: number
    email!: string
    site_web!: string
    RIB!: string
    RC!: string
    MF!: string
    Code_TVA!: number
    addedBy!: {nom: string, prenom: string}
    document_gen!: {type: string, link_document: string}
}
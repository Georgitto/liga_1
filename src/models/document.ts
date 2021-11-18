declare namespace DocumentModel {
    interface Document {
        id: string | '',
        name?: string,
        owner?: string,
        creationDate?: string,
        direction?: 'in' | 'out' | '',
        type?: 'act' | 'invoice' | '',
        signatureDate?: string,
        signatureOwner?: string,
        totalSum?: string
    }
}

export default DocumentModel;
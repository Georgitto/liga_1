declare namespace HistoryModel {
    interface Change {
        updateDate?: string | Date,
        id?: string,
        name?: string,
        owner?: string,
        creationDate?: string,
        direction?: 'in' | 'out' | '',
        type?: 'act' | 'invoice' | '',
        signatureDate?: string,
        signatureOwner?: string,
        totalSum?: string
    }
    interface History {
        id: string,
        changes: Change[]
    }
}

export default HistoryModel;
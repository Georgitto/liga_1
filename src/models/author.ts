declare namespace AuthorModel {
    interface Author {
        id?: string,
        birthDate?: string, 
        name?: string, 
        deathDate?: string,
    }
    interface Response {
        data: AuthorModel.Author[],
        status: number,
        statusText: string,
        headers: object,
        request: object,
    }
}

export default AuthorModel;
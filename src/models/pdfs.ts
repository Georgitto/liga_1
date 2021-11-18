declare namespace PDFSModel {
  interface PDFS {
    id?: string,
    docs: string[],
  }
  interface PDF {
    creationDate: string,
    name: string,
    link: string,
  }
}

export default PDFSModel;

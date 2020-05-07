export class Todo {
    constructor(
        public id: number,
        public memberName: string,
        public presentCity: string,
        public presentCountry: string,
        public destinationCity: string,
        public destinationCountry: string,
        public phone: string,
        public email: string
    ) { }
}

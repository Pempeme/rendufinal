export default class Post {
    id 
    title 
    description 
    image 
    uID
    createdAt

    constructor(obj) {
        this.id = obj.id 
        this.title = obj.title 
        this.description = obj.description 
        this.image = obj.image 
        this.uID = obj.uID 
        this.createdAt = obj.image

    }
}
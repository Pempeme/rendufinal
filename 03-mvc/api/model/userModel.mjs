export default class User {
    id 
    username 
    email 
    password
    image
    posts 
    constructor(obj) {
        this.id = obj.id 
        this.username = obj.username 
        this.email = obj.email 
        this.password = obj.password 
        this.image = obj.image    
        this.posts = obj.posts 
    }


}

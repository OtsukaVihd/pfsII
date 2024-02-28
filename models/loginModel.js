

export default class LoginModel {
    
    #email
    #senha


    get email(){
        return this.#email;
    }
    set email(value){
        this.#email = value;
    }

    get senha(){
        return this.#senha;
    }
    set senha(value){
        this.#senha = value;
    }

    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    toJSON(){
        return {
            'email': this.email,
            'senha': this.senha
        }
    }


}
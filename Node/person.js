export default class person{

    constructor(name){
        this.n=name;
    }

    syaHello(){
        return `Hello ${this.n}`;
    }


}

export const greet=(name)=>`Hyy ${name}`;
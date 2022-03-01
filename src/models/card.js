class Card{
    constructor(name, imagem){
        this._name       = name
        this._imagem     = imagem
        this.id          = name.toLowerCase()
    }

    get name(){return this._name}
    get imagem(){return this._imagem}


    createCard(){
        const li = document.createElement("li")
        const img = document.createElement("img")

        img.id = this.id
        img.src = `${this.imagem}`
        img.alt = `${this.name}`

        li.appendChild(img)

        return li
    }
}

export {Card}
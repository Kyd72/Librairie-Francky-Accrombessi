export default class Livre {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get qtestock() {
        return this._qtestock;
    }

    set qtestock(value) {
        this._qtestock = value;
    }

    get prix() {
        return this._prix;
    }

    set prix(value) {
        this._prix = value;
    }

    get titre() {
        return this._titre;
    }

    set titre(value) {
        this._titre = value;
    }

    constructor(id,titre , prix,qtestock ) {

        this._id =id ;
        this._qtestock=qtestock;
        this._prix=prix;
        this._titre=titre;
    }



}
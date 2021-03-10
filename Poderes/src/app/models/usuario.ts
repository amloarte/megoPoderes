export class Usuario {
    constructor(
        public id_usuario: number,
        public id_persona: number,
        public nombre: string,
        public login: string,
        public email: string,
        public password: string,
        public id_oficina: number,
        public id_perfil: number,
        public nombre_perfil?: any,
    ){
        this.id_usuario = id_usuario;
        this.id_persona = id_persona;
        this.nombre = nombre;
        this.login = login;
        this.email = email;
        this.password = password;
        this.id_oficina = id_oficina;
        this.id_perfil = id_perfil;
        this.nombre_perfil = nombre_perfil;
    }
} 

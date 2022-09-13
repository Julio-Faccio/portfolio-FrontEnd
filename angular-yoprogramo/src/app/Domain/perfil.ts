export interface Perfil {
    education:              Education[];
    experience:             Experience[];
    habilidadesTecnologias: HabilidadesTecnologia[];
    Proyectos:              Proyecto[];
    Persona:                Persona[];
}

export interface Persona {
    fullName:     string;
    dateOfBirth:  string;
    aboutMe:      string;
    mail:         string;
    backImage:    string;
    image:        string;
    position:     string;
    organization: string;
    ubication:    string;
    uni1:         string;
    uni1Icon:     string;
    uni2:         string;
    uni2Icon:     string;
}

export interface Proyecto {
    name:        string;
    mesInicio:   string;
    AñoInicio:   string;
    mesFin:      string;
    AñoFin:      string;
    url:         string;
    Descripcion: string;
}

export interface Education {
    school: string;
    title:  string;
    img:    string;
    career: string;
    score:  number;
    start:  string;
    end:    string;
}

export interface Experience {
    position:    string;
    company:     string;
    img:         string;
    mode:        string;
    start:       string;
    end:         string;
    timeElapsed: string;
    Place:       string;
}

export interface HabilidadesTecnologia {
    name:     string;
    progress: number;
}

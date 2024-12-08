export interface Person {
    perId: number;
    perDocument: string;
    perLastname: string;
    perName: string;
    perPhoto: string;
}

export interface User {
    useId: number,
    useMail: string,
    usePassword: string,
    person: Person
}

export interface LoginPayLoad {
    user: string,
    pwd: string
}

export interface RegisterPayLoad {
    useMail: string,
    usePassword: string,
    person: {
        perDocument: string;
        perName: string;
        perLastname: string;
    };
}

export interface Entry {
    entId: number;
    entDate: string; 
    entText: string;
    entTitle: string;
    entStatus: boolean;
}


export interface DailyLogCreate {
    useId: number,
    emoStaId: number,
    entText: string,
    entTitle: string
}

export interface DailyLog {
    dayLogId: number;
    dayLogDate: Date; 
    emotionalLog: EmotionalLog;
    entry: Entry;
}

export interface updateDailyLog {
    entText: string,
    entTitle: string,
    idEmoLog:number,
    idEmoState:number
}

export interface EmotionalLog {
    emoLogId: number;
    emoLogDate: Date; 
    emotionalState: EmotionalState;
    user: User;
}

export interface EmotionalState {
    emoStaId: number,
    emoStaState: string,
}

export interface googleResponse{
    clientId: string;
    client_id: string;
    credential: string;
    select_by: string;
}

export interface ApiResponse<T> {
    Status?: boolean;
    message?: string;
    error?: string;
    Token?: string;
    Data: T;
    NewAccessToken: string;
}
export interface StudentInterface{
    fullName: string,
    sector: string,
    level: string,
}

export interface CandidateInterface{
    profile: string,
    ID: number,
    number: number,
    slogan: string | null,
    description: string | null,
    student: StudentInterface,
}

export interface CandidatesListReturnedInterface{
    data: CandidateInterface[],
    message: string,
    success: boolean,
}
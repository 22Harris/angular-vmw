export interface ElectionInterface{
    ID: number,
    profile: string,
}

export interface ElectionListReturnedInterface{
    data: ElectionInterface[],
    message: string,
    success: boolean
}
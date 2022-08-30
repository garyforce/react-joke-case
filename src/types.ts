export interface Joke {
    id: string,
    type: string,
    setup: string,
    punchline: string,
}
  
export enum JOKE_STATE {
    STATE_LOADING,
    STATE_DONE
}
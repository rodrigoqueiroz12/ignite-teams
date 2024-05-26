export class PlayerAlreadyInATeamError extends Error {
  constructor() {
    super('Essa pessoa já está adicionada em um time aqui.')
  }
}

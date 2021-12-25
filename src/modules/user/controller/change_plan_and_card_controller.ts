import { Request, Response } from 'express'
import { ChangePlanAndCardUseCase } from '../domain/usecases/change_plan_and_card_usecase'

class ChangePlanAndCardController {
  private _useCase: ChangePlanAndCardUseCase
  constructor(readonly useCase) {
    this._useCase = useCase
    this.handle = this.handle.bind(this)
  }

  async handle(request: Request, response: Response) {
    const { id, plain, card } = request.body

    try {
      const result = await this._useCase.call(id, plain, card)

      return response.json(result)
    } catch (error) {
      return response.status(400).json({ Error: error.message })
    }
  }
}

export { ChangePlanAndCardController }
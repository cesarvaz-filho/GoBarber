import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';
import { Request, Response } from 'express';
import UserMap from 'mappers/UserMap';
import { container } from 'tsyringe';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = container.resolve(SendForgotPasswordEmailService);

    sendForgotPasswordEmail.execute({
      email
    });

    //const mappedUser = UserMap.toDTO(user);

    return response.status(204).json();
  }
}
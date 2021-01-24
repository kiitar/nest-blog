import {
  Injectable,
  ArgumentMetadata,
  ValidationPipe,
  UnprocessableEntityException,
} from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    console.log('metadata: ', metadata);
    console.log('value: ', value);
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e) {
        throw new UnprocessableEntityException(
          this.handleError(e.response.message),
        );
      }
    }
  }

  private handleError(errors) {
    return errors.map((error) => error);
  }
}

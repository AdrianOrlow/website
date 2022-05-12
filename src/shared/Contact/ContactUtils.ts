import { ResponseCode } from '@constants';

export type ContactData = Record<
  'name' | 'mail' | 'phone' | 'message' | 'recaptcha',
  string
>;

export const CONTACT_FIELDS: (keyof ContactData)[] = [
  'name',
  'mail',
  'phone',
  'message',
];

export const alertsTypes: Record<ResponseCode, 'success' | 'error' | 'info'> = {
  [ResponseCode.MESSAGE_SENT]: 'success',
  [ResponseCode.MESSAGE_NOT_SENT]: 'error',
  [ResponseCode.CAPTCHA_INVALID]: 'error',
};

import qs from "qs";
import * as z from "zod";

export async function validationAction({ request, schema }) {
  const text = await request.text();
  const body = qs.parse(text);

  try {
    const formData = schema.parse(body);
    return { formData: { ...formData, captcha: body.captcha }, errors: null };
  } catch (err) {
    const parsedErrors = err.issues.reduce(
      (errors, error) =>
        error.path.reduce((a, b, level) => {
          if (level === error.path.length - 1) {
            a[b] = error.message;
            return errors;
          }

          if (!a[b]) a[b] = {};
          return a[b];
        }, errors),
      {}
    );
    return {
      formData: body,
      errors: parsedErrors,
    };
  }
}

const VALIDATION_TRANSLATIONS = {
  name: {
    required_error: "Jméno je povinné pole.",
    message: "Jméno musí obsahovat alespoň 3 znaky.",
  },
  subject: {
    required_error: "Předmět je povinné pole.",
    message: "Předmět musí obsahovat alespoň 3 znaky.",
  },
  email: {
    required_error: "Email je povinné pole.",
    message: "Email není ve správném tvaru.",
  },
  msg: {
    required_error: "Zpráva je povinné pole.",
    message: "Zpráva musí obsahovat alespoň 10 znaků.",
  },
};

export const getSchema = () => {
  const { name, subject, email, msg } = VALIDATION_TRANSLATIONS;

  return z.object({
    name: z
      .string({ required_error: name.required_error })
      .trim()
      .min(3, { message: name.message }),
    subject: z
      .string({ required_error: subject.required_error })
      .trim()
      .min(3, { message: subject.message }),
    email: z
      .string({ required_error: email.required_error })
      .trim()
      .email(email.message),
    msg: z
      .string({ required_error: msg.required_error })
      .min(10, { message: msg.message }),
  });
};

export const getRecaptchaURL = (token) =>
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SERVER_SECRET}&response=${token}`;

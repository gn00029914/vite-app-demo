import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import DOMPurify from "dompurify";
import { ref } from "vue";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string } from "yup";
import { useForm, useField } from "vee-validate";

export const useValidationStore = defineStore("validation", () => {
  const { t } = useI18n();

  const sanitizeInput = (input: string): string =>
    DOMPurify.sanitize(input, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });

  const sanitizedEmail = ref("");
  const sanitizedPassword = ref("");

  const schema = toTypedSchema(
    object({
      email: string()
        .required(t("validation.emailRequired"))
        .test("sanitize-email", t("validation.sanitizeError"), (value) => {
          if (value === undefined) return false;
          sanitizedEmail.value = sanitizeInput(value);
          return sanitizedEmail.value === value; // 返回一個布爾值
        })
        .test("is-valid-email", t("validation.invalidEmail"), (value) => {
          if (!value) return false;
          const parts = value.split("@");
          if (parts.length !== 2) return false;
          return parts[1].includes(".");
        })
        .email(t("validation.invalidEmail"))
        .default(""),
      password: string()
        .required(t("validation.passwordRequired"))
        .test("sanitize-password", t("validation.sanitizeError"), (value) => {
          if (value === undefined) return false;
          sanitizedPassword.value = sanitizeInput(value);
          return sanitizedPassword.value === value; // 返回一個布爾值
        })
        .min(6, t("validation.passwordMin"))
        .default(""),
    }),
  );

  const { handleSubmit } = useForm({
    validationSchema: schema,
  });

  const onSubmit = handleSubmit((values) => {
    console.log("Sanitized Email:", sanitizedEmail.value);
    console.log("Sanitized Password:", sanitizedPassword.value);
    console.log("Form submitted with values:", values);
  });

  const { value: email, errorMessage: emailError } = useField("email");
  const { value: password, errorMessage: passwordError } = useField("password");

  return {
    email,
    emailError,
    password,
    passwordError,
    onSubmit,
  };
});

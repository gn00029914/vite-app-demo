import { defineStore } from "pinia";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { useI18n } from "vue-i18n";
import DOMPurify from "dompurify";
import { ref, watch } from "vue";

export const useValidationStore = defineStore("validation", () => {
  const { t } = useI18n();

  const schema = toTypedSchema(
    object({
      email: string()
        .email(t("validation.invalidEmail"))
        .required(t("validation.emailRequired"))
        .test("is-valid-email", t("validation.invalidEmail"), (value) => {
          if (!value) return false;
          const parts = value.split("@");
          if (parts.length !== 2) return false;
          return parts[1].includes(".");
        })
        .default(""),
      password: string()
        .min(6, t("validation.passwordMin"))
        .required(t("validation.passwordRequired"))
        .default(""),
    }),
  );

  const { handleSubmit } = useForm({
    validationSchema: schema,
  });

  const { value: email, errorMessage: emailError } = useField("email");
  const { value: password, errorMessage: passwordError } = useField("password");

  const sanitizeInput = (input: string): string =>
    DOMPurify.sanitize(input, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });

  const sanitizedEmail = ref("");
  const sanitizedPassword = ref("");

  // 監聽 email 和 password 的變更，並使用 DOMPurify 進行清理
  watch(
    email,
    (newValue) => {
      sanitizedEmail.value = sanitizeInput(newValue as string);
    },
    { immediate: true, deep: true },
  );

  watch(
    password,
    (newValue) => {
      sanitizedPassword.value = sanitizeInput(newValue as string);
    },
    { immediate: true, deep: true },
  );

  const onSubmit = handleSubmit((values) => {
    sanitizedEmail.value = sanitizeInput(values.email);
    sanitizedPassword.value = sanitizeInput(values.password);
    console.log("Sanitized Email:", sanitizedEmail.value);
    console.log("Sanitized Password:", sanitizedPassword.value);
  });

  return {
    email,
    emailError,
    password,
    passwordError,
    onSubmit,
  };
});

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="flex">
        <label :class="labelClass" for="email"
          >@{{ $t("message.email") }}:</label
        >
        <input
          id="email"
          v-model="email"
          :class="inputClass"
          type="email"
          :placeholder="$t('message.email_p')"
          required
          @invalid="
            (e) => {
              const target = e.target as HTMLInputElement;
              target.setCustomValidity(emailError ? emailError : '');
            }
          "
          @input="
            (e) => {
              const target = e.target as HTMLInputElement;
              target.setCustomValidity('');
            }
          "
        />
        <span>@{{ emailError }}</span>
      </div>
      <div class="flex gap-16">
        <label :class="labelClass" for="password"
          >@{{ $t("message.password") }}:</label
        >
        <input
          id="password"
          v-model="password"
          :class="inputClass"
          type="password"
          :placeholder="$t('message.password_p')"
          required
          @invalid="
            (e) => {
              const target = e.target as HTMLInputElement;
              target.setCustomValidity(passwordError ? passwordError : '');
            }
          "
          @input="
            (e) => {
              const target = e.target as HTMLInputElement;
              target.setCustomValidity('');
            }
          "
        />
        <span>@{{ passwordError }}</span>
      </div>
      <button type="submit">@{{ $t("message.submit") }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useValidationStore } from "@/store/useValidationStore";

defineProps({
  inputClass: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
});

const validationStore = useValidationStore();
const { email, emailError, password, passwordError } =
  storeToRefs(validationStore);

const onSubmit = async () => {
  try {
    await validationStore.onSubmit();
  } catch (error) {
    console.error("Form submission error:", error);
  }
};
</script>

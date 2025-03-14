<script setup lang="ts">
import { ref, VNodeRef } from "vue";
import validator from "validator";
import axios from "axios";

// Refs
const loading = ref(false);
// Form
const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const phone = ref(null);
const message = ref(null);
const firstNameRef = ref<VNodeRef | null>(null);
const lastNameRef = ref<VNodeRef | null>(null);
const emailRef = ref<VNodeRef | null>(null);
const phoneRef = ref<VNodeRef | null>(null);
const messageRef = ref<VNodeRef | null>(null);

// Send message and notify user of result
async function sendMessage() {
  if (validated()) {
    const form = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    loading.value = true;
    try {
      const url = import.meta.env.VITE_EMAIL_FN || "";
      const result = await axios.post(url, form);
      if (result.data.error) throw new Error(result.data.message);
      // TODO: Add notifications
      onReset();
    } catch (err) {
      console.error(err);
      // TODO: Add notifications
    } finally {
      loading.value = false;
    }
  }
}

function onReset() {
  firstName.value = null;
  lastName.value = null;
  email.value = null;
  phone.value = null;
  message.value = null;
  firstNameRef.value.resetValidation();
  lastNameRef.value.resetValidation();
  emailRef.value.resetValidation();
  phoneRef.value.resetValidation();
  messageRef.value.resetValidation();
}

function validated() {
  const refs = [firstNameRef, lastNameRef, emailRef, phoneRef, messageRef];
  refs.forEach((r) => r.value.validate());
  return !refs.some((r) => r.value.hasError);
}
</script>

<template>
  <q-card flat class="contact-card q-px-lg">
    <q-card-section>
      <div class="text-h6">Contact Us</div>
    </q-card-section>
    <form
      @submit.prevent.stop="sendMessage"
      @reset.prevent.stop="onReset"
      class="q-gutter-md"
    >
      <q-card-section class="row">
        <q-input
          ref="firstNameRef"
          lazy-rules
          label="First"
          class="q-mr-xs"
          v-model="firstName"
          :rules="[(val) => !!val || '* Required']"
        >
          <template v-slot:error>
            <!-- Empty slot to suppress the error icon -->
          </template>
        </q-input>
        <q-input
          ref="lastNameRef"
          lazy-rules
          label="Last"
          class="q-ml-xs"
          v-model="lastName"
          :rules="[(val) => !!val || '* Required']"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          ref="emailRef"
          label="Email"
          v-model="email"
          :rules="[
            (val) => !!val || '* Required',
            (val) => validator.isEmail(val) || '* Invalid email address',
          ]"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          fill-mask
          lazy-rules
          label="Phone"
          ref="phoneRef"
          v-model="phone"
          mask="(###) ### - ####"
          :rules="[(val) => !!val || '* Required']"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          rows="5"
          lazy-rules
          label="Message"
          type="textarea"
          ref="messageRef"
          v-model="message"
          :rules="[
            (val) => !!val || '* Required',
            (val) => val.length > 10 || '* Message is too short',
          ]"
        />
      </q-card-section>
      <q-card-section>
        <q-btn
          :loading="loading"
          no-caps
          outline
          type="submit"
          class="full-width"
        >
          Send
        </q-btn>
      </q-card-section>
    </form>
  </q-card>
</template>

<style scoped>
.contact-card {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>

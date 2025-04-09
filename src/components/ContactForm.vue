<script setup lang="ts">
import axios from "axios";
import validator from "validator";
import { useQuasar } from "quasar";
import { ref, VNodeRef } from "vue";

// Local state
const loading = ref(false);

// Form values
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

// Component refs
const firstNameRef = ref<VNodeRef | null>(null);
const lastNameRef = ref<VNodeRef | null>(null);
const emailRef = ref<VNodeRef | null>(null);
const phoneRef = ref<VNodeRef | null>(null);
const messageRef = ref<VNodeRef | null>(null);

// use functions
const $q = useQuasar();

// Send message and notify user of result
async function sendMessage() {
  if (validated()) {
    const form = {
      name: `${firstName.value} ${lastName.value}`,
      email: email.value,
      message: message.value + "\n\n\n Customers's Phone #: " + phone.value,
    };
    loading.value = true;
    try {
      const url = import.meta.env.VITE_EMAIL_FN || "";
      const result = await axios.post(url, form);
      if (result.data.error) throw new Error(result.data.message);
      $q.notify({ message: "Message sent!", color: "blue" });
      onReset();
    } catch (err) {
      console.error(err);
      $q.notify({
        message: "Unable to send message. Try again?",
        color: "red",
      });
    } finally {
      loading.value = false;
    }
  }
}

function onReset() {
  const formValues = [firstName, lastName, email, phone, message];
  formValues.forEach((formValue) => {
    formValue.value = "";
  });
  const refs = [firstNameRef, lastNameRef, emailRef, phoneRef, messageRef];
  refs.forEach((refs) => {
    refs.value.resetValidation();
  });
}

function validated() {
  const refs = [firstNameRef, lastNameRef, emailRef, phoneRef, messageRef];
  refs.forEach((r) => r.value.validate());
  return !refs.some((r) => r.value.hasError);
}
</script>

<template>
  <q-card class="contact-card q-pa-lg">
    <q-card-section>
      <div class="text-h6 themed-font">Contact Us</div>
    </q-card-section>
    <form
      class="q-gutter-md"
      @reset.prevent.stop="onReset"
      @submit.prevent.stop="sendMessage"
    >
      <q-card-section class="gt-sm row q-pb-none">
        <q-input
          ref="firstNameRef"
          outlined
          lazy-rules
          label="First"
          style="flex: 1"
          v-model="firstName"
          class="q-mr-xs q-py-none"
          :rules="[(val) => !!val || '* Required']"
          :color="$q.dark.isActive ? 'white' : 'dark'"
        />
        <q-input
          ref="lastNameRef"
          outlined
          lazy-rules
          label="Last"
          v-model="lastName"
          style="flex: 1"
          class="q-ml-xs q-py-none"
          :rules="[(val) => !!val || '* Required']"
          :color="$q.dark.isActive ? 'white' : 'dark'"
        />
      </q-card-section>

      <q-card-section class="lt-md row q-pb-none">
        <q-input
          ref="firstNameRef"
          outlined
          lazy-rules
          label="First"
          style="flex: 1"
          v-model="firstName"
          class="full-width q-py-none"
          :rules="[(val) => !!val || '* Required']"
          :color="$q.dark.isActive ? 'white' : 'dark'"
        />
      </q-card-section>
      <q-card-section class="lt-md row q-pb-none">
        <q-input
          ref="lastNameRef"
          outlined
          lazy-rules
          label="Last"
          style="flex: 1"
          v-model="lastName"
          class="full-width q-py-none"
          :rules="[(val) => !!val || '* Required']"
          :color="$q.dark.isActive ? 'white' : 'dark'"
        />
      </q-card-section>
      <q-card-section class="row q-pb-none">
        <q-input
          outlined
          lazy-rules
          ref="emailRef"
          label="Email"
          v-model="email"
          class="full-width q-py-none"
          :color="$q.dark.isActive ? 'white' : 'dark'"
          :rules="[
            (val) => !!val || '* Required',
            (val) => validator.isEmail(val) || '* Invalid email address',
          ]"
        />
      </q-card-section>
      <q-card-section class="row q-pb-none">
        <q-input
          outlined
          fill-mask
          lazy-rules
          label="Phone"
          ref="phoneRef"
          v-model="phone"
          mask="(###) ### - ####"
          class="full-width q-py-none"
          :color="$q.dark.isActive ? 'white' : 'dark'"
          :rules="[(val) => !!val || '* Required']"
        />
      </q-card-section>
      <q-card-section class="row q-pb-none">
        <q-input
          rows="5"
          outlined
          lazy-rules
          label="Message"
          type="textarea"
          ref="messageRef"
          v-model="message"
          class="full-width q-py-none"
          :color="$q.dark.isActive ? 'white' : 'dark'"
          :rules="[
            (val) => !!val || '* Required',
            (val) => val.length > 10 || '* Message is too short',
          ]"
        />
      </q-card-section>
      <q-card-section class="row q-mb-lg">
        <q-btn
          no-caps
          outline
          type="submit"
          :loading="loading"
          class="full-width"
          :color="$q.dark.isActive ? 'white' : 'dark'"
        >
          Send
        </q-btn>
      </q-card-section>
    </form>
  </q-card>
</template>

<style scoped>
.contact-card {
  background-color: var(--q-contactBackground);
}
.themed-font {
  color: var(--q-fontColor);
}
</style>

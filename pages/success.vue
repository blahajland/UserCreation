<script setup lang="ts">
import FormContainer from "~/components/containers/FormContainer.vue";
import TitleContainer from "~/components/containers/TitleContainer.vue";
import BlahajButton from "~/components/inputs/BlahajButton.vue";
import { linksService } from "~/services/links/links.service";

const $form = useForm();
const $router = useRouter();

if (!$form.hasPassed) $router.push("/");
</script>

<template>
  <FormContainer>
    <TitleContainer>
      <h2>Success !</h2>
      <p>
        You're almost done, <b>{{ $form.displayName }}</b> :3
      </p>
    </TitleContainer>
    <p>
      A mail has been sent to <b>{{ $form.email }}</b> containing your password.
      Once you get it, you're ready to dive with the Blahajs!
    </p>
    <BlahajButton
      submit
      @click="linksService.changeLocation('https://blahaj.land/portal')"
    >
      <p>Log in</p>
    </BlahajButton>
  </FormContainer>
</template>

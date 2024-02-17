<script>
  import { Alert } from 'flowbite-svelte';
  import { APP_STATUS, appStatus } from '../store.ts'
  import StepUpload from "./StepUpload.svelte";
  import StepLoading from "./StepLoading.svelte";
  import StechChat from "./StepChat.svelte"
</script>

{#if $appStatus === APP_STATUS.INIT}
    <StepUpload />
{:else if $appStatus === APP_STATUS.LOADING}
    <StepLoading />
{:else if $appStatus === APP_STATUS.CHAT_MODE}
    <StechChat />
{:else if $appStatus === APP_STATUS.ERROR}
<Alert>
    <span class="font-medium">Ha ocurrido un error</span>
    Hay un error en la aplicación
</Alert>
{:else}
<Alert>
    <span class="font-medium">Action not recognized</span>
    Hay un error en la aplicación
</Alert>
{/if}



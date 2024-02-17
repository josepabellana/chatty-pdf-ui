<script>
    import { setAppStatusError, setAppStatusloading } from '../store.ts'
    import Dropzone from "svelte-file-dropzone";
  
    let files = {
      accepted: [],
      rejected: []
    };
  
    async function handleFilesSelect(e) {
      const { acceptedFiles, fileRejections } = e.detail;

      files.accepted = [...files.accepted, ...acceptedFiles];
      files.rejected = [...files.rejected, ...fileRejections];

      if (acceptedFiles.length > 0){
        setAppStatusloading();
        
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);

        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        if(!res){
            setAppStatusError();
            return;
        }

        const result = await res.json();
        console.log(result);
        setAppStatusChatMode(result);
      }
    }
  </script>
  
  {#if files.accepted.length === 0}
    <Dropzone
        multiple=false
        on:drop={handleFilesSelect}>
        Drag and Drop your files!
    </Dropzone>
  {/if}
  <ol>
    {#each files.accepted as item}
      <li>{item.name}</li>
    {/each}
  </ol>
export default async function buttonPress() {
  window.file_api.ipcRenderer.sendMessage('file-export', ['Pressing Button']);
}

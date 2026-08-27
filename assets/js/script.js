async function copyDivContent() {
  // 1. Get the target div element
  const divElement = document.getElementById('activity');
  
  // 2. Extract its text content
  const textToCopy = divElement.innerHTML;

  try {
    // 3. Write the text directly to the system clipboard
    await navigator.clipboard.writeText(textToCopy);
    alert('Content copied to clipboard successfully!');
  } catch (err) {
    console.error('Failed to copy content: ', err);
  }
}

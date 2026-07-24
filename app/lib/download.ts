export async function downloadImage(imageUrl: string, fileName: string) {
  const response = await fetch(imageUrl);

  if (!response.ok) {
    throw new Error("Image download failed.");
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(url);
}

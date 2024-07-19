export async function fetchData(requestUrl) {
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("API passed away", error);
  }
}

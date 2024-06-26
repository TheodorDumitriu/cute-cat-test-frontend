import axios from "axios";

export async function fetchKitties() {
  try {
    const url = `https://site--cute-cat-backend--yq48zswblh2x.code.run/cute-kitties`;
    const { data } = await axios.get(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

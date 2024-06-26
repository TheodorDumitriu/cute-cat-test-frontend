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

export async function fetchLovedKitties() {
  try {
    const url =
      "https://site--cute-cat-backend--yq48zswblh2x.code.run/loved-kitties";
    const { data } = await axios.get(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}


import { writeInfo, clearInfo, searchHistory, appendValidCity, fetcher, buttonFetcher} from "./functions.js";
let histArr = [];
export function searchListener() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetcher();
  });
}

import axios from "axios";

let themeList = [];
export async function getThemeList() {
    if (themeList.length == 0) {
        return axios.get("/src/themes/_list.json").then((res) => {
            const list = res.data.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            themeList = list;
            return themeList;
        });
    } else {
        return themeList;
    }
}

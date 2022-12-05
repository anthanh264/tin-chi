let download_path = "./TKB kỳ 2- 2022-2023 - Hồng.xlsx";
let download_name = "TKB kỳ 2- 2022-2023 - Hồng.xlsx";
let title = "Kì 2 Năm học 2022 - 2023";

// ---

let download_link = document.getElementById("download-link");
download_link.setAttribute("href", download_path);
download_link.setAttribute("download", download_name);
let school_year = document.getElementById('school-year');
school_year.innerHTML = title;

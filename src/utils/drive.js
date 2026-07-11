// Papers are stored in this project under public/papers, not on Google Drive.
const paper = (name) => ({ name, path: `papers/${name}` });

export const semester1Sessions = [
  { id: "2019-22", label: "2019–22", files: [paper("1st/2019-22/Business Communication & Information System.pdf"), paper("1st/2019-22/C Programming.pdf"), paper("1st/2019-22/Computer Fundamentals.pdf"), paper("1st/2019-22/Mathematical_Foundation_without_last_page.pdf.pdf"), paper("1st/2019-22/Mathematics.pdf")] },
  { id: "2020-23", label: "2020–23", files: [paper("1st/2020-23/Business Communication & Information Systems.pdf"), paper("1st/2020-23/C Programmings.pdf"), paper("1st/2020-23/Computer Fundamental.pdf"), paper("1st/2020-23/Mathematical Foundations.pdf")] },
  { id: "2021-24", label: "2021–24", files: [paper("1st/2021-24/Business Communication & Information Systems.pdf"), paper("1st/2021-24/C Programmings.pdf"), paper("1st/2021-24/Computer Fundamental.pdf"), paper("1st/2021-24/Mathematical Foundation (1).pdf"), paper("1st/2021-24/Mathematics.docx")] },
  { id: "2022-25", label: "2022–25", files: [paper("1st/2022-25/Business Communication & Information Systems.pdf"), paper("1st/2022-25/C Programmings.pdf"), paper("1st/2022-25/Computer Fundamental.pdf"), paper("1st/2022-25/Mathematical Foundation (1).pdf"), paper("1st/2022-25/Mathematical Foundation.pdf"), paper("1st/2022-25/Mathematics.pdf")] },
  { id: "2023-24", label: "2023–24", files: [paper("1st/2023-24/Business Communication & Information Systems.pdf"), paper("1st/2023-24/C Programmings.pdf"), paper("1st/2023-24/Computer Fundamental.pdf"), paper("1st/2023-24/Mathematical Foundation (1).pdf"), paper("1st/2023-24/Mathematics.pdf")] },
  { id: "2024-27", label: "2024–27", files: [paper("1st/2024-27/Business Communication & Information Systems.pdf"), paper("1st/2024-27/C Programmings.pdf"), paper("1st/2024-27/Computer Fundamental.pdf"), paper("1st/2024-27/Mathematics.pdf")] },
];

export const semester2Sessions = [
  { id: "2019-22", label: "2019–22", files: [paper("2nd/2019-22/Computer Architectures.pdf"), paper("2nd/2019-22/Data Structure throughh C.pdf"), paper("2nd/2019-22/Mathematics.pdf"), paper("2nd/2019-22/System Analysis and Designs.pdf")] },
  { id: "2020-23", label: "2020–23", files: [paper("2nd/2020-23/Computer Architecturee.pdf"), paper("2nd/2020-23/Data Structure throughh C.pdf"), paper("2nd/2020-23/Discrete Mathematics.pdf"), paper("2nd/2020-23/System Analysis and Designs.pdf")] },
  { id: "2021-24", label: "2021–24", files: [paper("2nd/2021-24/Computer Architecture.pdf"), paper("2nd/2021-24/Data Structure through C.pdf"), paper("2nd/2021-24/Discrete Mathematics.pdf"), paper("2nd/2021-24/System Analysis and Design.pdf")] },
  { id: "2022-25", label: "2022–25", files: [paper("2nd/2022-25/Computer Architecture.pdf"), paper("2nd/2022-25/Data Structure through C.pdf"), paper("2nd/2022-25/Discrete Mathematics.pdf"), paper("2nd/2022-25/System Analysis and Design.pdf")] },
  { id: "2023-26", label: "2023–26", files: [paper("2nd/2023-26/Computer Architecture.pdf"), paper("2nd/2023-26/Data Structure through C.pdf"), paper("2nd/2023-26/Discrete Mathematics.pdf"), paper("2nd/2023-26/System Analysis and Design.pdf")] },
  { id: "2024-27", label: "2024–27", files: [paper("2nd/2024-27/Computer Architecture.pdf"), paper("2nd/2024-27/Data Structure through C.pdf"), paper("2nd/2024-27/Discrete Mathematics.pdf"), paper("2nd/2024-27/System Analysis and Design.pdf")] },
];

export const semesterSessions = { 1: semester1Sessions, 2: semester2Sessions };
export const getSemesterSessions = (semester) => semesterSessions[Number(semester)] ?? [];
export const getSemesterSession = (semester, id) => getSemesterSessions(semester).find((session) => session.id === id);
export const getLocalPaperUrl = (path) => `${import.meta.env.BASE_URL}papers/${path.replace(/^papers\//, "")}`;

import semester1 from "../data/semester1.json";
import semester2 from "../data/semester2.json";
import semester3 from "../data/semester3.json";
import semester4 from "../data/semester4.json";
import semester5 from "../data/semester5.json";
import semester6 from "../data/semester6.json";

export const semesters = [
  { number: 1, title: "Semester 1", subjects: semester1, sessions: ["2024-27", "2023-24", "2022-25", "2021-24", "2020-23", "2019-22"] },
  { number: 2, title: "Semester 2", subjects: semester2, sessions: ["2024-27", "2023-26", "2022-25", "2021-24", "2020-23", "2019-22"] },
  { number: 3, title: "Semester 3", subjects: semester3, sessions: ["2023-26", "2022-25", "2021-24", "2020-23", "2019-22"] },
  { number: 4, title: "Semester 4", subjects: semester4, sessions: ["2023-26", "2022-25", "2021-24", "2020-23", "2019-22"] },
  { number: 5, title: "Semester 5", subjects: semester5, sessions: ["2022-25", "2021-24", "2020-23", "2019-22"] },
  { number: 6, title: "Semester 6", subjects: semester6, sessions: ["2022-25", "2021-24", "2020-23", "2019-22"] },
];
export const getSemester = (number) => semesters.find((semester) => semester.number === Number(number));
export const getSubject = (semester, id) => getSemester(semester)?.subjects.find((subject) => subject.id === id);

// The public Google Drive folder containing all Semester 1, year-wise papers.
// Keep its sharing setting as: "Anyone with the link" → "Viewer".
export const semester1FolderId = "1Ty4tsSBbfRj2SGYVoxxl96F5-XTL73fI";
export const semester1PreviewUrl = `https://drive.google.com/drive/folders/${semester1FolderId}`;
export const semester1DownloadUrl = `https://drive.google.com/uc?export=download&id=${semester1FolderId}`;

export const semester1Sessions = [
  { id: "2019-22", label: "2019–22", folderId: "1OlHwN7MyirtQluwhnNdZuMzsRix8Vg04" },
  { id: "2020-23", label: "2020–23", folderId: "18sb8zif_unNzjssdn5p67hXWOSxrG1_V" },
  { id: "2021-24", label: "2021–24", folderId: "1Lhq-oWSDp9ED263ObCXzrUzendYJ7uQQ" },
  { id: "2022-25", label: "2022–25", folderId: "1D1cFGiM1Afmefw5wBH9PqrbuIBppxquy" },
  { id: "2023-26", label: "2023–26", folderId: "1AtP3lsRzwoVvPY7dKcHrxDRzGxdwatXT" },
  { id: "2024-27", label: "2024–27", folderId: "1vpRWMvfXP05_dA5uD37wUQ-dS3MS1TRW" },
];

export const semester2Sessions = [
  { id: "2019-22", label: "2019–22", folderId: "11cxeGMvjTH5GPr4w51CjiHK7TOLcOcNb" },
  { id: "2020-23", label: "2020–23", folderId: "1wMGbvBsmdyFM-0WleBzOZ--mHTaGxx1y" },
  { id: "2021-24", label: "2021–24", folderId: "1DKnZFxmszRRzmP29BdBAecKNToVmmIL2" },
  { id: "2022-25", label: "2022–25", folderId: "1h4K2NEX0n_QUt4rpHLzL4NelTyMIv1UU" },
  { id: "2023-26", label: "2023–26", folderId: "1QvRR1lnM8o9SPaArD-wQ3SvhojhB44Uy" },
  { id: "2024-27", label: "2024–27", folderId: "15mH3FXrD8GpPQJB21o4GfGijF1XKKbGK" },
];

export const semesterSessions = { 1: semester1Sessions, 2: semester2Sessions };
export const getSemesterSessions = (semester) => semesterSessions[Number(semester)] ?? [];
export const getSemesterSession = (semester, id) => getSemesterSessions(semester).find((session) => session.id === id);
export const getEmbeddedFolderUrl = (folderId) => `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;
export const getFolderDownloadUrl = (folderId) => `https://drive.google.com/uc?export=download&id=${folderId}`;

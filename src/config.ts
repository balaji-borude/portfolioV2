const DEFAULT_RESUME_URL = `${import.meta.env.BASE_URL}BALAJI_BORUDE_RESUME.pdf`;

export const RESUME_URL =
  import.meta.env.VITE_RESUME_URL?.trim() || DEFAULT_RESUME_URL;

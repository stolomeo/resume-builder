export const userForm = {
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const avatar = {
  m: 1,
  bgcolor: "secondary.main",
};

export const resumeContainer = {
  display: "flex",
  mt: 1.5,
  flexDirection: "column",
  height: "100%",
  overflow: "auto",
  "@media print": {
    display: "block",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
  },
};

export const personalBox = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

export const resumeSectionBox = {
  display: "flex",
  alignItems: "flex-end",
};

export const print18px = {
  "@media print": {
    fontSize: "18px",
  },
};

export const print12px = {
  "@media print": {
    fontSize: "12px",
  },
};

export const print10px = {
  "@media print": {
    fontSize: "10px",
  },
};

export const printBlue = {
  "@media print": {
    color: "#1976d2",
  },
};

export const flexColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

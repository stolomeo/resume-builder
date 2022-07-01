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

export const footerAppBar = {
  top: "auto",
  bottom: 0,
  bgcolor: "rgba(18, 18, 18,0.7)",
  maxHeight: "6vh",
  display: "flex",
  justifyContent: "center",
};

export const footerToolBar = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const sidebarBox = {
  width: "15vw",
  height: "84vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  position: "fixed",
  top: "25",
  left: "0",
  "@media print": {
    display: "none",
  },
};

export const toolAppBar = {
  bgcolor: "inherit",
  "@media print": {
    display: "none",
  },
};

export const toolNavBar = {
  gap: "1rem",
  display: "flex",
  justifyContent: "center",
};

export const formComponentBox = {
  display: "flex",
  flexDirection: "column",
  width: "40%",
  padding: "1rem 5rem",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  height: "100%",
  overflow: "auto",
  "@media print": {
    display: "none",
  },
};

export const formInputBox = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

export const formPointsBox = {
  display: "flex",
  flexDirection: "column",
  mt: 1.5,
};

export const flexColumn = {
  display: "flex",
  flexDirection: "column",
};

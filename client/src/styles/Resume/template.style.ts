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

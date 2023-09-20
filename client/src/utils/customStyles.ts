export const getFlexboxStyles = (options: {
  flexDirection?: string;
  justifyContent?: string;
  gap?: string;
  mt?: number;
  px?: number;
}) => {
  return {
    display: "flex",
    ...(options.flexDirection && { flexDirection: options.flexDirection }),
    ...(options.gap && { gap: options.gap }),
    ...(options.mt && { mt: options.mt }),
    ...(options.px && { px: options.px }),
  };
};

export const getPrintStyle = (fontSize: string | null, color?: string) => {
  return {
    "@media print": {
      ...(fontSize && { fontSize }),
      ...(color && { color }),
    },
  };
};

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

export const resumeSectionStyles = {
  display: "flex",
  alignItems: "flex-end",
};

export const headerStyles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black",
    padding: "0px",
  },
  t: {
    display: "flex",
    justifyContent: "flex-end",
  },
  backToHome: {
    display: "flex",
    float: "left",
  },
  textField: {
    margin: "0.5rem",
    backgroundColor: "white",
  },
};

export const cardTileStyles = {
  card: {
    maxWidth: 300,
    marginRight: 20,
    marginBottom: 20,
    overflow: "auto",
  },
  title: {
    minHeight: 64,
    maxHeight: 64,
    overflow: "hidden",
    fontSize: "1.2rem",
  },
  overview: {
    WebkitBoxOrient: "vertical",
    maxHeight: 74,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
  },
};

export const cardStyles = {
  card: {
    maxWidth: "auto",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  title: {
    minHeight: 64,
    maxHeight: 64,
    overflow: "hidden",
    fontSize: "1.2rem",
  },
  overview: {
    maxHeight: 500,
    overflow: "auto",
  },
  content: {
    padding: "2rem",
    fontSize: "1rem",
    overflow: "hidden",
  },
  backToHome: {
    color: "white",
  },
};

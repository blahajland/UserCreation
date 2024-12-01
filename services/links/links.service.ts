class LinksService {
  changeLocation(url: string, newTab = false) {
    const a = document.createElement("a");
    a.href = url;
    if (newTab) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.click();
  }
}

export const linksService = new LinksService();

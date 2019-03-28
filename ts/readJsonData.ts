import { IdataBlog } from './data';

class ReadJsonData {
  private dataName: string;

  constructor(dataFile: string) {
    let u: string = unescape(dataFile);
    this.dataName = "";

    if ((dataFile.indexOf("/") != -1) || u.indexOf("/") != - 1) {
      return;
    }

    var script = document.createElement('script');
    script.src = "jsonData/" + dataFile + ".js";
    document.head.appendChild(script);
    this.dataName = dataFile;
  }

  ReadData(): any {
    return eval('data.' + this.dataName);
  }

  public ReadJson(content: HTMLElement, converter: any): any {
    let data: IdataBlog[];
    data = this.ReadData();

    data.forEach(item => {
      let sectionParent: HTMLElement;
      let sectionTitle: HTMLElement;
      let sectionBody: HTMLElement;
      let sectionTitleEdited: HTMLElement;
      sectionParent = document.createElement("div");
      sectionTitle = document.createElement("div");
      sectionTitleEdited = document.createElement("div");
      sectionBody = document.createElement("div");

      sectionParent.className = "sectionContainer";
      sectionTitle.className = "sectionTitle";
      sectionTitleEdited.className = "sectionTitleEdited";
      sectionBody.className = "sectionBody";

      sectionTitle.innerHTML = converter.makeHtml(item.title);
      sectionBody.innerHTML = converter.makeHtml(item.content);
      sectionTitleEdited.innerHTML = converter.makeHtml("by " + item.editedBy);

      sectionParent.appendChild(sectionTitle);
      sectionTitle.appendChild(sectionTitleEdited);
      sectionParent.appendChild(sectionBody);
      content.appendChild(sectionParent);
    });

  }

};


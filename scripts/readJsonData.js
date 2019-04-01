class ReadJsonData {
    constructor(dataFile) {
        let u = unescape(dataFile);
        this.dataName = "";
        if ((dataFile.indexOf("/") != -1) || u.indexOf("/") != -1) {
            return;
        }
        var script = document.createElement('script');
        script.src = "jsonData/" + dataFile + ".js";
        document.head.appendChild(script);
        this.dataName = dataFile;
    }
    ReadData() {
        return eval('data.' + this.dataName);
    }
    ReadJson(content, converter) {
        let data;
        data = this.ReadData();
        data.forEach(item => {
            let sectionParent;
            let sectionTitle;
            let sectionBody;
            let sectionTitleEdited;
            let contentText;
            sectionParent = document.createElement("div");
            sectionTitle = document.createElement("div");
            sectionTitleEdited = document.createElement("div");
            sectionBody = document.createElement("div");
            sectionParent.className = "sectionContainer";
            sectionTitle.className = "sectionTitle";
            sectionTitleEdited.className = "sectionTitleEdited";
            sectionBody.className = "sectionBody";
            sectionTitle.innerHTML = converter.makeHtml(item.title);
            contentText = item.content.join("\n\n");
            sectionBody.innerHTML = converter.makeHtml(contentText);
            sectionTitleEdited.innerHTML = converter.makeHtml("by " + item.editedBy);
            sectionParent.appendChild(sectionTitle);
            sectionTitle.appendChild(sectionTitleEdited);
            sectionParent.appendChild(sectionBody);
            content.appendChild(sectionParent);
        });
    }
}
;
//# sourceMappingURL=readJsonData.js.map
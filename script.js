let expanded = false;

const defaultText = `
# Welcome to Markdown Previewer!

## This is a sub-heading...
### You can also do some cool stuff:
  
Heres some code, \`<span></span>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function printHello(firstLine, lastLine) {
    console.log("Hello World!");
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**
And feel free to ~~cross stuff out~~.

There's also [links](https://github.com/adityam31), and
> Block Quotes!

- And there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, embedded images:

![JavaScript Logo](https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png)
`

/* ********************************************************** */
//QUERYING DOM ELEMENTS
const editorTextArea = document.getElementById("editor");
const previewArea = document.getElementById("preview");

const expandIcons = document.querySelectorAll(".expand");
const editorDiv = document.getElementById("editorDiv");
const previewDiv = document.getElementById("previewDiv");
const headingRow = document.getElementById("headingRow");
const footerDiv = document.getElementById("footerDiv");

/***********************************************************/
//UTILITY FUNCTIONS

const expandSection = (expandDiv, hideDiv) => {
    if(!expanded){
        hideDiv.style.display = "none";
        headingRow.style.display = "none";
        footerDiv.style.display = "none";
        hideDiv.className = "";
        expandDiv.className = "col border border-dark";
        expanded = true;
    }
    else{
        hideDiv.style.display = "block";
        headingRow.style.display = "block";
        footerDiv.style.display = "block";
        hideDiv.className = "col-6 border border-dark";
        expandDiv.className = "col-6 border border-dark";
        expanded = false;
    }
};

const renderMarkdown = () => {
    let editorText = editorTextArea.value;
    previewArea.innerHTML = marked(editorText);
};


/****************************************************************/
//ADDING LISTENDERS

document.addEventListener("DOMContentLoaded",() => {
    editorTextArea.textContent = defaultText;
    renderMarkdown();
});

expandIcons[0].addEventListener("click", () => expandSection(editorDiv, previewDiv));
expandIcons[1].addEventListener("click", () => expandSection(previewDiv, editorDiv));

editorTextArea.addEventListener("keyup", () => renderMarkdown());


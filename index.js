dialogDict = {
        clean_data:['<script src="https://gist.github.com/hadialsayedali01/59c45775b95969b938c5431ac67db667.js"></script>'],
        general_questions:['<script src="https://gist.github.com/hadialsayedali01/6f0fcf26b05b0cfced1b90a8ae7e043b.js"></script>'],
        frequency_year:['<script src="https://gist.github.com/hadialsayedali01/3e8b6dd2d7ad1d2f6dbf5dc7ead958c1.js"></script>'],
        frequency_motivations:['<script src="https://gist.github.com/hadialsayedali01/7314f0793e57f719ba68230b5d2da44c.js"></script>'],
        frequency_month:['<script src="https://gist.github.com/hadialsayedali01/607668dffdef64b86120aea575323dfc.js"></script>'],
        frequency_weekday:[
            '<script src="https://gist.github.com/hadialsayedali01/d6fcb63f854043848059ee61db41adb2.js"></script>'
        ],
        confirmation_general:['<script src="https://gist.github.com/hadialsayedali01/e832c4101ff7a1281b9b58e9dfd6bf09.js"></script>'],
        confirmation_motivation:[
            '<script src="https://gist.github.com/hadialsayedali01/90d9f80ce9af83fae88c33b2c56f38a4.js"></script>'
        ],
        confirmation_locations:['https://gist.github.com/hadialsayedali01/bad732840d3c79c17938ee089f658515'],
        locations_motivations_proportions:['<script src="https://gist.github.com/hadialsayedali01/63dd88651efa42e68a03f9e5a968debf.js"></script>']
    }

    dialogGeneral = document.createElement("dialog")
    closeDialog = document.createElement("button")
    closeDialog.textContent="Close"
    closeDialog.addEventListener("click",(event)=>{
        event.preventDefault()
        dialogGeneral.close()
    })

    dialogGeneral.appendChild(closeDialog)
    document.getElementsByTagName("html")[0].appendChild(dialogGeneral);

    document.getElementById("table-contents").addEventListener("click",(e)=>{
        e.preventDefault()
        dialogGeneral.innerHTML = 
        `
        <a href="#introduction">Introduction</a>
        <a href="#Data">Data</a>
        <a href="#Time">Time</a>
        <a href="#Offence-Types">Offence Types</a>
        <a href="#Hate-Crime-Motivations">Hate Crime Motivations</a>
        <a href="#Significant-Events">Significant Events</a>
        <a href="#Conclusion">Conclusion</a>
        `;
        dialogGeneral.appendChild(closeDialog);
        dialogGeneral.showModal();
        document.activeElement.blur();


    });
    
    
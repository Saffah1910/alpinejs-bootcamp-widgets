function greet() {
    return {
        name: "",
        langauge: [
            { english: "hello" },
            { french: "bonjour" },
            { arabic: "marhaba" },
            { xhosa: "molo" }
        ],
        greetnames() {

            this.name;
        },
        selectLanguages() {
            if (this.langauge == english) {
                this.english + this.name
            };
            if (this.langauge == french) {
                this.french + this.name
            };
            if (this.langauge == arabic) {
                this.arabic + this.name
            };
            if(this.langauge == xhosa){
                this.xhosa + this.name
            }
        },

    }


};





const app =Vue.createApp({
   data() {
      return {
        user:{name:'',points:0,attemps:3,answers:[],initModal:true},
        commentsConfig:{showChallenge:false,editor:null,responseEditor:null},
        duplicatedConfig:{showChallenge:false,editor:null,responseEditor:null},
        deadcodeConfig:{showChallenge:false,editor:null,responseEditor:null},
        dataclassConfig:{showChallenge:false,editor:null,responseEditor:null},
        longmethodConfig:{showChallenge:false,editor:null,responseEditor:null},
        swissarmyknifeConfig:{showChallenge:false,editor:null,responseEditor:null},
        refusedbequestConfig:{showChallenge:false,editor:null,responseEditor:null},
        longparametersConfig:{showChallenge:false,editor:null,responseEditor:null},
        featureenvyConfig:{showChallenge:false,editor:null,responseEditor:null},
        largeclassConfig:{showChallenge:false,editor:null,responseEditor:null},
      }
    },
    methods:{
        init(){

        },
        async showCommentChallenge(){
            let txt=await fetch('./challenge/commentexercises.txt');
            let txtCode=await txt.text();
            this.commentsConfig.showChallenge = true; 

            setTimeout(() => {
              this.commentsConfig.editor = CodeMirror(document.getElementById('comment-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            }, 300);
            
            this.commentsConfig.responseEditor = CodeMirror(document.getElementById('comment-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showDuplicatedCodeChallenge(){
            let txt=await fetch('./challenge/duplicatedcodeexercises.txt');
            let txtCode=await txt.text();
            this.duplicatedConfig.showChallenge = true;
            this.duplicatedConfig.editor = CodeMirror(document.getElementById('duplicatedcode-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.duplicatedConfig.responseEditor = CodeMirror(document.getElementById('duplicatedcode-response-txt'),{
            value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showDeadCodeChallenge(){
            let txt=await fetch('./challenge/deadcodeexercises.txt');
            let txtCode=await txt.text();
            this.deadcodeConfig.showChallenge = true;
            this.deadcodeConfig.editor = CodeMirror(document.getElementById('deadcode-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.deadcodeConfig.responseEditor = CodeMirror(document.getElementById('deadcode-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showDataClassChallenge(){
            let txt=await fetch('./challenge/dataclassexercises.txt');
            let txtCode=await txt.text();
            this.dataclassConfig.showChallenge = true;
            this.dataclassConfig.editor = CodeMirror(document.getElementById('dataclass-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.dataclassConfig.responseEditor = CodeMirror(document.getElementById('dataclass-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showLongMethodChallenge(){
            let txt=await fetch('./challenge/longmethodexercises.txt');
            let txtCode=await txt.text();
            this.longmethodConfig.showChallenge = true;
            this.longmethodConfig.editor = CodeMirror(document.getElementById('longmethod-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.longmethodConfig.responseEditor = CodeMirror(document.getElementById('longmethod-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showSwissArmyKnaifeChallenge(){
            let txt=await fetch('./challenge/swissarmyknifeexercises.txt');
            let txtCode=await txt.text();
            this.swissarmyknifeConfig.showChallenge = true;
            this.swissarmyknifeConfig.editor = CodeMirror(document.getElementById('swissarmyknife-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.swissarmyknifeConfig.responseEditor = CodeMirror(document.getElementById('swissarmyknife-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showRefusedBequestChallenge(){
            let txt=await fetch('./challenge/refusedbequestexercises.txt');
            let txtCode=await txt.text();
            this.refusedbequestConfig.showChallenge = true;
            this.refusedbequestConfig.editor = CodeMirror(document.getElementById('refusedbequest-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.refusedbequestConfig.responseEditor = CodeMirror(document.getElementById('refusedbequest-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showLongParametersChallenge(){
            let txt=await fetch('./challenge/longparametersexercises.txt');
            let txtCode=await txt.text();
            this.longparametersConfig.showChallenge = true;
            this.longparametersConfig.editor = CodeMirror(document.getElementById('longparameters-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.longparametersConfig.responseEditor = CodeMirror(document.getElementById('longparameters-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showFeatureEnvyChallenge(){
            let txt=await fetch('./challenge/featureenvyexercises.txt');
            let txtCode=await txt.text();
            this.featureenvyConfig.showChallenge = true;
            this.featureenvyConfig.editor = CodeMirror(document.getElementById('featureenvy-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.featureenvyConfig.responseEditor = CodeMirror(document.getElementById('featureenvy-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },
        async showLargeClassChallenge(){
            let txt=await fetch('./challenge/largeclassexercises.txt');
            let txtCode=await txt.text();
            this.largeclassConfig.showChallenge = true;
            this.largeclassConfig.editor = CodeMirror(document.getElementById('largeclass-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            this.largeclassConfig.responseEditor = CodeMirror(document.getElementById('largeclass-response-txt'),{
              value: '',
            mode: "text/x-java",
            lineNumbers:true,
            theme: 'mbo',
            });  
        },

        reviewAnswer(smmellName){
            
            switch (smmellName) {
                case 'comments':
                    answer_status=this.reviewCommentAnswer();
                    break;
                case 'longmethod':
                    answer_status=this.reviewLongMethodAnswer();
                    break;
                case 'longparameters':
                    answer_status=this.reviewLongParametersAnswer();
                    break;
                case 'featureenvy':
                    answer_status=this.reviewFeatureEnvyAnswer();
                    break;
                case 'refusedbequest':
                    answer_status=this.reviewRefusedBequestAnswer();
                    break;
                case 'largeclass':
                    answer_status=this.reviewLargeClassAnswer();
                    break;
                case 'dataclass':
                    answer_status=this.reviewDataClassAnswer();
                    break;
                case 'swissarmyknife':
                    answer_status=this.reviewSwissArmyKnifeAnswer();
                    break;
                case 'deadcode':
                    answer_status=this.reviewDeadCodeAnswer();
                    break;
                case 'duplicatedcode':
                    answer_status=this.reviewDuplicatedCodeAnswer();
                    break;

            }
/*            if(answer_status=='ok'){
                si es correcto sumar los puntose
                si es incorrecto restar las vidas
                mostrar alguna animacion
            }else{
                mostrar alguna animacion
            }*/
        },

        reviewCommentAnswer(){
            let code = this.commentsConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.commentsConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewLongMethodAnswer(){
            let code = this.longmethodConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.longmethodConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewDataClassAnswer(){
            let code = this.dataclassConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.dataclassConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewDeadCodeAnswer(){
            let code = this.deadcodeConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.deadcodeConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewDuplicatedCodeAnswer(){
            let code = this.duplicatedcodeConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.duplicatedcodeConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewFeatureEnvyAnswer(){
            let code = this.featureenvyConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.featureenvyConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewLargeClassAnswer(){
            let code = this.largeclassConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.largeclassConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewRefusedBequestAnswer(){
            let code = this.refusedbequestConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.refusedbequestConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewLongParametersAnswer(){
            let code = this.longparametersConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.longparametersConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },

        reviewSwissArmyKnifeAnswer(){
            let code = this.swissarmyknifeConfig.responseEditor.getValue();
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.swissarmyknifeConfig.showChallenge=false;
            if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }
        },
        reviewModalAnswer(){
          this.user.initModal = false;
          // let modalInit = document.getElementById('wrapperInit');
          // modalInit.classList.add('inactive');
        },

    },
    mounted() {
        // methods can be called in lifecycle hooks, or other methods!
        this.init()
    }
});
app.mount('#app');
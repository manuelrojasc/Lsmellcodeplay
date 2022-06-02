var upsModal = new bootstrap.Modal(document.getElementById('ups'));
var goodModal = new bootstrap.Modal(document.getElementById('good'));
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
        resetModalComment(){
            this.commentsConfig.showChallenge=false;
        },
        resetModalDuplicated(){
            this.duplicatedConfig.showChallenge=false;
        },
        resetModalLargeclass(){
          this.largeclassConfig.showChallenge=false;
        },
        resetModalDeadcode(){
            this.deadcodeConfig.showChallenge=false;
        },
        resetModalDataclass(){
            this.dataclassConfig.showChallenge=false;
        },
        resetModalLongmethod(){
            this.longmethodConfig.showChallenge=false;
        },
        resetModalSwissarmyknife(){
            this.swissarmyknifeConfig.showChallenge=false;
        },
        resetModalRefusedbequest(){
            this.refusedbequestConfig.showChallenge=false;
        },
        resetModalLongparameters(){
            this.longparametersConfig.showChallenge=false;
        },
        resetModalFeatureenvy(){
            this.featureenvyConfig.showChallenge=false;
        },
        async showCommentChallenge(){
            let txt=await fetch('./challenge/commentexercises.txt');
            let txtCode=await txt.text();
            this.commentsConfig.showChallenge = true; 

            setTimeout(() => {
              document.getElementById('comment-txt').innerHTML='';
              this.commentsConfig.editor = CodeMirror(document.getElementById('comment-txt'),{
                value: txtCode,
                mode: "text/x-java",
                lineNumbers:true,
                theme: 'mbo',
             });
            }, 300);  
        },
        async showDuplicatedCodeChallenge(){
            let txt=await fetch('./challenge/duplicatedcodeexercises.txt');
            let txtCode=await txt.text();
            this.duplicatedConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('duplicatedcode-txt').innerHTML='';
              this.duplicatedConfig.editor = CodeMirror(document.getElementById('duplicatedcode-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300);   
        },
        async showDeadCodeChallenge(){
            let txt=await fetch('./challenge/deadcodeexercises.txt');
            let txtCode=await txt.text();
            this.deadcodeConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('deadcode-txt').innerHTML='';
              this.deadcodeConfig.editor = CodeMirror(document.getElementById('deadcode-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300);  
        },
        async showDataClassChallenge(){
            let txt=await fetch('./challenge/dataclassexercises.txt');
            let txtCode=await txt.text();
            this.dataclassConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('dataclass-txt').innerHTML='';
              this.dataclassConfig.editor = CodeMirror(document.getElementById('dataclass-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300);  
        },
        async showLongMethodChallenge(){
            let txt=await fetch('./challenge/longmethodexercises.txt');
            let txtCode=await txt.text();
            this.longmethodConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('longmethod-txt').innerHTML='';
              this.longmethodConfig.editor = CodeMirror(document.getElementById('longmethod-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300); 
        },
        async showSwissArmyKnaifeChallenge(){
            let txt=await fetch('./challenge/swissarmyknifeexercises.txt');
            let txtCode=await txt.text();
            this.swissarmyknifeConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('swissarmyknife-txt').innerHTML='';
              this.swissarmyknifeConfig.editor = CodeMirror(document.getElementById('swissarmyknife-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300);  
        },
        async showRefusedBequestChallenge(){
            let txt=await fetch('./challenge/refusedbequestexercises.txt');
            let txtCode=await txt.text();
            this.refusedbequestConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('refusedbequest-txt').innerHTML='';
              this.refusedbequestConfig.editor = CodeMirror(document.getElementById('refusedbequest-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300); 
        },
        async showLongParametersChallenge(){
            let txt=await fetch('./challenge/longparametersexercises.txt');
            let txtCode=await txt.text();
            this.longparametersConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('longparameters-txt').innerHTML='';
              this.longparametersConfig.editor = CodeMirror(document.getElementById('longparameters-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300); 
        },
        async showFeatureEnvyChallenge(){
            let txt=await fetch('./challenge/featureenvyexercises.txt');
            let txtCode=await txt.text();
            this.featureenvyConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('featureenvy-txt').innerHTML='';
              this.featureenvyConfig.editor = CodeMirror(document.getElementById('featureenvy-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300);  
        },
        async showLargeClassChallenge(){
            let txt=await fetch('./challenge/largeclassexercises.txt');
            let txtCode=await txt.text();
            this.largeclassConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('largeclass-txt').innerHTML='';
              this.largeclassConfig.editor = CodeMirror(document.getElementById('largeclass-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300);  
        },

        async showSwissArmyknifeChallenge(){
          let txt=await fetch('./challenge/largeclassexercises.txt');
            let txtCode=await txt.text();
            this.swissarmyknifeConfig.showChallenge = true;
            setTimeout(() => {
              document.getElementById('swissarmyknife-txt').innerHTML='';
              this.swissarmyknifeConfig.editor = CodeMirror(document.getElementById('swissarmyknife-txt'),{
                  value: txtCode,
                  mode: "text/x-java",
                  lineNumbers:true,
                  theme: 'mbo',
              });
            }, 300);  
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
            let code = ""
            //analizar el codigo escrito y encontrar 
           // console.log(code);
            this.commentsConfig.showChallenge=false;
           /* if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewLongMethodAnswer(){
            let code =""
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.longmethodConfig.showChallenge=false;
            /*if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewDataClassAnswer(){
            let code = ""
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.dataclassConfig.showChallenge=false;
            /*if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewDeadCodeAnswer(){
            let code = ""
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.deadcodeConfig.showChallenge=false;
            /*if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewDuplicatedCodeAnswer(){
            let code = "";
            console.log(code);
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.duplicatedConfig.showChallenge=false;
            /*if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewFeatureEnvyAnswer(){
            let code = "";
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.featureenvyConfig.showChallenge=false;
           /* if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewLargeClassAnswer(){
            let code = "";
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.largeclassConfig.showChallenge=false;
           /* if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewRefusedBequestAnswer(){
            let code = "";
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.refusedbequestConfig.showChallenge=false;
           /* if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewLongParametersAnswer(){
            let code = "";
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.longparametersConfig.showChallenge=false;
            /*if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
        },

        reviewSwissArmyKnifeAnswer(){
            let code = "";
            //analizar el codigo escrito y encontrar 
            console.log(code);
            this.swissarmyknifeConfig.showChallenge=false;
           /* if( code.indexOf("//")>0 ){
              upsModal.show();
            }else{
              this.user.points+=10;
              goodModal.show();
            }*/
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
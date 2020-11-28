var app = new Vue({ 
    el: '#console-hello',
    data: {
        message: 'Generapi!'
    }
});

var sectionFrameStart = new Vue({
    el: '#sectionFrameStart',
    data: {
        a_float: true,
        /*
        a_disappear: false,
        a_appear: true,
       a_zoomIn: false,
       a_zoomOff: false,
       */
       a_outBottom: false,
       a_enterBottom: false,
       seen: true
    },
    methods:{
        hello: function (){
            console.log('hello');
        },
        /*
        activeZoomOff: function(){
            this.a_zoomOff = !this.a_zoomOff;
            setTimeout(() => this.changeSeen(), 1300);
        },
        activeZoomIn: function(){
            this.a_zoomIn = !this.a_zoomIn;
            setTimeout(() => this.changeSeen(), 1300);
        },
        */
       activeOutBottom: function(){
           this.a_enterBottom = false;
            this.a_outBottom = !this.a_outBottom;
            setTimeout(() => this.changeSeen(), 800);
        },
        activeEnterBottom: function(){
            this.a_outBottom = false;
            this.changeSeen();
            this.a_enterBottom = !this.a_enterBottom;
        },
        changeSeen: function(){            
            this.seen = !this.seen;
        }
    }
});

var sectionConsole = new Vue({
    el: '#sectionConsole',
    data: {
        a_float: true,
        /*
        a_disappear: false,
        a_appear: true,
       a_zoomIn: false,
       a_zoomOff: false,
       */
       a_outBottom: false,
       a_enterBottom: false,
       seen: false
    },
    methods:{
        hello: function (){
            console.log('hello');
        },
        /*
        activeZoomOff: function(){
            this.a_zoomOff = !this.a_zoomOff;
            setTimeout(() => this.changeSeen(), 1300);
        },
        activeZoomIn: function(){
            this.a_zoomIn = !this.a_zoomIn;
            setTimeout(() => this.changeSeen(), 1300);
        },
        */
       activeOutBottom: function(){
           this.a_enterBottom = false;
            this.a_outBottom = !this.a_outBottom;
            setTimeout(() => this.changeSeen(), 800);
        },
        activeEnterBottom: function(){
            this.a_outBottom = false;
            this.changeSeen();
            this.a_enterBottom = !this.a_enterBottom;
        },
        changeSeen: function(){            
            this.seen = !this.seen;
        }
    }
});


function hola(){
    sectionFrameStart.hello();
    /*sectionFrameStart.changeSeen();*/
}

function sacar(){
    console.log('hola');
}

document.getElementById("button").addEventListener("click", function() {
    sectionFrameStart.activeOutBottom();
  }); 

document.getElementById("button2").addEventListener("click", function() {
    sectionFrameStart.activeEnterBottom();
});

document.getElementById("button3").addEventListener("click", function() {
    sectionConsole.changeSeen();
}); 
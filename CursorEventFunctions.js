AFRAME.registerComponenet("cursor",{
    schema: {
        selectedItemId: { default: "", type: "string" }
    },
    init:function(){
        this.handleMouseEnterEvenets();
        this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvenets:function(){
        this.el.addEventListener("enter",()=>{
            const id =this.el.getAttribute("id")
            const coversId = [
                "mondaiji-tachi-ga-isekai-kara-kuru-sou-desu-yo?",
                "jujutsu-kaisen",
                "sword-art-online",
                "spirit-chronicles",
                "86"
            ];
            if (coversId.includes(id)){
                const coverContaienr = document.querySelector("#cover-container");
                coverContaienr.setAttribute("cursor",{
                    selectedItemId:id,
                });
                this.el.setAttribute("material",{color:"#1565c0"})
            }
        })
    },

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("leave",()=>{
            const {selectedItemId} = this.data;
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id")
                if (id==selectedItemId){
                    el.setAttribute("material",{
                        color:"red"
                    });
                }
            }
        });
    },
});
AFRAME.registerComponent("covers",{
    init:function(){
        this.coverContainer=this.el
        this.createCovers()
    },

    createCovers:function(){
        const covers=[
            {
                id:"86",
                title:"86",
                url:"1.jpg"
            },
            {
                id:"spirit-chronicles",
                title:"Spirit Chronicles",
                url:"2.jpg"
            },
            {
                id:"sword-art-online",
                title:"Sword Art Online",
                url:"3.jpg"
            },
            {
                id:"jujutsu-kaisen",
                title:"Jujutsu Kaisen",
                url:"4.jpg"
            },
            {
                id:"mondaiji-tachi-ga-isekai-kara-kuru-sou-desu-yo?",
                title:"Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?",
                url:"5a.jpg"
            }
            
        ];

        let previous_Xpos = -60
        for (var item of covers){
            const posX = previous_Xpos+25
            const posY = 10
            const posZ = -40
            const pos = {x:posX, y:posY,z:posZ}
            previous_Xpos = posX

            const borderEl = this.createBorder(pos,item.id)
            const coversEl = this.createCoverThumbNails(item)
            borderEl.appendChild(coversEl)
            const titleEl = this.createTitle(pos,item)
            borderEl.appendChild(titleEl)
            this.coverContainer.appendChild(borderEl)
        }
        
    },
    


    createBorder:function(pos,id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"ring",
            radius_inner:9,
            radius_outer:10
        })
        entityEl.setAttribute("position",pos)
        entityEl.setAttribute("material",{
            color:"red",
            opacity:0.3,
        })
        return entityEl
    },

    createCoverThumbNails:function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry", {
            primitive:"circle",
            radius:9,
        })
        entityEl.setAttribute(material,{scr:item.url})
        return entityEl
        
    },

    createTitle:function(position,item){
        const entityEl = document.createElement("entity");
        entityEl.setAttribute("text",{
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position",elPosition);
        entityEl.setAttribute("visible",true);
        return entityEl;
    }
})
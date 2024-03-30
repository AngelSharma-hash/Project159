AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedItemId: { default: "", type: "string" },
        selectedCard: { type: "string", default: "#card1" },
    },
    init: function () {
        this.placesContainer = this.el;
        this.createCards();
    },
    createCards:function(){
        const info = [
            {
                id:"86",
                name:"86",
                summary:"The Republic of San Magnolia has been at war with the Empire of Giad for nine years. Though it initially suffered devastating losses to the Empire's autonomous mechanized Legions, the Republic has since developed its own autonomous units, called Juggernauts, which are directed remotely by a Handler. While on the surface, the public believes the war is being fought between machines, in reality, the Juggernauts are being piloted by humans, all of whom are '86'—the designation given to the Colorata minority of San Magnolia. The 86 originally had equal rights, but were persecuted and scapegoated by the dominant Alba race and the Alba-supremacist Republic government to the point where Colorata were both officially designated and popularly considered subhuman. The 86 were not permitted to have personal names and were immured in internment camps in the 86th District (their namesake), all the while being forced to fight in the Republic's war with the Empire to receive better treatment."
            },
            {
                id:"spirit-chronicles",
                name:"Spirit Chronicles",
                summary:"Haruto Amakawa is a Japanese college student who died in a train crash before he could reunite with his childhood friend, Miharu Ayase, whom he hadn't seen in five years. Next thing he knew his memories resurrected in the body of a boy, Rio, living in the slums of the Bertram Kingdom in the Stralh region of another world. Two people with entirely different backgrounds and values—Rio wants revenge on behalf of his mother, who was murdered in front of him. Complicating matters, Rio suddenly encounters a kidnapping involving the two princesses. After Rio is cleared of abduction, the royalist rewards him with acceptance to the kingdom's academy for studying magic and swordsmanship. However, Rio is shunned by most of the peers there due to being a peasant. His only companion there is Celia Claire, a young female teacher who invites him into her laboratory on a daily basis. Before graduating from the academy, due to a false accusation, Rio became a fugitive and was forced to flee the country. He promises Celia that he will return once he travels to the far east of his mother's homeland to find his roots and stabilize his mixed personality."
            },
            {
                id:"sword-art-online",
                name:"Sword Art Online",
                summary:"In 2022, a virtual reality massively multiplayer online role-playing game (VRMMORPG) called Sword Art Online (SAO) was released. With the NerveGear, a helmet that stimulates the user's five senses via their brain, players can experience and control their in-game characters with their minds. Both the game and the NerveGear were created by Akihiko Kayaba. On November 6, 10,000 players log into SAO's mainframe cyberspace for the first time, only to discover that they are unable to log out. Kayaba appears and tells the players that they must beat all 100 floors of Aincrad, a steel castle which is the setting of SAO, if they wish to be free. He also states that those who suffer in-game deaths or forcibly remove the NerveGear out-of-game will suffer real-life deaths."
            },
            {
                id:"jujutsu-kaisen",
                name:"Jujutsu Kaisen",
                summary:"Yuji Itadori is an unnaturally physically strong high school student living in Sendai. On his deathbed in June 2018, his grandfather instills two powerful messages within Yuji: 'always help others' and 'die surrounded by people'. Yuji's friends at the Occult Club attract Curses to their school when they unseal a rotten finger talisman. Yuji swallows the finger to protect Jujutsu Sorcerer Megumi Fushiguro, becoming host to a powerful Curse named Ryomen Sukuna. Due to Sukuna's evil nature, all sorcerers are required to exorcise him (and, by extension, Yuji) immediately. However upon seeing Yuji retaining control over his body, Megumi's teacher Satoru Gojo brings him to the Tokyo Prefectural Jujutsu High School with a proposal to his superiors: postpone Yuji's death sentence and train under Gojo until he consumes all 20 of Sukuna's fingers so the Curse can be eliminated. At the same time, a group of Cursed Spirits plot a multi-layered attack on the world of Jujutsu sorcery, including the Cursed Spirit Mahito and a corrupted sorcerer named Suguru Geto, who was executed by Gojo a year prior."
            },
            {
                id:"mondaiji-tachi-ga-isekai-kara-kuru-sou-desu-yo?",
                name:"Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?",
                summary:"Three children, Sakamaki Izayoi, Kudō Asuka, and Kasukabe Yō, live dull lives because they possess unmatched psychic powers. One day, they receive an envelope that transports them to Little Garden, a place of supernatural powers called 'Gifts'. There, the residents use Gifts to play high-stakes games known as Gift Games so as to earn wealth and prestige for their communities. So, the three children join the fallen 'No Name' community and resolve to help it regain its prosperity. As they learn more about Little Garden, they decide to overthrow the tyrannical Demon Lords."
            }
        ]

    },

    createBookNameEl: function (position, title) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 70,
            color: "#e65100",
            value: title.name,
        });
        const elPosition = position;
        elPosition.y = -10;
        entityEl.setAttribute("position", elPosition);
        /*entityEl.setAttribute("visible", true);*/
        return entityEl;
    },
    createBookDesciptionBox:function(position){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            height:20,
            width:20,
        })
        entityEl.setAttribute("material",{color:"black"})
        entityEl.setAttribute("position", position);
        return entityEl;
    },
    createBookDescriptionEl: function (position, description) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 30,
            color: "#e65100",
            value: description.summary,
        });
        const elPosition = position;
        elPosition.y = +10;
        entityEl.setAttribute("position", elPosition);
        /*entityEl.setAttribute("visible", true);*/
        return entityEl;
    },

})
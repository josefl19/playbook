const bio = {
    name: "Jose",
    lastName: "Fujarte",
    currentLocation: "Acámbaro",
    bornLocation: "Acámbaro",
    currentWork: "LaunchX",
    studies: [
        { 
            school: "TecNM en Celaya",
            from: new Date('8/20/2016'),
            to: new Date('12/16/2021'),
            carrer: "Ing. en Sistemas Computacionales"
        },
        { 
            school: "CBTIS No. 147",
            from: new Date('8/20/2013'),
            to: new Date('6/12/2016'),
            carrer: "Técnico en programación"
        }
    ],
    email: "jose.fl_@hotmail.com",
    sex: "Men",
    birthDate: new Date('2/19/1998'),
    languages: ["Español", "Ingles", "Aleman"],
    civilStatus: "Sigle",
    religion: "Catolic",
    family: [
        {
            name: "Josue Garza",
            relationship: "Son"
        },
        {
            name: "Jessamyn Fujarte",
            relationship: "Sister"
        },
        {
            name: "Elsy Fujarte",
            relationship: "Sister"
        }
    ]
}

const post = {
    user: user,
    content: "Este es un post desde el objeto creado en JS",
    noLikes: 5,
    noShared: 1, 
    comments: [
        {
            content: "Comentario 1",
            noLikes: 1,
            responses: [
                {
                    content: "Comentario 2",
                    noLikes: 4
                },
                {
                    content: "Comentario 2",
                    noLikes: 4
                }
            ]
        },
        {
            content: "Comentario 2",
            noLikes: 4,
            responses: []
        }
    ],
    newLike: function() {
        this.noLikes++
    },
    newComment: function(text) {
        this.comments.push({content: text, noLikes: 0, responses: []})
    }
}
const user = {
    name: "Jose Fujarte",
    username: "jose_fujarte",
    bio: "Descripcion del usuario, gustos, edad, frases, etc.",
    location: "Guanajuato",
    birthdate: "19 de febrero de 1998",
    userSince: "Julio 2012",
    followers: 298,
    follows: 2510,
    tweets: [
        {tweet: "Hola mundo",
         likes: 12,
         retweet: 4,
         comments: 3
        },
        {tweet: "Me encanta programar",
         likes: 19,
         retweet: 6,
         comments: 8
        },
        {tweet: "LaunchX es el mejor programa",
         likes: 99,
         retweet: 19,
         comments: 23
        } 
    ],
    likes: [
        {tweet: "NodeJS es el mejor framework",
         likes: 129,
         retweet: 41,
         comments: 33
        },
        {tweet: "Innovaccion Virtual es un gran programa",
         likes: 45550,
         retweet: 14236,
         comments: 8211
        },
    ],
}

const trending_topic = {
    position: 1,
    topic: "Politica",
    name: "#NoALaViolencia",
    numTweets: 10100,
    top: [
        {tweet: "Es importante decir NO a la violencia #NoALaViolencia",
         likes: 1219,
         retweet: 410,
         comments: 192
        },
        {tweet: "#NoALaViolencia en todas sus formas",
         likes: 1114,
         retweet: 388,
         comments: 99
        },
    ],
    latest: [
        {tweet: "Otro tweet de #NoALaViolencia",
         likes: 219,
         retweet: 86,
         comments: 111
        },
        {tweet: "#NoALaViolencia <3",
         likes: 188,
         retweet: 101,
         comments: 22
        },
    ],
    people: [user, user, user, user]
}

const hashtag = {

}
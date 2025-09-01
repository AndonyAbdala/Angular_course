interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { song: songDestructured, songDuration, details } = audioPlayer;
const { author } = details;

console.log('Song: ', songDestructured )
console.log('duation: ', songDuration )
console.log('author: ', author )




const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

console.log("Personaje 3:", dbz[2])
console.log("Personaje 4:", dbz[4] || "Personaje no disponible")

const [ , , personaje_3, personaje_4 = "Not found"] = dbz;
console.log("Personaje 3:", personaje_3)
console.log("Personaje 3:", personaje_4)



export {};
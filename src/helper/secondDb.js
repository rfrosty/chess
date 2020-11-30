let bigObj = { //have a demo like this ready in db (that can't be deleted) that we build from
    "user1": {
        signedIn: false,
        position: 1,
        moved: 0,
        white: true,
        canMove: false,
        piecesMoved: [], //could be 3
        casualty: null,//name
        pawnReincarnate: null,//name
        quit: false,
        rematch: false,
        pieces: {
            "pawn1": {
                white: true,
                rowPosition: '7/8',
                columnPosition: '1/2',
                alive: true,
                name: "pawn1",
            },
            "pawn2": {
                white: true,
                rowPosition: '7/8',
                columnPosition: '2/3',
                alive: true,
                name: "pawn2",
            },
            "pawn3": {
                white: true,
                rowPosition: '7/8',
                columnPosition: '3/4',
                alive: true,
                name: "pawn3",
            },
            "pawn4": {
                white: true,
                rowPosition: '7/8',
                columnPosition: '4/5',
                alive: true,
                name: "pawn4",
            },
            "pawn5": {
                white: true,
                rowPosition: '7/8',
                columnPosition: '5/6',
                alive: true,
                name: "pawn5",
            },
            "pawn6": {
                white: true,
                rowPosition: '7/8',
                columnPosition: '6/7',
                alive: true,
                name: "pawn6",
            },
            "pawn7": {
                white: true,
                rowPosition: '7/8',
                columnPosition: '7/8',
                alive: true,
                name: "pawn7",
            },
            "pawn8": {
                white: true,
                rowPosition: '7/8',
                columnPosition: '8/9',
                alive: true,
                name: "pawn8",
            },
            "rook1": {
                white: true,
                rowPosition: '8/9',
                columnPosition: '1/2',
                alive: true,
                neverMoved: true,
                name: "rook1",
            },
            "rook2": {
                white: true,
                rowPosition: '8/9',
                columnPosition: '8/9',
                alive: true,
                neverMoved: true,
                name: "rook2",
            },
            "knight1": {
                white: true,
                rowPosition: '8/9',
                columnPosition: '2/3',
                alive: true,
                name: "knight1",
            },
            "knight2": {
                white: true,
                rowPosition: '8/9',
                columnPosition: '7/8',
                alive: true,
                name: "knight2",
            },
            "bishop1": {
                white: true,
                rowPosition: '8/9',
                columnPosition: '3/4',
                alive: true,
                name: "bishop1",
            },
            "bishop2": {
                white: true,
                rowPosition: '8/9',
                columnPosition: '6/7',
                alive: true,
                name: "bishop2",
            },
            "king": {
                white: true,
                rowPosition: '8/9',
                columnPosition: '5/6',
                alive: true,
                neverMoved: true,
                name: "king",
            },
            "queen": {
                white: true,
                rowPosition: '8/9',
                columnPosition: '4/5',
                alive: true,
                name: "queen",
            },
        },
    },
    user2: {
        signedIn: false,
        position: 2,
        moved: 0,
        white: false,
        canMove: false,
        piecesMoved: [], //could be 3
        casualty: null,//name
        pawnReincarnate: null,//name
        quit: false,
        rematch: false,
        pieces: {
            "pawn1": {
                white: false,
                rowPosition: '2/3',
                columnPosition: '8/9',
                alive: true,
                name: "pawn1",
            },
            "pawn2": {
                white: false,
                rowPosition: '2/3',
                columnPosition: '7/8',
                alive: true,
                name: "pawn2",
            },
            "pawn3": {
                white: false,
                rowPosition: '2/3',
                columnPosition: '6/7',
                alive: true,
                name: "pawn3",
            },
            "pawn4": {
                white: false,
                rowPosition: '2/3',
                columnPosition: '5/6',
                alive: true,
                name: "pawn4",
            },
            "pawn5": {
                white: false,
                rowPosition: '2/3',
                columnPosition: '4/5',
                alive: true,
                name: "pawn5",
            },
            "pawn6": {
                white: false,
                rowPosition: '2/3',
                columnPosition: '3/4',
                alive: true,
                name: "pawn6",
            },
            "pawn7": {
                white: false,
                rowPosition: '2/3',
                columnPosition: '2/3',
                alive: true,
                name: "pawn7",
            },
            "pawn8": {
                white: false,
                rowPosition: '2/3',
                columnPosition: '1/2',
                alive: true,
                name: "pawn8",
            },
            "rook1": {
                white: false,
                rowPosition: '1/2',
                columnPosition: '8/9',
                alive: true,
                neverMoved: true,
                name: "rook1",
            },
            "rook2": {
                white: false,
                rowPosition: '1/2',
                columnPosition: '1/2',
                alive: true,
                neverMoved: true,
                name: "rook2",
            },
            "knight1": {
                white: false,
                rowPosition: '1/2',
                columnPosition: '7/8',
                alive: true,
                name: "knight1",
            },
            "knight2": {
                white: false,
                rowPosition: '1/2',
                columnPosition: '2/3',
                alive: true,
                name: "knight2",
            },
            "bishop1": {
                white: false,
                rowPosition: '1/2',
                columnPosition: '6/7',
                alive: true,
                name: "bishop1",
            },
            "bishop2": {
                white: false,
                rowPosition: '1/2',
                columnPosition: '3/4',
                alive: true,
                name: "bishop2",
            },
            "king": {
                white: false,
                rowPosition: '1/2',
                columnPosition: '5/6',
                alive: true,
                neverMoved: true,
                name: "king",
            },
            "queen": {
                white: false,
                rowPosition: '1/2',
                columnPosition: '4/5',
                alive: true,
                name: "queen",
            },
        },
    },
}

export default bigObj;

// db.ref('matches/template2').set(secondBigObj);
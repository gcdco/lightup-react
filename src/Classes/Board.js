class Board {
    constructor(data, cols, rows){
        this.raw = data;
        this.cols = cols;
        this.rows = rows;
        this.whiteSpaces = [];
        this.numberSpaces = [];
        this.lightSpaces = [];
        this.board = createBoard(this.raw);
    }

    createBoard = (data) => {
        const board = [];
        let row = [];
    
        data.forEach((s) => {
            row.push({
                id: s.id,
                black: s.black,
                light: s.light,
                lit: s.lit,
                number: s.number,
                value: s.value
            });
            if (row.length === 7) {
                board.push(row);
                row = [];
            }
        });
        return board;
    };

}

export { Board };
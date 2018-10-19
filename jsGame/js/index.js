let gameInstance = null;

class Game {
    constructor(size, colors){
        this._factory(size, colors);
        this.counter = 0;
    
        if(!gameInstance){
            gameInstance = this;
        } 
        return gameInstance;
    }

    getCounter(){
        return this.counter++;
    }

    _createBlock(type, style) {
        const block = document.createElement(type);
        for ( let key in style ) {
            block.style[key] = style[key];
        }
        return block;
    }

    _factory(size, colors){
            for(let j = 0; j < size; j++) {
                for(let i = 0; i < size; i++) {
                    const block = this._createBlock('div', blockStyles );
                    block.style.backgroundColor = `rgb(
                        ${(Math.abs(colors.red.from - colors.red.to) / (size - 1)) * (i + j + 1)}, 
                        ${(Math.abs(colors.green.from - colors.green.to) / (size - 1)) * (i + j + 1)}, 
                        ${(Math.abs(colors.blue.from - colors.blue.to) / (size - 1)) * (i + j + 1)}
                        )`;                    
                    block.style.left = (W + 2) * i + 'px';
                    block.style.top = (H + 2) * j + 'px';
                    document.body.appendChild(block);
                }
            }
    }
};

const W = 60;
const H = 100;
const blockStyles = {
    width: W + 'px',
    height: H +'px',
    position: 'absolute',
}

const colors = {
    red: {
        from: 0,
        to: 255
    },
    green: {
        from: 100,
        to: 200
    },
    blue: {
        from: 100,
        to: 200
    }
};

const lineSize = 6;

const myGame = new Game(lineSize, colors);


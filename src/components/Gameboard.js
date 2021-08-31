import React, {forwardRef, useEffect, useState,useImperativeHandle} from "react";

const  Gameboard =forwardRef((props, ref) =>{
    const {status,stopTimer,updateScore} = props;

    const initialContent = (
        <div className="game-instruction">
            <h3 className="game-instruction__header">Instruction</h3>
            <p className="game-instruction__content">
            - Click on the card to view the back face of the card. <br />
            - Get two exact same card to score.<br />- Score are based on the time
            and level. <br />- You only have 60s for each level. <br />- There are
            three levels, '2x2', '4x4' and '6x6'. <br />- Press 'Start Game'
            button when you are ready.
            </p>
        </div>
    );
    
    const boardSize = 2;
    
    let emptyCards = [];
    for(let i =0; i<boardSize*boardSize; i++){
        emptyCards.push({
            id:i,
            name:"",
            flip:false,
            lock:false
        });
    }

    const[boardContent, setboardContent] = useState(initialContent);
    const[boardSizeClass, setBoardSizeClass] = useState("");
    const[cards, setCards] = useState(emptyCards);
    const [tempRecord, setTempRecord] = useState([]);

    function checkGame (){
        let counter = 1;
        console.log(cards);
        for(let i=0; i< cards.length; i++){
            if (cards[i].flip){
                counter+=1;
            }
        }
        // console.log("counter"+counter);
        if(counter === cards.length){
            return true;
        }else{
            return false;
        }
    }
    // update flip status and display on the board
    function updateFlip(num){
        let tempCards = [ ...cards ];
        if(num.length >1){
            for(let i=0; i< num.length; i++){
                let tempCard = { ...tempCards[num[i]] };
                tempCard.flip = !cards[num[i]].flip;
                tempCards[num[i]].flip = tempCard.flip;
            }
        }else{
            let tempCard = { ...tempCards[num] };
            tempCard.flip = !cards[num].flip;
            tempCards[num].flip = tempCard.flip;
        }
        
        setCards( tempCards );
        setboardContent(generateBoard(cards) );
    }

    // lock cards
    function cardLock(num){
        let tempCards = [ ...cards ];
        for(let i=0; i< 2; i++){
            let tempCard = { ...tempCards[num[i]] };
            tempCard.lock = true;
            tempCards[num[i]].lock = tempCard.lock;
        }
        setCards( tempCards );
        setboardContent(generateBoard(cards) );
    }

    // check if score can be updated if two cards are flip to true 
    function checkScore(){
        const gameRecords = tempRecord.slice(-2);
        const prevNum = gameRecords[0];
        const currentNum = gameRecords[1];
        console.log("check score");

        console.log(cards);
        if(cards[prevNum].id !== cards[currentNum].id){
            if(cards[prevNum].name === cards[currentNum].name ){
                cardLock([prevNum,currentNum]);
                setTempRecord([]);
                console.log("clear record");
                console.log(tempRecord);
                updateScore();
                // lock card flip
            }else{
                updateFlip([prevNum,currentNum]);
            }
        }
    }

    // trigger when a card is clicked
    const onClickCard=(num)=>{
        // if card not locked
        if(!cards[num].lock){
            // flip card and change card status
            updateFlip(num);
            // if flip is effective
            if( cards[num].flip ){
                console.log("flip"+num);
                // update flip record list 
                let tempRecordNum = tempRecord;
                tempRecordNum.push(num);
                setTempRecord(tempRecordNum);
                // update score
                console.log("add record");
                console.log(tempRecordNum);
                if(tempRecord.length>1){
                    checkScore();
                }

                const result = checkGame();
                if(result){
                    // go back to stop game
                    stopTimer();
                    setTempRecord([]);
                    console.log(cards);
                    resetBoard(boardSize);
                }
            }
        }
        
    }

    // generate random cards list based on board size
    function getRandomCards(n){
        let selected =[];
        let cardsPicked =[];
        const cards = ['html5','css3','js','sass','nodejs','react','linkedin','heroku','github','aws'];
        let shuffled = cards.sort(function(){return .5 - Math.random()});
        selected = shuffled.slice(0,n);
        for(var x= 0; x< selected.length; x++){
            for (var i = 0; i < 2; i++) {
                cardsPicked.push(selected[x]);
            }
        }
        cardsPicked = cardsPicked.sort(function(){return .5 - Math.random()});
        
        return cardsPicked;
    }

    // single card content 
    const generateCard=(newCard,num)=>{
        const flipClass = newCard.flip ? "card--flipped":"";  
        const lockClass =  newCard.lock ? "card--locked":""
        return(
            <div className={`card ${newCard.name} ${flipClass} ${lockClass}`} onClick={()=>{onClickCard(num)}} key={num}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
            </div>
        )
    }

    // generate cards on board
    function generateBoard(newCards){
        let cards = [];
        for(let i=0; i< newCards.length; i++ ){
            cards.push(generateCard(newCards[i],i))
        }
        return cards;
    }
    
    // create new cards
    function clearCards(){
        const cardsClass = getRandomCards(boardSize);
        let tempCards = emptyCards;
        let newCards = [];
        for(let i =0; i<boardSize*boardSize; i++){
            let tempCard = { ...tempCards[i] };
            tempCard.name = cardsClass[i];
            newCards.push(tempCard)
        }
        setCards(newCards);
        console.log("reset cards");
    }

    // reset cards status only before new game start
    useEffect(()=>{
        if(!status){
            clearCards();
        }
    },[status])

    // reset game board 
    function resetBoard(boardSize){
        setBoardSizeClass("game-board-"+boardSize+"-row");
        console.log(cards);
        const newboard = generateBoard(cards);
        setboardContent(newboard);
    }

    // click button to trigger game content rerender on board
    useImperativeHandle(
        ref,
        ()=>({
            renderBoard(){
                if(!status){
                    resetBoard(boardSize);
                }
            }
        })
    )

    return <div className={`game-board ${boardSizeClass}`}>{boardContent}</div>;
})

export default Gameboard;
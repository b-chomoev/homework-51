import React, {useState} from 'react';
import LotteryBall from './components/lotteryBall.tsx';
import './App.css';

const App: React.FC = () => {
    const initialNumbers = [5, 11, 16, 23, 32];
    const [numbers, setNumbers] = useState<number[]>(initialNumbers);

    const addNewNumbers = () => {
        const newNumbers = [...Array(5)].map(() => {
            let randomNum;
            do {
                randomNum = Math.floor(Math.random() * 32) + 5;
            } while (numbers.includes(randomNum));
            return randomNum;
        });

        newNumbers.sort((a, b) => a - b);
        setNumbers(newNumbers);
    };

    return (
        <div className="app">
            <button  className="button" onClick={addNewNumbers}>New numbers</button>
            <div className="lottery-balls">
                {numbers.map((num, index) => (
                    <LotteryBall key={index} number={num} />
                ))}
            </div>
        </div>
    );
};

export default App;
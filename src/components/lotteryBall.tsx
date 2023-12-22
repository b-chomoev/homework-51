import {FC} from 'react';

interface Props {
    number: number;
}

const LotteryBall: FC<Props> = ({ number }) => {
    return <div className="lottery-ball">{number}</div>;
};

export default LotteryBall;
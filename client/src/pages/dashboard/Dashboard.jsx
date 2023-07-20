import ChoreCard from '../../components/cards/chores/ChoreCard.jsx';

const Dashboard = () => {
    return (
        <main className='pageMain'>
            <ChoreCard />
            <ChoreCard />
            <ChoreCard />
            <ChoreCard />
        </main>
    )
};

export default Dashboard;
// need state to change between dashboard pages and get rid of seperate pages for chores, rewards, and consequences